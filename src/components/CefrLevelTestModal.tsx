import React, { useState } from 'react';
import { X, Award, CheckCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { CefrLevel } from '../types';
import { MascotLingo } from './MascotLingo';

interface CefrLevelTestModalProps {
  onClose: () => void;
  onApplyLevel: (level: CefrLevel) => void;
}

interface Question {
  id: number;
  level: CefrLevel;
  question: string;
  context: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const CEFR_QUESTIONS: Question[] = [
  {
    id: 1,
    level: 'A1',
    question: 'Qual a resposta correta para a pergunta de idade?',
    context: '"How old are you?"',
    options: ['I am 24 years old.', 'I have 24 years.', 'I am having 24.', 'My years are 24.'],
    correctAnswer: 'I am 24 years old.',
    explanation: 'Em inglês expressamos idade com o verbo TO BE (am/is/are).'
  },
  {
    id: 2,
    level: 'A2',
    question: 'Escolha a opção correta para descrever a rotina matinal:',
    context: 'Every weekday morning, Sarah ______ breakfast before she ______ to work.',
    options: [
      'eats / goes',
      'eat / go',
      'is eating / going',
      'ate / went'
    ],
    correctAnswer: 'eats / goes',
    explanation: 'Simple present para terceira pessoa do singular recebe a terminação -s/-es.'
  },
  {
    id: 3,
    level: 'B1',
    question: 'Complete com o passado correto do verbo irregular:',
    context: 'Yesterday evening, we ______ a fantastic documentary about space.',
    options: ['saw', 'seed', 'seen', 'did saw'],
    correctAnswer: 'saw',
    explanation: 'O passado simples de SEE é SAW.'
  },
  {
    id: 4,
    level: 'B2',
    question: 'Selecione a estrutura condicional hipotética correta:',
    context: 'If I ______ more free time, I ______ learn Mandarin Chinese.',
    options: [
      'had / would',
      'have / will',
      'had have / would have',
      'would have / had'
    ],
    correctAnswer: 'had / would',
    explanation: 'Second Conditional (situação hipotética): If + Past Simple, would + verbo base.'
  },
  {
    id: 5,
    level: 'C1',
    question: 'Complete com a conjunção formal adequada ao contexto acadêmico:',
    context: 'The company continued to expand, ______ the severe economic downturn.',
    options: ['notwithstanding', 'despite of', 'whereas', 'even though if'],
    correctAnswer: 'notwithstanding',
    explanation: '"Notwithstanding" significa não obstante / apesar de em tom formal avançado.'
  },
  {
    id: 6,
    level: 'C2',
    question: 'Identifique a inversão enfática correta:',
    context: 'Rarely ______ such an extraordinary display of talent in modern cinema.',
    options: [
      'have I witnessed',
      'I have witnessed',
      'I witnessed',
      'did I witnessed'
    ],
    correctAnswer: 'have I witnessed',
    explanation: 'Advérbios negativos ou restritivos no início de oração exigem inversão do verbo auxiliar: Rarely have I witnessed...'
  }
];

export const CefrLevelTestModal: React.FC<CefrLevelTestModalProps> = ({
  onClose,
  onApplyLevel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = CEFR_QUESTIONS[currentIndex];

  const handleNext = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    const newAnswers = { ...answers, [currentQ.id]: isCorrect };
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentIndex < CEFR_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Determine level based on correct answers
  const calculateResult = (): CefrLevel => {
    let score = 0;
    Object.values(answers).forEach((val) => {
      if (val) score += 1;
    });

    if (score >= 6) return 'C2';
    if (score === 5) return 'C1';
    if (score === 4) return 'B2';
    if (score === 3) return 'B1';
    if (score === 2) return 'A2';
    return 'A1';
  };

  const calculatedLevel = calculateResult();

  const getLevelDescription = (lvl: CefrLevel) => {
    switch (lvl) {
      case 'A1':
        return 'Iniciante: Compreende e usa expressões cotidianas e frases básicas.';
      case 'A2':
        return 'Básico Consolidado: Comunica-se em tarefas simples e rotineiras.';
      case 'B1':
        return 'Intermediário: Lida com a maioria das situações em viagens e no dia a dia.';
      case 'B2':
        return 'Intermediário Superior: Compreende ideias principais de textos complexos e conversa com espontaneidade.';
      case 'C1':
        return 'Avançado: Expressa-se de forma fluente e espontânea em contextos sociais, acadêmicos e profissionais.';
      case 'C2':
        return 'Domínio Pleno: Compreende com facilidade praticamente tudo o que ouve ou lê e se expressa com grande precisão.';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto">
        {/* Header */}
        <div className="shrink-0 px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600 shrink-0" />
            <h3 className="text-base font-extrabold text-slate-900">Teste de Nivelamento CEFR</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {!isFinished ? (
            <div className="space-y-5">
              {/* Progress */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Pergunta {currentIndex + 1} de {CEFR_QUESTIONS.length}</span>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full font-mono">
                  Avaliando {currentQ.level}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900">{currentQ.question}</h4>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm text-slate-800">
                  {currentQ.context}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedOption(opt)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                      selectedOption === opt
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-200'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => onApplyLevel('A1')}
                  className="text-xs text-slate-400 hover:text-slate-600 underline font-medium cursor-pointer"
                >
                  Prefiro começar do zero (A1)
                </button>
                <button
                  disabled={!selectedOption}
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all cursor-pointer"
                >
                  {currentIndex < CEFR_QUESTIONS.length - 1 ? 'Próxima' : 'Ver Resultado'}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-5 py-4">
              <MascotLingo mood="proud" size="md" message="Diagnóstico concluído!" />

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Seu nível CEFR recomendado</span>
                <div className="text-4xl font-black text-indigo-600 tracking-tight">
                  {calculatedLevel}
                </div>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {getLevelDescription(calculatedLevel)}
                </p>
              </div>

              <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-2xl text-xs text-indigo-900 text-left space-y-1">
                <p className="font-bold">O que acontece agora?</p>
                <p>O Lingo World ajustará os desafios do Lingo Brain e as conversas com o Professor IA para o seu ritmo ideal de aprendizagem.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                <button
                  onClick={() => onApplyLevel(calculatedLevel)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md cursor-pointer"
                >
                  Confirmar Nível {calculatedLevel}
                </button>
                <button
                  onClick={() => onApplyLevel('A1')}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm cursor-pointer"
                >
                  Começar do Zero (A1)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
