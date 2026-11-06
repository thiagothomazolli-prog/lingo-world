import React, { useState } from 'react';
import { X, Award, CheckCircle2, AlertCircle, ArrowRight, Volume2, Sparkles, Trophy } from 'lucide-react';
import { CefrLevel } from '../types';
import { MascotLingo } from './MascotLingo';
import { speakText } from '../utils/storage';
import { sfx } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface CefrLevelTestModalProps {
  onClose: () => void;
  onApplyLevel: (level: CefrLevel) => void;
}

interface Question {
  id: number;
  level: CefrLevel;
  levelTitle: string;
  question: string;
  context: string;
  audioPhrase?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// 🎯 Teste Progressivo do Nível Iniciante (A1) ao Expert (C1/C2)
const PROGRESSIVE_QUESTIONS: Question[] = [
  // Nível 1: A1 - Iniciante
  {
    id: 1,
    level: 'A1',
    levelTitle: 'Nível 1 • Iniciante (A1)',
    question: 'Como responder cordialmente a uma saudação de chegada?',
    context: '"Hello! How are you today?"',
    audioPhrase: 'Hello! How are you today?',
    options: ['I am doing great, thank you!', 'I have 20 years.', 'See you yesterday.', 'Yes, I do book.'],
    correctAnswer: 'I am doing great, thank you!',
    explanation: 'Em inglês, responde-se sobre bem-estar com o verbo TO BE ("I am doing great / I am fine").'
  },
  {
    id: 2,
    level: 'A1',
    levelTitle: 'Nível 1 • Iniciante (A1)',
    question: 'Qual é a forma correta de perguntar a profissão de alguém?',
    context: '"______ do you do for a living?"',
    audioPhrase: 'What do you do for a living?',
    options: ['What', 'Where', 'Who', 'When'],
    correctAnswer: 'What',
    explanation: 'A expressão fixa para profissão/trabalho é "What do you do?".'
  },

  // Nível 2: A2 - Básico Consolidado
  {
    id: 3,
    level: 'A2',
    levelTitle: 'Nível 2 • Básico (A2)',
    question: 'Complete a frase que descreve a rotina matinal:',
    context: 'Every weekday, Lucas ______ coffee and ______ the newspaper.',
    audioPhrase: 'Every weekday, Lucas drinks coffee and reads the newspaper.',
    options: ['drinks / reads', 'drink / read', 'drinking / reading', 'drank / readed'],
    correctAnswer: 'drinks / reads',
    explanation: 'No Presente Simples para 3ª pessoa do singular (Lucas / he), os verbos recebem a terminação -s.'
  },
  {
    id: 4,
    level: 'A2',
    levelTitle: 'Nível 2 • Básico (A2)',
    question: 'Como pedir um café educadamente em uma cafeteria?',
    context: '"Excuse me, ______ I have a cup of cappuccino, please?"',
    audioPhrase: 'Excuse me, could I have a cup of cappuccino, please?',
    options: ['could', 'must', 'do want', 'am'],
    correctAnswer: 'could',
    explanation: '"Could I have...?" ou "May I have...?" são as maneiras mais educadas e naturais de pedir comida e bebida.'
  },

  // Nível 3: B1 - Intermediário
  {
    id: 5,
    level: 'B1',
    levelTitle: 'Nível 3 • Intermediário (B1)',
    question: 'Complete a narrativa no passado sobre uma viagem:',
    context: 'Last vacation, we ______ to London and ______ many historical museums.',
    audioPhrase: 'Last vacation, we went to London and visited many historical museums.',
    options: ['went / visited', 'go / visit', 'gone / visiting', 'did go / visit'],
    correctAnswer: 'went / visited',
    explanation: 'O passado simples de GO é o irregular WENT, e o regular VISIT vira VISITED.'
  },
  {
    id: 6,
    level: 'B1',
    levelTitle: 'Nível 3 • Intermediário (B1)',
    question: 'Complete com a preposição correta para datas específicas:',
    context: 'Our international flight is scheduled to depart ______ Monday morning, ______ 8:30 AM.',
    audioPhrase: 'Our international flight is scheduled to depart on Monday morning, at 8:30 AM.',
    options: ['on / at', 'in / on', 'at / in', 'by / to'],
    correctAnswer: 'on / at',
    explanation: 'Usamos ON para dias da semana ("on Monday") e AT para horários exatos ("at 8:30 AM").'
  },

  // Nível 4: B2 - Intermediário Superior / Avançado
  {
    id: 7,
    level: 'B2',
    levelTitle: 'Nível 4 • Avançado (B2)',
    question: 'Complete a frase condicional hipotética (Second Conditional):',
    context: 'If I ______ enough budget, I ______ study abroad next semester.',
    audioPhrase: 'If I had enough budget, I would study abroad next semester.',
    options: ['had / would', 'have / will', 'had / will', 'would have / had'],
    correctAnswer: 'had / would',
    explanation: 'Segunda condicional expressa hipótese presente/futura: If + Simple Past (had), would + verbo base.'
  },
  {
    id: 8,
    level: 'B2',
    levelTitle: 'Nível 4 • Avançado (B2)',
    question: 'Qual Phrasal Verb significa "descobrir ou resolver um problema complexo"?',
    context: '"Don\'t worry about the software glitch, the engineering team will ______ soon."',
    audioPhrase: 'The engineering team will figure it out soon.',
    options: ['figure it out', 'give it up', 'look it down', 'break it in'],
    correctAnswer: 'figure it out',
    explanation: '"Figure out" significa encontrar a solução, entender ou resolver uma situação.'
  },

  // Nível 5: C1/C2 - Expert / Domínio Pleno
  {
    id: 9,
    level: 'C1',
    levelTitle: 'Nível 5 • Expert (C1/C2)',
    question: 'Selecione a estrutura de inversão enfática correta para contextos formais:',
    context: 'Seldom ______ such eloquence and mastery in a keynote speech.',
    audioPhrase: 'Seldom have I witnessed such eloquence and mastery in a keynote speech.',
    options: ['have I witnessed', 'I have witnessed', 'I witnessed', 'witnessed I'],
    correctAnswer: 'have I witnessed',
    explanation: 'Após advérbios restritivos negativos (Seldom, Rarely, Never), usa-se inversão: auxiliar + sujeito + verbo.'
  },
  {
    id: 10,
    level: 'C2',
    levelTitle: 'Nível 5 • Expert (C1/C2)',
    question: 'Qual é o significado da expressão idiomática "hit the nail on the head"?',
    context: '"When she said our marketing strategy was outdated, she really hit the nail on the head."',
    audioPhrase: 'She really hit the nail on the head.',
    options: [
      'Disse exatamente a verdade / acertou em cheio',
      'Causou um acidente grave',
      'Tomou uma decisão muito arriscada',
      'Exagerou nas críticas'
    ],
    correctAnswer: 'Disse exatamente a verdade / acertou em cheio',
    explanation: '"Hit the nail on the head" significa descrever com exatidão a causa ou cerne de um problema ("acertar na mosca").'
  }
];

export const CefrLevelTestModal: React.FC<CefrLevelTestModalProps> = ({
  onClose,
  onApplyLevel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = PROGRESSIVE_QUESTIONS[currentIndex];
  const progressPercent = ((currentIndex + (hasAnswered ? 1 : 0)) / PROGRESSIVE_QUESTIONS.length) * 100;

  const handleSelectOption = (opt: string) => {
    if (hasAnswered) return;
    sfx.playTap();
    setSelectedOption(opt);
  };

  const handleVerify = () => {
    if (!selectedOption || hasAnswered) return;
    const correct = selectedOption === currentQ.correctAnswer;
    setIsCorrect(correct);
    setHasAnswered(true);

    if (correct) {
      sfx.playCorrect();
      setCorrectAnswersCount((prev) => prev + 1);
    } else {
      sfx.playIncorrect();
    }
  };

  const handleNext = () => {
    if (currentIndex < PROGRESSIVE_QUESTIONS.length - 1) {
      sfx.playTap();
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setIsCorrect(false);
    } else {
      setIsFinished(true);
      sfx.playSuccessFanfare();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  // Avaliação baseada no total de acertos ao longo da escada progressiva
  const calculateResult = (): CefrLevel => {
    if (correctAnswersCount >= 9) return 'C2';
    if (correctAnswersCount >= 7) return 'C1';
    if (correctAnswersCount >= 5) return 'B2';
    if (correctAnswersCount >= 3) return 'B1';
    if (correctAnswersCount >= 1) return 'A2';
    return 'A1';
  };

  const calculatedLevel = calculateResult();

  const getLevelDescription = (lvl: CefrLevel) => {
    switch (lvl) {
      case 'A1':
        return 'Iniciante: Ideal para aprender os primeiros sons, cumprimentos e construir vocabulário do zero.';
      case 'A2':
        return 'Básico: Você já compreende tarefas rotineiras, horários e consegue se expressar de forma simples.';
      case 'B1':
        return 'Intermediário: Capacidade de viajar, contar histórias e expressar opiniões de forma autônoma.';
      case 'B2':
        return 'Avançado: Conversação espontânea com nativos, domínio gramatical sólido e vocabulário amplo.';
      case 'C1':
      case 'C2':
        return 'Expert / Fluência Plena: Domínio sofisticado de expressões, nuances formais e escrita avançada.';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col w-full h-full overflow-hidden select-none">
      {/* 🟢 Top Navigation Bar estilo Duolingo */}
      <header className="shrink-0 px-4 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-3 border-b border-slate-200/80 bg-white flex items-center justify-between gap-3">
        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-slate-700 rounded-full transition-colors active:scale-95"
          title="Fechar Teste"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress bar */}
        <div className="flex-1 max-w-md h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 p-0.5">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="px-2.5 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-xs font-black shrink-0">
          {currentIndex + 1} / {PROGRESSIVE_QUESTIONS.length}
        </div>
      </header>

      {/* 🎯 Main Question Area */}
      {!isFinished ? (
        <main className="flex-1 overflow-y-auto px-4 py-6 max-w-xl w-full mx-auto flex flex-col justify-between">
          <div className="space-y-6">
            {/* Level Tier Indicator */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-extrabold text-xs rounded-full uppercase tracking-wider">
                {currentQ.levelTitle}
              </span>
              <span className="text-xs font-bold text-slate-400">
                Escala Progressiva
              </span>
            </div>

            {/* Question Title */}
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-snug">
              {currentQ.question}
            </h2>

            {/* Context Card with Mascot & Audio */}
            <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg shrink-0">
                  💬
                </div>
                <p className="font-mono text-base sm:text-lg font-bold text-slate-900">
                  {currentQ.context}
                </p>
              </div>

              {currentQ.audioPhrase && (
                <button
                  onClick={() => speakText(currentQ.audioPhrase!, 'en-US')}
                  className="p-3 bg-white hover:bg-indigo-50 border-2 border-indigo-200 rounded-xl text-indigo-600 active:scale-95 transition-transform shrink-0 shadow-xs"
                  title="Ouvir pronúncia"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Option Cards (Grandes, 3D estilo Duolingo) */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt;
                let btnStyle = 'bg-white border-2 border-slate-200 border-b-4 text-slate-800';

                if (isSelected) {
                  btnStyle = 'bg-sky-50 border-2 border-sky-500 border-b-4 border-b-sky-600 text-sky-950 font-black';
                }

                if (hasAnswered) {
                  if (opt === currentQ.correctAnswer) {
                    btnStyle = 'bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 font-black';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-50 border-2 border-rose-400 border-b-4 border-b-rose-600 text-rose-950';
                  }
                }

                return (
                  <button
                    key={i}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(opt)}
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
          </div>
        </main>
      ) : (
        /* 🏆 Final Diagnostic Result Screen */
        <main className="flex-1 overflow-y-auto px-4 py-8 max-w-xl w-full mx-auto flex flex-col items-center justify-center text-center space-y-6">
          <MascotLingo mood="proud" size="lg" message="Diagnóstico concluído com sucesso!" />

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              Seu Nível CEFR Diagnosticado
            </span>
            <div className="text-5xl font-black text-indigo-600 tracking-tight">
              {calculatedLevel}
            </div>
            <p className="text-sm font-semibold text-slate-600 max-w-md mx-auto">
              {getLevelDescription(calculatedLevel)}
            </p>
          </div>

          <div className="w-full p-5 bg-indigo-50/80 border-2 border-indigo-200 rounded-3xl text-left space-y-2">
            <div className="flex items-center gap-2 text-indigo-950 font-black text-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>O que muda agora no Lingo World:</span>
            </div>
            <p className="text-xs text-indigo-900 leading-relaxed">
              O seu mapa de aprendizado, o Professor de IA e os testes diários serão calibrados especialmente para o nível <strong>{calculatedLevel}</strong>, garantindo que você nunca fique entediado nem sobrecarregado.
            </p>
            <div className="pt-1 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>Acertos no teste:</span>
              <span className="font-mono text-sm">{correctAnswersCount} de {PROGRESSIVE_QUESTIONS.length}</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 pt-2">
            <button
              onClick={() => onApplyLevel(calculatedLevel)}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 border-b-4 border-b-emerald-700 active:border-b-0 active:translate-y-1 text-white font-black text-base rounded-2xl shadow-lg transition-transform cursor-pointer"
            >
              Confirmar e Aplicar Nível {calculatedLevel}
            </button>
            <button
              onClick={() => onApplyLevel('A1')}
              className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 border-b-4 border-b-slate-300 active:border-b-0 active:translate-y-1 text-slate-700 font-bold text-sm rounded-2xl transition-transform cursor-pointer"
            >
              Prefiro Começar do Zero (A1)
            </button>
          </div>
        </main>
      )}

      {/* 🟩 Bottom Feedback Bar estilo Duolingo */}
      {!isFinished && (
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
                    {currentQ.explanation}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="w-full sm:w-auto">
              {!hasAnswered ? (
                <button
                  disabled={!selectedOption}
                  onClick={handleVerify}
                  className="w-full sm:w-48 py-3.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-200 disabled:border-b-slate-300 disabled:text-slate-400 border-b-4 border-b-emerald-700 active:border-b-0 active:translate-y-1 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-md transition-all cursor-pointer"
                >
                  Verificar
                </button>
              ) : (
                <button
                  onClick={handleNext}
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
