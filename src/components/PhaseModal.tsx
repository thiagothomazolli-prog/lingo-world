import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Volume2, Mic, MicOff, CheckCircle2, AlertCircle, Sparkles, Star, ArrowRight, Lightbulb, Play } from 'lucide-react';
import { Phase, Exercise, UserProfile } from '../types';
import { speakText } from '../utils/storage';
import { MascotLingo } from './MascotLingo';

interface PhaseModalProps {
  phase: Phase;
  user: UserProfile;
  onClose: () => void;
  onCompletePhase: (phaseId: string, earnedXp: number, earnedGems: number, stars: number) => void;
  onRecordMissionActivity?: (category: 'pronunciation' | 'grammar') => void;
}

export const PhaseModal: React.FC<PhaseModalProps> = ({
  phase,
  user,
  onClose,
  onCompletePhase,
  onRecordMissionActivity,
}) => {
  const [step, setStep] = useState<'theory' | 'exercise' | 'complete'>('theory');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [fillBlankInput, setFillBlankInput] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [spokenResult, setSpokenResult] = useState('');
  const [mistakesCount, setMistakesCount] = useState(0);

  const currentExercise: Exercise | undefined = phase.exercises[currentExerciseIndex];
  const progressPercent = ((currentExerciseIndex + (hasAnswered ? 1 : 0)) / phase.exercises.length) * 100;

  // Auto speak on exercise start if enabled
  useEffect(() => {
    if (step === 'exercise' && currentExercise?.audioPhrase && user.autoSpeak) {
      speakText(currentExercise.audioPhrase, 'en-US', user.speechSpeed);
    }
    setSelectedOption(null);
    setSelectedWords([]);
    setFillBlankInput('');
    setHasAnswered(false);
    setIsCorrect(false);
    setFeedbackMessage('');
    setSpokenResult('');
  }, [currentExerciseIndex, step]);

  const handleStartExercise = () => {
    setStep('exercise');
  };

  const handleToggleMic = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Seu navegador não possui suporte ao microfone Web Speech. Você pode clicar no botão verificar para prosseguir.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSpokenResult(transcript);
        setIsListening(false);

        const target = (currentExercise?.correctAnswer || '').toLowerCase().replace(/[.,!?;:]/g, '').trim();
        const recognized = transcript.toLowerCase().replace(/[.,!?;:]/g, '').trim();

        const match = recognized === target || target.includes(recognized) || recognized.includes(target);
        setIsCorrect(match);
        setHasAnswered(true);
        setFeedbackMessage(
          match
            ? 'Pronúncia excelente! Muito clara e natural.'
            : `Você disse "${transcript}". Dica de pronúncia: ${currentExercise?.phoneticHint || 'Tente soar o som com mais clareza.'}`
        );
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const handleWordClick = (word: string) => {
    if (hasAnswered) return;
    if (selectedWords.includes(word)) {
      setSelectedWords((prev) => prev.filter((w) => w !== word));
    } else {
      setSelectedWords((prev) => [...prev, word]);
    }
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || hasAnswered) return;

    let correct = false;

    if (currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening' || currentExercise.type === 'translate') {
      correct = selectedOption === currentExercise.correctAnswer;
    } else if (currentExercise.type === 'word-order') {
      const userSentence = selectedWords.join(' ');
      correct = userSentence.trim().toLowerCase() === currentExercise.correctAnswer.trim().toLowerCase();
    } else if (currentExercise.type === 'fill-blank') {
      correct = fillBlankInput.trim().toLowerCase() === currentExercise.correctAnswer.trim().toLowerCase();
    } else if (currentExercise.type === 'speaking-repeat') {
      correct = true;
    }

    setIsCorrect(correct);
    setHasAnswered(true);

    if (!correct) {
      setMistakesCount((prev) => prev + 1);
      setFeedbackMessage(currentExercise.explanation);
    } else {
      setFeedbackMessage('Exato! ' + currentExercise.explanation);
      if (currentExercise.audioPhrase && user.soundEnabled) {
        speakText(currentExercise.audioPhrase, 'en-US', user.speechSpeed);
      }
      if (onRecordMissionActivity) {
        if (currentExercise.type === 'speaking-repeat' || currentExercise.skillCategory === 'pronunciation') {
          onRecordMissionActivity('pronunciation');
        } else if (currentExercise.skillCategory === 'grammar') {
          onRecordMissionActivity('grammar');
        }
      }
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < phase.exercises.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
    } else {
      setStep('complete');
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
      });

      const stars = mistakesCount === 0 ? 3 : mistakesCount <= 2 ? 2 : 1;
      onCompletePhase(phase.id, phase.xpReward, phase.gemsReward, stars);
    }
  };

  const isCheckDisabled = () => {
    if (!currentExercise) return true;
    if (currentExercise.type === 'word-order') return selectedWords.length === 0;
    if (currentExercise.type === 'fill-blank') return !fillBlankInput.trim();
    if (currentExercise.type === 'speaking-repeat') return false;
    return !selectedOption;
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col w-full h-full overflow-hidden select-none">
      {/* 🟢 Top Navigation Bar estilo Duolingo */}
      <header className="shrink-0 px-4 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-3 border-b border-slate-200/80 bg-white flex items-center justify-between gap-3">
        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-slate-700 rounded-full transition-colors active:scale-95"
          title="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 'exercise' ? (
          <div className="flex-1 max-w-md h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 p-0.5">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        ) : (
          <div className="flex-1 text-center font-extrabold text-sm text-slate-700">
            {phase.title}
          </div>
        )}

        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-xs font-black shrink-0">
          <span>⚡ +{phase.xpReward} XP</span>
        </div>
      </header>

      {/* 📖 Step 1: Theory & Quick Intro */}
      {step === 'theory' && (
        <main className="flex-1 overflow-y-auto px-4 py-6 max-w-xl w-full mx-auto flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-indigo-50/90 p-4 rounded-3xl border-2 border-indigo-100">
              <MascotLingo mood="explaining" size="sm" />
              <div>
                <span className="text-[11px] font-black text-indigo-600 uppercase tracking-wider block">Objetivo Pedagógico</span>
                <p className="text-sm font-bold text-indigo-950 mt-0.5">{phase.pedagogicalObjective}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Dicas Práticas para Esta Lição:</span>
              </div>
              <div className="space-y-2.5">
                {phase.theorySummary.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs font-bold text-emerald-900">
              <span>Recompensas ao Concluir:</span>
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 font-black">⚡ +{phase.xpReward} XP</span>
                <span className="text-sky-600 font-black">💎 +{phase.gemsReward} Gemas</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleStartExercise}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 border-b-4 border-b-emerald-700 active:border-b-0 active:translate-y-1 text-white font-black text-base uppercase tracking-wider rounded-2xl shadow-lg transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Começar Lição ({phase.exercises.length} tarefas)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </main>
      )}

      {/* 🎯 Step 2: Interactive Duolingo-style Exercise */}
      {step === 'exercise' && currentExercise && (
        <main className="flex-1 overflow-y-auto px-4 py-6 max-w-xl w-full mx-auto flex flex-col justify-between">
          <div className="space-y-5">
            {/* Exercise Skill Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                Tarefa {currentExerciseIndex + 1} de {phase.exercises.length}
              </span>
              <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-[11px] font-black rounded-full uppercase">
                {currentExercise.skillCategory}
              </span>
            </div>

            {/* Exercise Prompt */}
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-snug">
              {currentExercise.prompt}
            </h2>

            {/* Context sentence box with speech bubble */}
            {(currentExercise.contextSentence || currentExercise.audioPhrase) && (
              <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl flex items-center justify-between gap-3 shadow-xs">
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {currentExercise.contextSentence || currentExercise.audioPhrase}
                  </p>
                  {currentExercise.contextSentencePt && (
                    <p className="text-xs font-semibold text-slate-500">
                      {currentExercise.contextSentencePt}
                    </p>
                  )}
                </div>

                {currentExercise.audioPhrase && (
                  <button
                    onClick={() => speakText(currentExercise.audioPhrase!, 'en-US', user.speechSpeed)}
                    className="p-3 bg-white hover:bg-indigo-50 border-2 border-indigo-200 rounded-xl text-indigo-600 active:scale-95 transition-transform shrink-0 shadow-xs"
                    title="Ouvir frase"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            )}

            {/* 1. Multiple Choice & Listening Options */}
            {(currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening' || currentExercise.type === 'translate') &&
              currentExercise.options && (
                <div className="space-y-3 pt-2">
                  {currentExercise.options.map((opt, i) => {
                    const isSelected = selectedOption === opt;
                    let btnStyle = 'bg-white border-2 border-slate-200 border-b-4 text-slate-800';

                    if (isSelected) {
                      btnStyle = 'bg-sky-50 border-2 border-sky-500 border-b-4 border-b-sky-600 text-sky-950 font-black';
                    }

                    if (hasAnswered) {
                      if (opt === currentExercise.correctAnswer) {
                        btnStyle = 'bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 font-black';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-rose-50 border-2 border-rose-400 border-b-4 border-b-rose-600 text-rose-950';
                      }
                    }

                    return (
                      <button
                        key={i}
                        disabled={hasAnswered}
                        onClick={() => setSelectedOption(opt)}
                        className={`w-full p-4 rounded-2xl text-left font-bold text-sm sm:text-base transition-transform active:translate-y-1 flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        <span className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs font-bold shrink-0 ml-2">
                          {String.fromCharCode(65 + i)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

            {/* 2. Word Order Bank */}
            {currentExercise.type === 'word-order' && currentExercise.options && (
              <div className="space-y-4 pt-2">
                {/* Construction Zone */}
                <div className="min-h-16 p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap gap-2 items-center">
                  {selectedWords.length === 0 ? (
                    <span className="text-xs font-semibold text-slate-400">Toque nas palavras abaixo na ordem correta:</span>
                  ) : (
                    selectedWords.map((word, idx) => (
                      <button
                        key={idx}
                        disabled={hasAnswered}
                        onClick={() => handleWordClick(word)}
                        className="px-3.5 py-2 bg-indigo-600 border-b-2 border-indigo-800 text-white font-black text-sm rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer"
                      >
                        {word}
                      </button>
                    ))
                  )}
                </div>

                {/* Word Bank */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {currentExercise.options.map((word, idx) => {
                    const isUsed = selectedWords.includes(word);
                    return (
                      <button
                        key={idx}
                        disabled={isUsed || hasAnswered}
                        onClick={() => handleWordClick(word)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-bold border-2 border-b-4 transition-all cursor-pointer ${
                          isUsed
                            ? 'opacity-25 bg-slate-100 border-slate-200 text-slate-400'
                            : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 active:translate-y-1'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Fill Blank */}
            {currentExercise.type === 'fill-blank' && currentExercise.options && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-500">Escolha a palavra que completa a frase:</span>
                <div className="grid grid-cols-2 gap-3">
                  {currentExercise.options.map((opt, idx) => {
                    const isSelected = fillBlankInput === opt;
                    return (
                      <button
                        key={idx}
                        disabled={hasAnswered}
                        onClick={() => setFillBlankInput(opt)}
                        className={`p-4 rounded-2xl text-center font-bold text-base border-2 border-b-4 transition-transform active:translate-y-1 cursor-pointer ${
                          isSelected
                            ? 'bg-sky-50 border-sky-500 border-b-sky-600 text-sky-950 font-black'
                            : 'bg-white border-slate-200 text-slate-800'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. Speaking Repeat */}
            {currentExercise.type === 'speaking-repeat' && (
              <div className="space-y-5 pt-4 text-center">
                <p className="text-xs font-bold text-slate-500">
                  Toque no microfone e pronuncie a frase em inglês:
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={handleToggleMic}
                    className={`w-24 h-24 rounded-full flex items-center justify-center border-b-4 transition-transform active:translate-y-1 shadow-xl cursor-pointer ${
                      isListening
                        ? 'bg-rose-500 border-rose-700 text-white animate-pulse'
                        : 'bg-indigo-600 border-indigo-800 text-white'
                    }`}
                  >
                    {isListening ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
                  </button>
                </div>

                {spokenResult && (
                  <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-900">
                    Ouvido: "{spokenResult}"
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      )}

      {/* 🏆 Step 3: Completion Celebration */}
      {step === 'complete' && (
        <main className="flex-1 overflow-y-auto px-4 py-8 max-w-xl w-full mx-auto flex flex-col items-center justify-center text-center space-y-6">
          <MascotLingo mood="cheering" size="lg" message="Incrível! Você conquistou esta fase!" />

          <div className="space-y-1">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Fase Concluída!</h2>
            <p className="text-sm font-semibold text-slate-500">
              Você avançou mais um passo na sua fluência global.
            </p>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-3">
            {[1, 2, 3].map((starIdx) => {
              const stars = mistakesCount === 0 ? 3 : mistakesCount <= 2 ? 2 : 1;
              const earned = starIdx <= stars;
              return (
                <Star
                  key={starIdx}
                  className={`w-12 h-12 ${
                    earned ? 'text-amber-400 fill-amber-400 drop-shadow-md' : 'text-slate-200 fill-slate-100'
                  }`}
                />
              );
            })}
          </div>

          {/* Rewards */}
          <div className="w-full flex items-center justify-center gap-6 py-4 bg-slate-50 rounded-3xl border-2 border-slate-200 max-w-xs mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-indigo-600">+{phase.xpReward}</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase">XP Ganho</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-sky-500">+{phase.gemsReward}</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Gemas</span>
            </div>
          </div>

          <div className="w-full pt-4">
            <button
              onClick={onClose}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 border-b-4 border-b-emerald-700 active:border-b-0 active:translate-y-1 text-white font-black text-base uppercase tracking-wider rounded-2xl shadow-lg transition-transform cursor-pointer"
            >
              Continuar Jornada
            </button>
          </div>
        </main>
      )}

      {/* 🟩 Bottom Feedback Bar estilo Duolingo */}
      {step === 'exercise' && (
        <footer
          className={`shrink-0 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t transition-colors ${
            !hasAnswered
              ? 'bg-white border-slate-200'
              : isCorrect
              ? 'bg-emerald-100 border-emerald-300'
              : 'bg-rose-100 border-rose-300'
          }`}
        >
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {hasAnswered ? (
              <div className="flex items-start gap-3 w-full sm:w-auto">
                {isCorrect ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="text-left">
                  <div className={`font-black text-base ${isCorrect ? 'text-emerald-900' : 'text-rose-900'}`}>
                    {isCorrect ? 'Excelente! Resposta correta!' : 'Não foi dessa vez.'}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">
                    {feedbackMessage}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="w-full sm:w-auto">
              {!hasAnswered ? (
                <button
                  disabled={isCheckDisabled()}
                  onClick={handleCheckAnswer}
                  className="w-full sm:w-48 py-3.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-200 disabled:border-b-slate-300 disabled:text-slate-400 border-b-4 border-b-emerald-700 active:border-b-0 active:translate-y-1 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-md transition-all cursor-pointer"
                >
                  Verificar
                </button>
              ) : (
                <button
                  onClick={handleNextExercise}
                  className={`w-full sm:w-48 py-3.5 text-white font-black text-sm uppercase tracking-wider rounded-2xl border-b-4 active:border-b-0 active:translate-y-1 shadow-md transition-all cursor-pointer ${
                    isCorrect
                      ? 'bg-emerald-500 hover:bg-emerald-600 border-b-emerald-700'
                      : 'bg-rose-500 hover:bg-rose-600 border-b-rose-700'
                  }`}
                >
                  Continuar
                </button>
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
