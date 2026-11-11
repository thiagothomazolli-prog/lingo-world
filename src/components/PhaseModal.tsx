import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Volume2, Mic, MicOff, CheckCircle2, AlertCircle, Sparkles, Star, ArrowRight, Lightbulb, Play } from 'lucide-react';
import { Phase, Exercise, UserProfile } from '../types';
import { speakText, getExerciseVoiceGender, preloadExerciseAudio } from '../utils/storage';
import { MascotLingo } from './MascotLingo';
import { sfx } from '../utils/soundEffects';

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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [spokenResult, setSpokenResult] = useState('');
  const [mistakesCount, setMistakesCount] = useState(0);

  const currentExercise: Exercise | undefined = phase.exercises[currentExerciseIndex];
  const progressPercent = ((currentExerciseIndex + (hasAnswered ? 1 : 0)) / phase.exercises.length) * 100;
  const exerciseVoiceGender: 'male' | 'female' = currentExercise
    ? getExerciseVoiceGender(currentExercise.id, currentExerciseIndex)
    : 'female';

  // Listen to global TTS speaking state for the live audio line graph
  useEffect(() => {
    const handleTtsState = (e: Event) => {
      const customEvent = e as CustomEvent<{ speaking: boolean }>;
      setIsSpeaking(Boolean(customEvent.detail?.speaking));
    };
    window.addEventListener('lingo-tts-state', handleTtsState);
    return () => {
      window.removeEventListener('lingo-tts-state', handleTtsState);
    };
  }, []);

  // Preload & Auto speak on exercise start if enabled
  useEffect(() => {
    if (step === 'exercise' && currentExercise) {
      const phraseToSpeak = currentExercise.audioPhrase || currentExercise.correctAnswer;
      const phrasesToPreload: string[] = [];
      if (phraseToSpeak) phrasesToPreload.push(phraseToSpeak);
      if (currentExercise.visualOptions) {
        currentExercise.visualOptions.forEach((v) => phrasesToPreload.push(v.label || v.text));
      }
      preloadExerciseAudio(phrasesToPreload, exerciseVoiceGender);

      if (phraseToSpeak && user.autoSpeak !== false) {
        speakText(phraseToSpeak, 'en-US', user.speechSpeed, exerciseVoiceGender);
      }
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
    sfx.playTap();
    if (selectedWords.includes(word)) {
      setSelectedWords((prev) => prev.filter((w) => w !== word));
    } else {
      setSelectedWords((prev) => [...prev, word]);
      speakText(word, 'en-US', user.speechSpeed, exerciseVoiceGender);
    }
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || hasAnswered) return;

    let correct = false;

    if (currentExercise.visualOptions && currentExercise.visualOptions.length > 0) {
      correct = selectedOption?.trim().toLowerCase() === currentExercise.correctAnswer.trim().toLowerCase();
    } else if (currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening' || currentExercise.type === 'translate' || currentExercise.type === 'image-choice') {
      correct = selectedOption?.trim().toLowerCase() === currentExercise.correctAnswer.trim().toLowerCase();
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

    const hasVisualCards = Boolean(currentExercise.visualOptions && currentExercise.visualOptions.length > 0);
    const cleanExplanation = (currentExercise.explanation || '').replace(/\*\*+/g, '');

    if (!correct) {
      sfx.playIncorrect();
      setMistakesCount((prev) => prev + 1);
      if (hasVisualCards) {
        const wrongVisual = currentExercise.visualOptions?.find(
          (v) => v.text.trim().toLowerCase() === selectedOption?.trim().toLowerCase()
        );
        if (wrongVisual) {
          speakText(wrongVisual.label || wrongVisual.text, 'en-US', user.speechSpeed, exerciseVoiceGender);
          setFeedbackMessage(
            `Você selecionou ${wrongVisual.label || wrongVisual.text} (${wrongVisual.translationPt || ''}).`
          );
        } else {
          setFeedbackMessage('Não foi dessa vez. Tente novamente!');
        }
      } else {
        setFeedbackMessage(cleanExplanation);
      }
    } else {
      sfx.playCorrect();
      setFeedbackMessage(cleanExplanation);
      const phraseToSpeak = currentExercise.audioPhrase || currentExercise.correctAnswer;
      if (phraseToSpeak) {
        speakText(phraseToSpeak, 'en-US', user.speechSpeed, exerciseVoiceGender);
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
    sfx.playTap();
    if (currentExerciseIndex < phase.exercises.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
    } else {
      setStep('complete');
      sfx.playSuccessFanfare();
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
            <div className={`flex items-center gap-4 p-4 rounded-3xl border-2 ${
              phase.type === 'boss'
                ? 'bg-rose-50 border-rose-200 shadow-sm'
                : phase.type === 'chest'
                ? 'bg-amber-50 border-amber-200 shadow-sm'
                : 'bg-indigo-50/90 border-indigo-100'
            }`}>
              <MascotLingo mood={phase.type === 'boss' ? 'cheering' : 'explaining'} size="sm" />
              <div>
                <span className={`text-[11px] font-black uppercase tracking-wider block ${
                  phase.type === 'boss' ? 'text-rose-600' : phase.type === 'chest' ? 'text-amber-700' : 'text-indigo-600'
                }`}>
                  {phase.type === 'boss' ? '👑 Batalha do Guardião (Boss Final)' : phase.type === 'chest' ? '🎁 Baú da Sabedoria' : 'Objetivo Pedagógico'}
                </span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{phase.pedagogicalObjective}</p>
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
              className={`w-full py-4 text-white font-black text-base uppercase tracking-wider rounded-2xl shadow-lg transition-transform flex items-center justify-center gap-2 cursor-pointer ${
                phase.type === 'boss'
                  ? 'bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 border-b-4 border-b-rose-900 active:border-b-0 active:translate-y-1'
                  : phase.type === 'chest'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-amber-950 border-b-4 border-b-amber-700 active:border-b-0 active:translate-y-1'
                  : 'bg-emerald-500 hover:bg-emerald-600 border-b-4 border-b-emerald-700 active:border-b-0 active:translate-y-1'
              }`}
            >
              <span>{phase.type === 'boss' ? `Enfrentar o Guardião (${phase.exercises.length} desafios)` : phase.type === 'chest' ? `Abrir Baú (${phase.exercises.length} tarefas)` : `Começar Lição (${phase.exercises.length} tarefas)`}</span>
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
              {currentExercise.prompt.replace(/\*\*+/g, '')}
            </h2>

            {/* Visual Associative Learning Card (apenas quando NÃO for exercício de cartões visuais) */}
            {currentExercise.visualEmoji && (!currentExercise.visualOptions || currentExercise.visualOptions.length === 0) && (
              <div className="flex items-center justify-center py-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-50 to-amber-50 border-2 border-indigo-200/80 shadow-md flex items-center justify-center text-5xl sm:text-6xl select-none">
                  {currentExercise.visualEmoji}
                </div>
              </div>
            )}

            {/* Audio Speaker Bar (apenas alto-falante + gráfico de linha do áudio ao falar) */}
            {currentExercise.visualOptions && currentExercise.visualOptions.length > 0 ? (
              <div className="p-3.5 bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50 border-2 border-indigo-200 rounded-2xl flex items-center justify-center gap-4 shadow-xs min-h-[64px]">
                <button
                  type="button"
                  onClick={() =>
                    speakText(
                      currentExercise.audioPhrase || currentExercise.correctAnswer,
                      'en-US',
                      user.speechSpeed,
                      exerciseVoiceGender
                    )
                  }
                  className={`w-12 h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all active:scale-95 flex items-center justify-center shrink-0 cursor-pointer ${
                    isSpeaking ? 'ring-4 ring-indigo-300 scale-105' : ''
                  }`}
                  title="Ouvir"
                >
                  <Volume2 className={`w-6 h-6 ${isSpeaking ? 'animate-pulse' : ''}`} />
                </button>

                {isSpeaking && (
                  <div className="flex-1 max-w-[220px] h-10 flex items-center justify-center animate-in fade-in duration-150">
                    <svg
                      viewBox="0 0 200 40"
                      className="w-full h-full overflow-visible"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 0 20 Q 12 4, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20"
                        stroke="#4f46e5"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="animate-pulse"
                      >
                        <animate
                          attributeName="d"
                          dur="0.45s"
                          repeatCount="indefinite"
                          values="
                            M 0 20 Q 12 3, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20;
                            M 0 20 Q 12 37, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20;
                            M 0 20 Q 12 10, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20;
                            M 0 20 Q 12 3, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20
                          "
                        />
                      </path>
                      <path
                        d="M 0 20 Q 16 32, 32 20 T 64 20 T 96 20 T 128 20 T 160 20 T 200 20"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.65"
                      >
                        <animate
                          attributeName="d"
                          dur="0.35s"
                          repeatCount="indefinite"
                          values="
                            M 0 20 Q 16 34, 32 20 T 64 20 T 96 20 T 128 20 T 160 20 T 200 20;
                            M 0 20 Q 16 6, 32 20 T 64 20 T 96 20 T 128 20 T 160 20 T 200 20;
                            M 0 20 Q 16 34, 32 20 T 64 20 T 96 20 T 128 20 T 160 20 T 200 20
                          "
                        />
                      </path>
                    </svg>
                  </div>
                )}
              </div>
            ) : currentExercise.type === 'listening' ? (
              <div className="space-y-3">
                {!hasAnswered ? (
                  <div className="p-4 bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50 border-2 border-indigo-200 rounded-3xl flex items-center justify-center gap-4 shadow-xs min-h-[68px]">
                    <button
                      type="button"
                      onClick={() => speakText(currentExercise.audioPhrase!, 'en-US', user.speechSpeed, exerciseVoiceGender)}
                      className={`w-12 h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all active:scale-95 flex items-center justify-center shrink-0 cursor-pointer ${
                        isSpeaking ? 'ring-4 ring-indigo-300 scale-105' : ''
                      }`}
                      title="Ouvir"
                    >
                      <Volume2 className={`w-6 h-6 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>

                    {isSpeaking && (
                      <div className="flex-1 max-w-[220px] h-10 flex items-center justify-center animate-in fade-in duration-150">
                        <svg
                          viewBox="0 0 200 40"
                          className="w-full h-full overflow-visible"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M 0 20 Q 12 4, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20"
                            stroke="#4f46e5"
                            strokeWidth="3"
                            strokeLinecap="round"
                          >
                            <animate
                              attributeName="d"
                              dur="0.45s"
                              repeatCount="indefinite"
                              values="
                                M 0 20 Q 12 3, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20;
                                M 0 20 Q 12 37, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20;
                                M 0 20 Q 12 10, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20;
                                M 0 20 Q 12 3, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20
                              "
                            />
                          </path>
                        </svg>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl space-y-1 shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">Transcrição Revelada:</span>
                    <p className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      {currentExercise.audioPhrase}
                    </p>
                    {currentExercise.contextSentencePt && (
                      <p className="text-xs font-semibold text-slate-600">
                        {currentExercise.contextSentencePt}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              (currentExercise.contextSentence || currentExercise.audioPhrase) && (
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
                      type="button"
                      onClick={() => speakText(currentExercise.audioPhrase!, 'en-US', user.speechSpeed, exerciseVoiceGender)}
                      className="p-3 bg-white hover:bg-indigo-50 border-2 border-indigo-200 rounded-xl text-indigo-600 active:scale-95 transition-transform shrink-0 shadow-xs cursor-pointer"
                      title="Ouvir frase"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              )
            )}

            {/* 1. Interactive Visual Option Cards (quando visualOptions estiver presente) */}
            {currentExercise.visualOptions && currentExercise.visualOptions.length > 0 ? (
              <div className="grid grid-cols-2 gap-3.5 pt-1">
                {currentExercise.visualOptions.map((opt, i) => {
                  const isSelected = selectedOption?.trim().toLowerCase() === opt.text.trim().toLowerCase();
                  // Mostra o nome APENAS após confirmar, e SOMENTE no card que o usuário selecionou (se acertou, o que acertou; se errou, apenas o que errou)
                  const shouldRevealLabel = hasAnswered && isSelected;

                  let cardStyle = 'bg-white border-2 border-slate-200 border-b-4 hover:border-slate-300 text-slate-800 shadow-xs hover:shadow-sm';

                  if (isSelected && !hasAnswered) {
                    cardStyle = 'bg-sky-50 border-2 border-sky-500 border-b-4 border-b-sky-600 text-sky-950 shadow-md ring-2 ring-sky-300/50 scale-[1.02]';
                  }

                  if (hasAnswered) {
                    if (isSelected && isCorrect) {
                      cardStyle = 'bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 shadow-md ring-2 ring-emerald-300/60 scale-[1.03]';
                    } else if (isSelected && !isCorrect) {
                      cardStyle = 'bg-rose-50 border-2 border-rose-400 border-b-4 border-b-rose-600 text-rose-950 shadow-md ring-2 ring-rose-300/50';
                    } else {
                      cardStyle = 'bg-slate-50/70 border-2 border-slate-200 border-b-4 text-slate-400 opacity-50';
                    }
                  }

                  return (
                    <div
                      key={i}
                      role="button"
                      tabIndex={hasAnswered ? -1 : 0}
                      onClick={() => {
                        if (hasAnswered) {
                          speakText(opt.label || opt.text, 'en-US', user.speechSpeed, exerciseVoiceGender);
                          return;
                        }
                        sfx.playTap();
                        setSelectedOption(opt.text);
                      }}
                      onKeyDown={(e) => {
                        if (!hasAnswered && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          sfx.playTap();
                          setSelectedOption(opt.text);
                        }
                      }}
                      className={`relative p-4 rounded-3xl flex flex-col items-center justify-center gap-1.5 transition-all active:translate-y-0.5 cursor-pointer min-h-[140px] sm:min-h-[155px] ${cardStyle}`}
                    >
                      {/* Audio speaker button on card */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(opt.label || opt.text, 'en-US', user.speechSpeed, exerciseVoiceGender);
                        }}
                        className="absolute top-2.5 right-2.5 p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-200/80 shadow-2xs active:scale-90 transition-all cursor-pointer z-10"
                        title="Ouvir pronúncia"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      {/* Status indicator on answer (apenas no card selecionado) */}
                      {hasAnswered && isSelected && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 absolute top-2.5 left-2.5" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <AlertCircle className="w-5 h-5 text-rose-600 absolute top-2.5 left-2.5" />
                      )}

                      {/* Visual Emoji / Image */}
                      {opt.emoji && (
                        <span className="text-5xl sm:text-6xl my-1 select-none filter drop-shadow-xs transition-transform">
                          {opt.emoji}
                        </span>
                      )}

                      {/* Nome em inglês e significado em português (letra menor logo abaixo, sem "="), revelados apenas ao confirmar */}
                      {shouldRevealLabel && (
                        <div className="flex flex-col items-center justify-center text-center mt-1 animate-in fade-in zoom-in-95 duration-200">
                          <span className={`text-base sm:text-lg font-black tracking-tight leading-tight ${
                            isCorrect ? 'text-emerald-950' : 'text-rose-950'
                          }`}>
                            {opt.label || opt.text}
                          </span>
                          {opt.translationPt && (
                            <span className={`text-xs sm:text-sm font-semibold leading-tight mt-0.5 ${
                              isCorrect ? 'text-emerald-700' : 'text-rose-700'
                            }`}>
                              {opt.translationPt}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening' || currentExercise.type === 'translate' || currentExercise.type === 'image-choice') &&
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
                      <div
                        key={i}
                        role="button"
                        tabIndex={hasAnswered ? -1 : 0}
                        onClick={() => {
                          if (hasAnswered) return;
                          sfx.playTap();
                          setSelectedOption(opt);
                          speakText(opt, 'en-US', user.speechSpeed, exerciseVoiceGender);
                        }}
                        className={`w-full p-4 rounded-2xl text-left font-bold text-sm sm:text-base transition-transform active:translate-y-1 flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakText(opt, 'en-US', user.speechSpeed, exerciseVoiceGender);
                            }}
                            className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 cursor-pointer shrink-0"
                            title="Ouvir pronúncia desta opção"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <span>{opt}</span>
                        </div>
                        <span className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs font-bold shrink-0 ml-2">
                          {String.fromCharCode(65 + i)}
                        </span>
                      </div>
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
                        key={idx}
                        disabled={hasAnswered}
                        onClick={() => {
                          sfx.playTap();
                          setFillBlankInput(opt);
                          speakText(opt, 'en-US', user.speechSpeed, exerciseVoiceGender);
                        }}
                        className={`p-4 rounded-2xl text-center font-bold text-base transition-transform active:translate-y-1 cursor-pointer flex items-center justify-center gap-2 ${btnStyle}`}
                      >
                        <span>{opt}</span>
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
