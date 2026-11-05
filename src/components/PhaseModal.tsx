import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Volume2, Mic, MicOff, CheckCircle2, AlertCircle, Sparkles, Star, ArrowRight, RotateCcw, Lightbulb } from 'lucide-react';
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

  // Auto speak on exercise start if enabled
  useEffect(() => {
    if (step === 'exercise' && currentExercise?.audioPhrase && user.autoSpeak) {
      speakText(currentExercise.audioPhrase, 'en-US', user.speechSpeed);
    }
    // Reset state for new exercise
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

  // Check speech recognition
  const handleToggleMic = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Seu navegador não possui suporte ao microfone Web Speech. Você pode digitar ou clicar no botão confirmar.');
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

        // Check if spoken text matches
        const target = (currentExercise?.correctAnswer || '').toLowerCase().replace(/[.,!?;:]/g, '').trim();
        const recognized = transcript.toLowerCase().replace(/[.,!?;:]/g, '').trim();

        const match = recognized === target || target.includes(recognized) || recognized.includes(target);
        setIsCorrect(match);
        setHasAnswered(true);
        setFeedbackMessage(
          match
            ? 'Pronúncia excelente! Muito clara e natural.'
            : `Você disse "${transcript}". Tente soar o som com mais clareza: ${currentExercise?.phoneticHint || ''}`
        );
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.error(err);
      setIsListening(false);
    }
  };

  const handleWordClick = (word: string) => {
    if (hasAnswered) return;
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
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
      correct = true; // Completed attempt
    }

    setIsCorrect(correct);
    setHasAnswered(true);
    if (!correct) {
      setMistakesCount((prev) => prev + 1);
      setFeedbackMessage(currentExercise.explanation);
    } else {
      setFeedbackMessage('Resposta exata! ' + currentExercise.explanation);
      // Play brief sound or speech
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
      // Completed all exercises
      setStep('complete');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      const stars = mistakesCount === 0 ? 3 : mistakesCount <= 2 ? 2 : 1;
      onCompletePhase(phase.id, phase.xpReward, phase.gemsReward, stars);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              {phase.phaseNumber}
            </span>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">{phase.title}</h3>
              <p className="text-xs text-slate-500 font-medium">{phase.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {step === 'theory' && (
            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-indigo-50/80 p-4 rounded-2xl border border-indigo-100">
                <MascotLingo mood="explaining" size="sm" />
                <div>
                  <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-wide">Objetivo Pedagógico</h4>
                  <p className="text-xs sm:text-sm text-indigo-900 mt-0.5">{phase.pedagogicalObjective}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Dicas Teóricas & Regras Rápidas</span>
                </div>
                <div className="space-y-2">
                  {phase.theorySummary.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs font-semibold text-amber-900">
                <span>Recompensas ao concluir:</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-indigo-600 font-bold">⚡ +{phase.xpReward} XP</span>
                  <span className="flex items-center gap-1 text-sky-600 font-bold">💎 +{phase.gemsReward} Gemas</span>
                </div>
              </div>

              <button
                onClick={handleStartExercise}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-extrabold rounded-2xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <span>Iniciar Exercícios ({phase.exercises.length})</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 'exercise' && currentExercise && (
            <div className="space-y-5">
              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>Exercício {currentExerciseIndex + 1} de {phase.exercises.length}</span>
                  <span className="text-indigo-600 uppercase tracking-wide text-[11px] font-extrabold">{currentExercise.skillCategory}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentExerciseIndex + 1) / phase.exercises.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Prompt */}
              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-black text-slate-900">{currentExercise.prompt}</h4>

                {/* Audio Phrase Player */}
                {currentExercise.audioPhrase && (
                  <div className="flex items-center gap-3 p-3 bg-indigo-50/70 border border-indigo-100 rounded-2xl">
                    <button
                      type="button"
                      onClick={() => speakText(currentExercise.audioPhrase!, 'en-US', user.speechSpeed)}
                      className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-xs transition-transform active:scale-95 cursor-pointer"
                      title="Ouvir pronúncia"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-800">
                        {currentExercise.contextSentence || currentExercise.audioPhrase}
                      </div>
                      {currentExercise.contextSentencePt && (
                        <div className="text-xs text-slate-500 italic">{currentExercise.contextSentencePt}</div>
                      )}
                      {currentExercise.phoneticHint && (
                        <div className="text-[11px] text-indigo-600 font-mono font-medium">{currentExercise.phoneticHint}</div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Interaction based on exercise type */}
              {/* 1. Multiple Choice / Listening / Translate */}
              {(currentExercise.type === 'multiple-choice' ||
                currentExercise.type === 'listening' ||
                currentExercise.type === 'translate') &&
                currentExercise.options && (
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentExercise.options.map((opt, i) => {
                      const isSelected = selectedOption === opt;
                      let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';

                      if (isSelected) {
                        btnStyle = 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold ring-2 ring-indigo-200';
                      }
                      if (hasAnswered) {
                        if (opt === currentExercise.correctAnswer) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                        }
                      }

                      return (
                        <button
                          key={i}
                          disabled={hasAnswered}
                          onClick={() => setSelectedOption(opt)}
                          className={`w-full text-left p-3.5 rounded-xl border text-sm sm:text-base font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {hasAnswered && opt === currentExercise.correctAnswer && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

              {/* 2. Word Order */}
              {currentExercise.type === 'word-order' && currentExercise.options && (
                <div className="space-y-4">
                  {/* Selected Words Area */}
                  <div className="min-h-14 p-3 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap gap-2 items-center">
                    {selectedWords.length === 0 ? (
                      <span className="text-xs text-slate-400">Clique nas palavras abaixo para ordenar a frase</span>
                    ) : (
                      selectedWords.map((word, idx) => (
                        <button
                          key={idx}
                          disabled={hasAnswered}
                          onClick={() => handleWordClick(word)}
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer"
                        >
                          {word}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Word Bank */}
                  <div className="flex flex-wrap gap-2">
                    {currentExercise.options.map((word, idx) => {
                      const isUsed = selectedWords.includes(word);
                      return (
                        <button
                          key={idx}
                          disabled={isUsed || hasAnswered}
                          onClick={() => handleWordClick(word)}
                          className={`px-3 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                            isUsed
                              ? 'opacity-30 bg-slate-100 border-slate-200 text-slate-400'
                              : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-xs active:scale-95'
                          }`}
                        >
                          {word}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 3. Fill in the Blank */}
              {currentExercise.type === 'fill-blank' && (
                <div className="space-y-3">
                  {currentExercise.options ? (
                    <div className="grid grid-cols-2 gap-2">
                      {currentExercise.options.map((opt, i) => (
                        <button
                          key={i}
                          disabled={hasAnswered}
                          onClick={() => setFillBlankInput(opt)}
                          className={`p-3 rounded-xl border text-sm font-bold text-center cursor-pointer ${
                            fillBlankInput === opt
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input
                      type="text"
                      disabled={hasAnswered}
                      value={fillBlankInput}
                      onChange={(e) => setFillBlankInput(e.target.value)}
                      placeholder="Digite a palavra que falta..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  )}
                </div>
              )}

              {/* 4. Speaking Repeat */}
              {currentExercise.type === 'speaking-repeat' && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center text-center space-y-4">
                  <p className="text-xs text-slate-600 max-w-sm">
                    Pressione o microfone e repita a frase em voz alta. O Lingo analisará a clareza e ritmo!
                  </p>
                  <button
                    onClick={handleToggleMic}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg active:scale-95 cursor-pointer ${
                      isListening
                        ? 'bg-rose-500 text-white ring-4 ring-rose-200 animate-pulse'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </button>
                  <div className="text-xs font-semibold text-slate-500">
                    {isListening ? 'Ouvindo você... fale agora!' : 'Clique para falar'}
                  </div>
                  {spokenResult && (
                    <div className="text-xs bg-white p-2.5 rounded-xl border border-slate-200 text-slate-700 w-full text-left">
                      <span className="font-bold text-slate-400">Reconhecido:</span> "{spokenResult}"
                    </div>
                  )}
                </div>
              )}

              {/* Feedback Area */}
              {hasAnswered && (
                <div
                  className={`p-4 rounded-2xl border flex items-start gap-3 animate-fadeIn ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50 border-rose-200 text-rose-950'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 text-xs sm:text-sm">
                    <p className="font-bold">{isCorrect ? 'Muito bem!' : 'Não se preocupe, vamos aprender!'}</p>
                    <p className="mt-0.5 text-slate-700">{feedbackMessage}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                {!hasAnswered ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={
                      currentExercise.type === 'word-order'
                        ? selectedWords.length === 0
                        : currentExercise.type === 'fill-blank'
                        ? !fillBlankInput.trim()
                        : currentExercise.type === 'speaking-repeat'
                        ? false
                        : !selectedOption
                    }
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Verificar Resposta
                  </button>
                ) : (
                  <button
                    onClick={handleNextExercise}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {currentExerciseIndex < phase.exercises.length - 1 ? 'Próximo' : 'Concluir Fase'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 'complete' && (
            <div className="py-6 text-center space-y-5">
              <MascotLingo mood="cheering" size="lg" message="Incrível! Você conquistou esta fase!" />

              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Fase Concluída com Sucesso!</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Seu cérebro consolidou novas estruturas em inglês.
                </p>
              </div>

              {/* Stars Earned */}
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3].map((starIdx) => {
                  const stars = mistakesCount === 0 ? 3 : mistakesCount <= 2 ? 2 : 1;
                  const earned = starIdx <= stars;
                  return (
                    <Star
                      key={starIdx}
                      className={`w-10 h-10 transition-transform ${
                        earned
                          ? 'text-amber-400 fill-amber-400 scale-110 drop-shadow-md'
                          : 'text-slate-200 fill-slate-100'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Rewards Summary */}
              <div className="flex items-center justify-center gap-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-sm mx-auto">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-indigo-600">+{phase.xpReward}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">XP Ganho</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-sky-500">+{phase.gemsReward}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gemas Ganhas</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-xl transition-transform active:scale-95 cursor-pointer"
              >
                Continuar Jornada
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
