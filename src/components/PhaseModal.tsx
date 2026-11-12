import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { X, Volume2, Mic, MicOff, CheckCircle2, AlertCircle, Star, ArrowRight, Lightbulb, Eye, Lock } from 'lucide-react';
import { Phase, Exercise, UserProfile } from '../types';
import { speakText, stopSpeaking, getExerciseVoiceGender, preloadExerciseAudio } from '../utils/storage';
import { MascotLingo } from './MascotLingo';
import { sfx } from '../utils/soundEffects';
import { VocabIllustration, preloadVocabImages, getRealVocabPhotoUrl } from '../utils/vocabIllustrations';

function getSpokenPhraseForExercise(ex: Exercise): string {
  if (ex.audioPhrase && ex.audioPhrase.trim()) return ex.audioPhrase.trim();
  if (ex.contextSentence && ex.contextSentence.trim()) return ex.contextSentence.trim();
  const ans = (ex.correctAnswer || '').trim();
  // If correctAnswer is a Portuguese phonetic description (e.g. "Som de \"I\" (í)" or "êi (/eɪ/)")
  if (/som de\s+/i.test(ans) || /\(\/[^)]+\/\)/.test(ans) || /^[a-zà-ú]+\s*\(/i.test(ans)) {
    const quotedMatch = ex.prompt.match(/"([A-Za-z][A-Za-z\s'-]*)"/);
    if (quotedMatch && quotedMatch[1]) {
      return quotedMatch[1].trim();
    }
  }
  // If word-order spelling like "C A T", speak the word or letters cleanly
  if (/^[A-Z](\s+[A-Z])+$/.test(ans)) {
    const quotedWord = ex.prompt.match(/"([A-Za-z]{2,})"/);
    if (quotedWord && quotedWord[1]) return quotedWord[1];
  }
  return ans;
}

const BASE_RECORDER_BARS = [
  22, 35, 55, 40, 78, 92, 64, 45, 85, 96, 60, 38, 72, 88,
  50, 94, 68, 42, 80, 62, 34, 76, 90, 52, 66, 44, 30, 20,
];

const AndroidRecorderWaveform: React.FC<{ isSpeaking: boolean }> = ({ isSpeaking }) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!isSpeaking) {
      setTick(0);
      return;
    }
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 80);
    return () => clearInterval(interval);
  }, [isSpeaking]);

  return (
    <div className="flex-1 flex items-center justify-center gap-[3px] sm:gap-1 h-9 px-2 select-none overflow-hidden">
      {BASE_RECORDER_BARS.map((base, idx) => {
        let heightPercent = 18;
        if (isSpeaking) {
          const wave = Math.sin((tick * 0.85) + idx * 0.65) * 0.42 + 0.58;
          heightPercent = Math.max(16, Math.min(100, Math.round(base * wave)));
        } else {
          heightPercent = Math.max(14, Math.round(base * 0.35));
        }

        return (
          <span
            key={idx}
            style={{ height: `${heightPercent}%` }}
            className={`w-[3px] sm:w-1 rounded-full transition-all duration-75 ${
              isSpeaking
                ? idx % 3 === 0
                  ? 'bg-indigo-600'
                  : 'bg-sky-500'
                : 'bg-indigo-300/75'
            }`}
          />
        );
      })}
    </div>
  );
};

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
  const [exerciseQueue, setExerciseQueue] = useState<Exercise[]>(() => [...phase.exercises]);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);
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
  const [hasPlayedAudioOnce, setHasPlayedAudioOnce] = useState(false);
  const [showWrittenWord, setShowWrittenWord] = useState(false);
  const lastAutoSpokenIndexRef = useRef<number>(-1);

  const currentExercise: Exercise | undefined = exerciseQueue[currentExerciseIndex];
  const isReviewStage = currentExerciseIndex >= phase.exercises.length;
  const progressPercent = Math.min(100, (masteredIds.length / Math.max(1, phase.exercises.length)) * 100);
  const exerciseVoiceGender: 'male' | 'female' = currentExercise
    ? getExerciseVoiceGender(currentExercise.id, currentExerciseIndex)
    : 'female';

  // Preload first 3 exercises' audio and real photos as soon as the modal opens (during theory screen)
  useEffect(() => {
    const initialSlice = exerciseQueue.slice(0, 3);
    const wordsToPreload: string[] = [];
    initialSlice.forEach((ex, idx) => {
      const gender = getExerciseVoiceGender(ex.id, idx);
      const spoken = getSpokenPhraseForExercise(ex);
      if (spoken) preloadExerciseAudio([spoken], gender);
      if (ex.visualOptions) {
        ex.visualOptions.forEach((v) => wordsToPreload.push(v.text));
      } else if (spoken) {
        wordsToPreload.push(spoken);
      }
    });
    if (wordsToPreload.length > 0) {
      preloadVocabImages(wordsToPreload);
    }
  }, []);

  // Listen to global TTS speaking state & execution events
  useEffect(() => {
    const handleTtsState = (e: Event) => {
      const customEvent = e as CustomEvent<{ speaking: boolean }>;
      const speakingNow = Boolean(customEvent.detail?.speaking);
      setIsSpeaking(speakingNow);
      if (speakingNow) {
        setHasPlayedAudioOnce(true);
      }
    };
    const handleTtsPlayed = () => {
      setHasPlayedAudioOnce(true);
    };
    window.addEventListener('lingo-tts-state', handleTtsState);
    window.addEventListener('lingo-tts-played', handleTtsPlayed);
    return () => {
      window.removeEventListener('lingo-tts-state', handleTtsState);
      window.removeEventListener('lingo-tts-played', handleTtsPlayed);
    };
  }, []);

  // Preload upcoming images & auto-speak on exercise start
  useEffect(() => {
    if (step === 'exercise' && currentExercise) {
      const phraseToSpeak = getSpokenPhraseForExercise(currentExercise);
      if (phraseToSpeak) {
        preloadExerciseAudio([phraseToSpeak], exerciseVoiceGender);
      }

      // Preload real photos for current and next 2 exercises
      const upcomingWords: string[] = [];
      for (let offset = 0; offset <= 2; offset++) {
        const ex = exerciseQueue[currentExerciseIndex + offset];
        if (!ex) continue;
        if (ex.visualOptions) {
          ex.visualOptions.forEach((v) => upcomingWords.push(v.text));
        } else {
          upcomingWords.push(getSpokenPhraseForExercise(ex));
        }
      }
      if (upcomingWords.length > 0) {
        preloadVocabImages(upcomingWords);
      }

      // If not already triggered synchronously by button click, trigger now
      if (phraseToSpeak && user.autoSpeak !== false && lastAutoSpokenIndexRef.current !== currentExerciseIndex) {
        lastAutoSpokenIndexRef.current = currentExerciseIndex;
        speakText(phraseToSpeak, 'en-US', user.speechSpeed, exerciseVoiceGender);
      }

      // Unlock the "Ver palavra em inglês" button after the first audio execution completes (or after 950ms safety timer)
      const unlockTimer = setTimeout(() => {
        setHasPlayedAudioOnce(true);
      }, 950);

      return () => clearTimeout(unlockTimer);
    }
  }, [currentExerciseIndex, step]);

  const handleStartExercise = () => {
    setHasPlayedAudioOnce(false);
    setShowWrittenWord(false);
    setSelectedOption(null);
    setSelectedWords([]);
    setFillBlankInput('');
    setHasAnswered(false);
    setIsCorrect(false);
    setFeedbackMessage('');
    setSpokenResult('');
    setStep('exercise');

    // Speak synchronously inside the user gesture so Exercise 1 always plays immediately
    const firstEx = exerciseQueue[0];
    if (firstEx && user.autoSpeak !== false) {
      const phrase = getSpokenPhraseForExercise(firstEx);
      const gender = getExerciseVoiceGender(firstEx.id, 0);
      if (phrase) {
        lastAutoSpokenIndexRef.current = 0;
        speakText(phrase, 'en-US', user.speechSpeed, gender);
      }
    }
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

    // Não repetir a voz ao confirmar: parar qualquer fala em andamento e tocar apenas o som confortável de acerto/erro
    stopSpeaking();
    setIsCorrect(correct);
    setHasAnswered(true);

    const hasVisualCards = Boolean(currentExercise.visualOptions && currentExercise.visualOptions.length > 0);
    const cleanExplanation = (currentExercise.explanation || '').replace(/\*\*+/g, '');

    if (!correct) {
      sfx.playIncorrect();
      setMistakesCount((prev) => prev + 1);
      // Re-enfileira o exercício errado para o final do módulo (com cartões reembaralhados) até acertar 100%
      setExerciseQueue((prev) => {
        const reshuffledVisual = currentExercise.visualOptions
          ? [...currentExercise.visualOptions].sort(() => 0.5 - Math.random())
          : undefined;
        const reshuffledOptions = reshuffledVisual
          ? reshuffledVisual.map((v) => v.text)
          : currentExercise.options && currentExercise.type !== 'word-order'
          ? [...currentExercise.options].sort(() => 0.5 - Math.random())
          : currentExercise.options;
        return [
          ...prev,
          {
            ...currentExercise,
            visualOptions: reshuffledVisual,
            options: reshuffledOptions,
          },
        ];
      });
      if (hasVisualCards) {
        const wrongVisual = currentExercise.visualOptions?.find(
          (v) => v.text.trim().toLowerCase() === selectedOption?.trim().toLowerCase()
        );
        if (wrongVisual) {
          setFeedbackMessage(
            `Você selecionou ${wrongVisual.label || wrongVisual.text} (${wrongVisual.translationPt || ''}). Você poderá corrigir esta palavra no final do exercício!`
          );
        } else {
          setFeedbackMessage('Não foi dessa vez. Você revisará este item no final do exercício!');
        }
      } else {
        setFeedbackMessage(cleanExplanation);
      }
    } else {
      sfx.playCorrect();
      setMasteredIds((prev) => (prev.includes(currentExercise.id) ? prev : [...prev, currentExercise.id]));
      setFeedbackMessage(cleanExplanation);
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
    if (currentExerciseIndex < exerciseQueue.length - 1) {
      const nextIndex = currentExerciseIndex + 1;
      setHasPlayedAudioOnce(false);
      setShowWrittenWord(false);
      setSelectedOption(null);
      setSelectedWords([]);
      setFillBlankInput('');
      setHasAnswered(false);
      setIsCorrect(false);
      setFeedbackMessage('');
      setSpokenResult('');
      setCurrentExerciseIndex(nextIndex);

      // Speak synchronously inside the user gesture so every transition plays reliably
      const nextEx = exerciseQueue[nextIndex];
      if (nextEx && user.autoSpeak !== false) {
        const phrase = getSpokenPhraseForExercise(nextEx);
        const gender = getExerciseVoiceGender(nextEx.id, nextIndex);
        if (phrase) {
          lastAutoSpokenIndexRef.current = nextIndex;
          speakText(phrase, 'en-US', user.speechSpeed, gender);
        }
      }
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
              <span className={`text-xs font-black uppercase tracking-wider ${isReviewStage ? 'text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full' : 'text-slate-400'}`}>
                {isReviewStage
                  ? `🔄 Correção de Erros • Dominados ${masteredIds.length}/${phase.exercises.length}`
                  : `Item ${currentExerciseIndex + 1} de ${phase.exercises.length}`}
              </span>
              <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-[11px] font-black rounded-full uppercase">
                {currentExercise.skillCategory}
              </span>
            </div>

            {/* Exercise Prompt */}
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-snug">
              {currentExercise.prompt.replace(/\*\*+/g, '')}
            </h2>

            {/* Visual Associative Learning Card (quando NÃO for exercício de cartões visuais) */}
            {currentExercise.visualEmoji && (!currentExercise.visualOptions || currentExercise.visualOptions.length === 0) && (
              <div className="flex items-center justify-center py-2">
                {getRealVocabPhotoUrl(getSpokenPhraseForExercise(currentExercise)) ? (
                  <VocabIllustration
                    word={getSpokenPhraseForExercise(currentExercise)}
                    emoji={currentExercise.visualEmoji}
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-50 to-amber-50 border-2 border-indigo-200/80 shadow-md flex items-center justify-center text-5xl sm:text-6xl select-none">
                    {currentExercise.visualEmoji}
                  </div>
                )}
              </div>
            )}

            {/* Audio Speaker Bar (Alto-falante + Gráfico estilo Gravador de Áudio do Android + Botão de velocidade 0.65x) */}
            {currentExercise.visualOptions && currentExercise.visualOptions.length > 0 ? (
              <div className="space-y-2.5">
                <div className="p-3 bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50 border-2 border-indigo-200 rounded-2xl flex items-center justify-between gap-3 shadow-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setHasPlayedAudioOnce(true);
                      speakText(
                        getSpokenPhraseForExercise(currentExercise),
                        'en-US',
                        user.speechSpeed,
                        exerciseVoiceGender
                      );
                    }}
                    className={`w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all active:scale-95 flex items-center justify-center shrink-0 cursor-pointer ${
                      isSpeaking ? 'ring-3 ring-indigo-300' : ''
                    }`}
                    title="Ouvir novamente"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>

                  <AndroidRecorderWaveform isSpeaking={isSpeaking} />

                  <button
                    type="button"
                    onClick={() => {
                      setHasPlayedAudioOnce(true);
                      speakText(
                        getSpokenPhraseForExercise(currentExercise),
                        'en-US',
                        0.65,
                        exerciseVoiceGender
                      );
                    }}
                    className="py-2.5 px-3 bg-white hover:bg-amber-50 text-amber-800 border-2 border-amber-200 font-bold text-xs rounded-xl shadow-2xs transition-transform active:scale-95 flex items-center gap-1 cursor-pointer shrink-0"
                    title="Ouvir mais lento (0.65x)"
                  >
                    <span>🐢 0.65x</span>
                  </button>
                </div>

                {/* Botão para ver a palavra em inglês em caso de dúvida da pronúncia (habilitado somente após a 1ª execução do áudio) */}
                {!showWrittenWord ? (
                  <button
                    type="button"
                    disabled={!hasPlayedAudioOnce}
                    onClick={() => {
                      if (!hasPlayedAudioOnce) return;
                      sfx.playTap();
                      setShowWrittenWord(true);
                    }}
                    className={`w-full py-2.5 px-3.5 rounded-xl border-2 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all ${
                      hasPlayedAudioOnce
                        ? 'bg-white hover:bg-indigo-50/80 text-indigo-700 border-indigo-200 shadow-2xs active:scale-[0.99] cursor-pointer'
                        : 'bg-slate-100 text-slate-400 border-slate-200/80 opacity-75 cursor-not-allowed'
                    }`}
                  >
                    {hasPlayedAudioOnce ? (
                      <>
                        <Eye className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Dúvida na pronúncia? Ver palavra em inglês</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Ouça o áudio primeiro para ver a palavra em inglês</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="py-2.5 px-4 rounded-xl bg-indigo-50/90 border-2 border-indigo-200 flex items-center justify-between gap-2 animate-in fade-in duration-150">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="text-xs font-bold text-indigo-700">Palavra em inglês:</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span className="text-base sm:text-lg font-black text-indigo-950 tracking-tight">
                        {currentExercise.correctAnswer}
                      </span>
                      {currentExercise.phoneticHint && (
                        <span className="text-xs font-semibold text-indigo-600 bg-white px-2 py-0.5 rounded-md border border-indigo-100">
                          {currentExercise.phoneticHint}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : currentExercise.type === 'listening' ? (
              <div className="space-y-3">
                {!hasAnswered ? (
                  <div className="p-3.5 bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50 border-2 border-indigo-200 rounded-2xl flex items-center justify-between gap-3 shadow-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setHasPlayedAudioOnce(true);
                        speakText(getSpokenPhraseForExercise(currentExercise), 'en-US', user.speechSpeed, exerciseVoiceGender);
                      }}
                      className={`w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all active:scale-95 flex items-center justify-center shrink-0 cursor-pointer ${
                        isSpeaking ? 'ring-3 ring-indigo-300' : ''
                      }`}
                      title="Ouvir novamente"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>

                    <AndroidRecorderWaveform isSpeaking={isSpeaking} />

                    <button
                      type="button"
                      onClick={() => {
                        setHasPlayedAudioOnce(true);
                        speakText(getSpokenPhraseForExercise(currentExercise), 'en-US', 0.65, exerciseVoiceGender);
                      }}
                      className="py-2.5 px-3 bg-white hover:bg-amber-50 text-amber-800 border-2 border-amber-200 font-bold text-xs rounded-xl shadow-2xs transition-transform active:scale-95 flex items-center gap-1 cursor-pointer shrink-0"
                      title="Ouvir mais lento (0.65x)"
                    >
                      <span>🐢 0.65x</span>
                    </button>
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
              <div className="space-y-2.5">
                {currentExercise.contextSentence && (
                  <div className="p-3.5 bg-slate-50 border-2 border-slate-200 rounded-2xl space-y-1 shadow-xs">
                    <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {currentExercise.contextSentence}
                    </p>
                    {currentExercise.contextSentencePt && (
                      <p className="text-xs font-semibold text-slate-500">
                        {currentExercise.contextSentencePt}
                      </p>
                    )}
                  </div>
                )}
                <div className="p-3 bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50 border-2 border-indigo-200 rounded-2xl flex items-center justify-between gap-3 shadow-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setHasPlayedAudioOnce(true);
                      speakText(
                        getSpokenPhraseForExercise(currentExercise),
                        'en-US',
                        user.speechSpeed,
                        exerciseVoiceGender
                      );
                    }}
                    className={`w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all active:scale-95 flex items-center justify-center shrink-0 cursor-pointer ${
                      isSpeaking ? 'ring-3 ring-indigo-300' : ''
                    }`}
                    title="Ouvir novamente"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>

                  <AndroidRecorderWaveform isSpeaking={isSpeaking} />

                  <button
                    type="button"
                    onClick={() => {
                      setHasPlayedAudioOnce(true);
                      speakText(
                        getSpokenPhraseForExercise(currentExercise),
                        'en-US',
                        0.65,
                        exerciseVoiceGender
                      );
                    }}
                    className="py-2.5 px-3 bg-white hover:bg-amber-50 text-amber-800 border-2 border-amber-200 font-bold text-xs rounded-xl shadow-2xs transition-transform active:scale-95 flex items-center gap-1 cursor-pointer shrink-0"
                    title="Ouvir mais lento (0.65x)"
                  >
                    <span>🐢 0.65x</span>
                  </button>
                </div>
              </div>
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
                    cardStyle = 'bg-white border-2 border-sky-500 border-b-4 border-b-sky-600 text-sky-950 shadow-md ring-2 ring-sky-300/60 scale-[1.02]';
                  }

                  if (hasAnswered) {
                    if (isSelected && isCorrect) {
                      cardStyle = 'bg-white border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 shadow-md ring-2 ring-emerald-300/70 scale-[1.03]';
                    } else if (isSelected && !isCorrect) {
                      cardStyle = 'bg-white border-2 border-rose-400 border-b-4 border-b-rose-600 text-rose-950 shadow-md ring-2 ring-rose-300/60';
                    } else {
                      cardStyle = 'bg-white border-2 border-slate-200 border-b-4 text-slate-400 opacity-50';
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
                        setSelectedOption(opt.text);
                      }}
                      onKeyDown={(e) => {
                        if (!hasAnswered && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          sfx.playTap();
                          setSelectedOption(opt.text);
                        }
                      }}
                      className={`relative p-3 rounded-3xl flex flex-col items-center justify-center gap-1.5 transition-all active:translate-y-0.5 cursor-pointer min-h-[160px] sm:min-h-[185px] ${cardStyle}`}
                    >
                      {/* Status indicator on answer (apenas no card selecionado) */}
                      {hasAnswered && isSelected && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 absolute top-2.5 left-2.5" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <AlertCircle className="w-5 h-5 text-rose-600 absolute top-2.5 left-2.5" />
                      )}

                      {/* Ilustração vetorial rica / Imagem realista representativa do item */}
                      <div className="my-1 transition-transform">
                        <VocabIllustration word={opt.text} emoji={opt.emoji} />
                      </div>

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
