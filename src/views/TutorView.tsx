import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Volume2, Sparkles, AlertCircle, CheckCircle2, RefreshCw, MessageSquare, BookOpen } from 'lucide-react';
import { TutorMessage, UserProfile } from '../types';
import { speakText } from '../utils/storage';
import { MascotLingo } from '../components/MascotLingo';
import { API_BASE_URL } from '../config';

interface TutorViewProps {
  user: UserProfile;
  onAwardXp: (xp: number, gems: number) => void;
}

const SCENARIOS = [
  { id: 'free', title: 'Conversa Livre', icon: '💬', desc: 'Converse sobre qualquer assunto do seu dia a dia' },
  { id: 'airport', title: 'No Aeroporto & Imigração', icon: '✈️', desc: 'Pratique alfândega, bagagens e conexões em Nova York' },
  { id: 'restaurant', title: 'No Restaurante', icon: '🍽️', desc: 'Peça pratos, faça perguntas ao garçom e pague a conta' },
  { id: 'interview', title: 'Entrevista de Emprego', icon: '💼', desc: 'Apresente suas experiências profissionais e pontos fortes' },
  { id: 'hotel', title: 'Check-in no Hotel', icon: '🏨', desc: 'Resolva reservas, café da manhã e horários' },
];

export const TutorView: React.FC<TutorViewProps> = ({ user, onAwardXp }) => {
  const [selectedScenario, setSelectedScenario] = useState(SCENARIOS[0]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<TutorMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: `Hello ${user.name}! I am Professor Lingo. Let's practice English together today. How was your day?`,
      translation: `Olá ${user.name}! Eu sou o Professor Lingo. Vamos praticar inglês juntos hoje. Como foi o seu dia?`,
      timestamp: Date.now(),
      followUpQuestion: 'Tell me one thing you did today!',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: TutorMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/gemini/tutor-chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          scenario: selectedScenario.title,
          cefrLevel: user.cefrLevel,
          studentName: user.name,
          chatHistory: messages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      const botMsg: TutorMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "I understand! Let's continue practicing.",
        translation: data.replyPt,
        timestamp: Date.now(),
        correction: data.hasCorrection ? data.correction : null,
        pronunciationTip: data.pronunciationTip || null,
        followUpQuestion: data.followUpQuestion,
      };

      setMessages((prev) => [...prev, botMsg]);

      // Award XP
      if (data.xpEarned) {
        onAwardXp(data.xpEarned, 2);
      }

      // Auto speak response if enabled
      if (user.autoSpeak && data.reply) {
        speakText(data.reply, 'en-US', user.speechSpeed);
      }
    } catch (err) {
      console.error('Tutor chat failed:', err);
      const fallbackMsg: TutorMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: `Great sentence, ${user.name}! Keep practicing with me. What would you like to talk about next?`,
        translation: 'Ótima frase! Continue praticando comigo. Sobre o que você gostaria de falar agora?',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Seu navegador não possui suporte ao microfone Web Speech. Você pode digitar sua mensagem no campo de texto.');
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      return;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsRecording(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsRecording(false);
        if (transcript) {
          setInputMessage(transcript);
          handleSendMessage(transcript);
        }
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch (e) {
      console.error(e);
      setIsRecording(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'assistant',
        content: `Starting scenario: "${selectedScenario.title}". Hello! How can I help you today?`,
        translation: `Iniciando cenário: "${selectedScenario.title}". Olá! Como posso ajudá-lo hoje?`,
        timestamp: Date.now(),
      },
    ]);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Scenario Pill Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>Selecione uma Situação de Prática:</span>
          <button
            onClick={handleResetChat}
            className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reiniciar Conversa</span>
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SCENARIOS.map((sc) => {
            const isSelected = selectedScenario.id === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScenario(sc);
                  handleResetChat();
                }}
                className={`px-3.5 py-2 rounded-2xl text-xs font-extrabold shrink-0 border transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                <span>{sc.icon}</span>
                <span>{sc.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-lg flex flex-col h-[520px] overflow-hidden">
        {/* Chat Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <MascotLingo mood="happy" size="sm" />
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-black text-sm text-slate-900">Professor Lingo</h4>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-emerald-600 font-bold">Online 24/7</span>
              </div>
              <p className="text-xs text-slate-500">{selectedScenario.desc}</p>
            </div>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                    isUser
                      ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-medium rounded-br-none shadow-xs'
                      : 'bg-slate-100 text-slate-900 rounded-bl-none border border-slate-200/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p>{m.content}</p>
                    {!isUser && (
                      <button
                        onClick={() => speakText(m.content, 'en-US', user.speechSpeed)}
                        className="text-slate-400 hover:text-indigo-600 p-1 shrink-0 cursor-pointer"
                        title="Ouvir áudio"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Translation for Assistant messages */}
                  {m.translation && (
                    <div className="mt-2 pt-2 border-t border-slate-200 text-xs text-slate-500 italic">
                      {m.translation}
                    </div>
                  )}
                </div>

                {/* Empathetic Pedagogical Correction Box */}
                {m.correction && (
                  <div className="max-w-[85%] sm:max-w-[75%] p-3.5 bg-amber-50/90 border border-amber-200 rounded-2xl text-xs space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Dica Pedagógica do Professor Lingo</span>
                    </div>
                    <div className="text-slate-700">
                      <span className="line-through text-rose-500 mr-2">{m.correction.originalPhrase}</span>
                      <span className="font-bold text-emerald-700">➜ {m.correction.correctedPhrase}</span>
                    </div>
                    <p className="text-amber-900 font-medium">{m.correction.explanation}</p>
                  </div>
                )}

                {/* Pronunciation Tip Box */}
                {m.pronunciationTip && (
                  <div className="max-w-[85%] sm:max-w-[75%] p-3 bg-indigo-50 border border-indigo-100 rounded-2xl text-xs flex items-start gap-2.5">
                    <Volume2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-indigo-900">
                        Pronúncia de "{m.pronunciationTip.word}" {m.pronunciationTip.ipa}:
                      </span>
                      <p className="text-slate-600 mt-0.5">{m.pronunciationTip.advice}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 p-3 bg-slate-100 rounded-2xl max-w-xs text-xs text-slate-500 animate-pulse">
              <Sparkles className="w-4 h-4 text-indigo-600 animate-spin" />
              <span>Professor Lingo está pensando e formulando a resposta...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/80">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Voice Input Button */}
            <button
              type="button"
              onClick={handleToggleVoiceInput}
              className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                isRecording
                  ? 'bg-rose-500 text-white ring-4 ring-rose-200 animate-pulse'
                  : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-600'
              }`}
              title={isRecording ? 'Parar gravação' : 'Falar por voz em inglês'}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={isRecording ? 'Ouvindo sua pronúncia...' : 'Digite em inglês para praticar...'}
              className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="w-11 h-11 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-md shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
