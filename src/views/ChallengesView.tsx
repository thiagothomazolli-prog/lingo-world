import React, { useState } from 'react';
import { Swords, Trophy, Sparkles, Brain, Target, Play, CheckCircle2, XCircle, ArrowRight, Zap, RefreshCw, Flame, Gamepad2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile, ArenaCompetitor } from '../types';
import { MascotLingo } from '../components/MascotLingo';
import { speakText } from '../utils/storage';
import { API_BASE_URL } from '../config';

interface ChallengesViewProps {
  user: UserProfile;
  onAwardXp: (xp: number, gems: number) => void;
  onOpen3DGame: () => void;
  onOpenLeaderboard?: () => void;
  onRecordMissionActivity?: (category: 'speed_round') => void;
}

const LEAGUE_RANKING: ArenaCompetitor[] = [
  { id: 'c1', name: 'Lucas Siqueira', avatar: '🦁', xpThisWeek: 420, league: 'Ouro' },
  { id: 'c2', name: 'Camila Duarte', avatar: '🦊', xpThisWeek: 380, league: 'Ouro' },
  { id: 'user', name: 'Você', avatar: '🚀', xpThisWeek: 240, league: 'Ouro', isUser: true },
  { id: 'c3', name: 'Rodrigo Lima', avatar: '🐼', xpThisWeek: 210, league: 'Ouro' },
  { id: 'c4', name: 'Beatriz Martins', avatar: '🦄', xpThisWeek: 195, league: 'Ouro' },
];

export const ChallengesView: React.FC<ChallengesViewProps> = ({
  user,
  onAwardXp,
  onOpen3DGame,
  onOpenLeaderboard,
  onRecordMissionActivity,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'lingo-brain' | 'arena'>('lingo-brain');
  const [isGeneratingMission, setIsGeneratingMission] = useState(false);
  const [activeMission, setActiveMission] = useState<any>({
    title: 'Operação Passado Perfeito',
    objective: 'Superar hesitações com verbos irregulares comuns.',
    briefTheory: 'Verbos irregulares não recebem -ed. Exemplo: go -> went, see -> saw, buy -> bought.',
    exercises: [
      {
        id: 1,
        prompt: 'Qual a forma correta do passado de GO?',
        context: 'Yesterday, I ______ to the international language center.',
        options: ['went', 'goed', 'goes', 'gone'],
        correctAnswer: 'went',
        explanation: 'O passado simples de GO é WENT. Nunca usamos goed.',
      },
      {
        id: 2,
        prompt: 'Qual a forma correta de BUY no passado?',
        context: 'She ______ a fantastic dictionary online.',
        options: ['bought', 'buyed', 'buying', 'buys'],
        correctAnswer: 'bought',
        explanation: 'O passado simples de BUY é BOUGHT.',
      },
    ],
    rewardXp: 75,
    rewardGems: 25,
  });

  // Mission gameplay state
  const [missionStepIndex, setMissionStepIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState(false);
  const [missionScore, setMissionScore] = useState(0);
  const [missionCompleted, setMissionCompleted] = useState(false);

  // Speed Arena Quiz State
  const [isArenaPlaying, setIsArenaPlaying] = useState(false);
  const [arenaIndex, setArenaIndex] = useState(0);
  const [arenaScore, setArenaScore] = useState(0);
  const [arenaFinished, setArenaFinished] = useState(false);

  const ARENA_QUESTIONS = [
    { q: 'Qual o oposto exato de "Ancient"?', options: ['Modern', 'Old', 'Antique', 'Historic'], a: 'Modern' },
    { q: 'Qual a tradução de "Reliable"?', options: ['Confiável', 'Razoável', 'Rápido', 'Relativo'], a: 'Confiável' },
    { q: 'Complete: "I look forward ______ meeting you."', options: ['to', 'for', 'at', 'with'], a: 'to' },
    { q: 'Significado de "Figure out":', options: ['Descobrir a solução', 'Desenhar', 'Desistir', 'Calcular peso'], a: 'Descobrir a solução' },
  ];

  const handleGenerateAdaptiveMission = async () => {
    setIsGeneratingMission(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/gemini/generate-adaptive-mission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          weaknessTopic: user.weakTopics[0] || 'Past Irregular Verbs',
          skillType: 'Grammar',
          level: user.cefrLevel,
        }),
      });
      const data = await response.json();
      if (data && data.exercises) {
        setActiveMission(data);
        setMissionStepIndex(0);
        setSelectedAnswer(null);
        setHasCheckedAnswer(false);
        setMissionScore(0);
        setMissionCompleted(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingMission(false);
    }
  };

  const handleCheckMissionAnswer = () => {
    if (!selectedAnswer || hasCheckedAnswer) return;
    const currentQ = activeMission.exercises[missionStepIndex];
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    setHasCheckedAnswer(true);
    if (isCorrect) {
      setMissionScore((prev) => prev + 1);
    }
  };

  const handleNextMissionStep = () => {
    if (missionStepIndex < activeMission.exercises.length - 1) {
      setMissionStepIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasCheckedAnswer(false);
    } else {
      setMissionCompleted(true);
      onAwardXp(activeMission.rewardXp, activeMission.rewardGems);
      if (onRecordMissionActivity) {
        onRecordMissionActivity('speed_round');
      }
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  const handleArenaAnswer = (choice: string) => {
    if (choice === ARENA_QUESTIONS[arenaIndex].a) {
      setArenaScore((prev) => prev + 1);
    }
    if (arenaIndex < ARENA_QUESTIONS.length - 1) {
      setArenaIndex((prev) => prev + 1);
    } else {
      setArenaFinished(true);
      onAwardXp(50, 15);
      if (onRecordMissionActivity) {
        onRecordMissionActivity('speed_round');
      }
      confetti({ particleCount: 80, spread: 70 });
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Sub Tabs Selector */}
      <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl max-w-md mx-auto text-xs font-bold">
        <button
          onClick={() => setActiveSubTab('lingo-brain')}
          className={`flex-1 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeSubTab === 'lingo-brain' ? 'bg-white shadow-xs text-indigo-700 font-extrabold' : 'text-slate-600'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Lingo Brain Adaptativo</span>
        </button>
        <button
          onClick={() => setActiveSubTab('arena')}
          className={`flex-1 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeSubTab === 'arena' ? 'bg-white shadow-xs text-indigo-700 font-extrabold' : 'text-slate-600'
          }`}
        >
          <Swords className="w-4 h-4" />
          <span>Arena & Ligas</span>
        </button>
      </div>

      {/* 1. LINGO BRAIN Adaptive Missions */}
      {activeSubTab === 'lingo-brain' && (
        <div className="space-y-6">
          {/* Lingo Brain Diagnostic Card */}
          <div className="p-6 bg-gradient-to-tr from-indigo-900 to-purple-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Motor Pedagógico com IA Adaptativa</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                LINGO BRAIN: Missões Sob Medida
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200 max-w-lg">
                Identificamos automaticamente seus pontos de melhoria e criamos desafios focados na sua retenção real, sem repetições mecânicas.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
                {user.weakTopics.map((topic, i) => (
                  <span key={i} className="px-3 py-1 bg-white/15 rounded-xl text-xs font-semibold text-white">
                    🎯 {topic}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerateAdaptiveMission}
              disabled={isGeneratingMission}
              className="px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition-transform active:scale-95 cursor-pointer shrink-0 flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isGeneratingMission ? 'animate-spin' : ''}`} />
              <span>{isGeneratingMission ? 'Gerando Desafio...' : 'Gerar Nova Missão Adaptativa'}</span>
            </button>
          </div>

          {/* Active Mission Card & Interactive Player */}
          {activeMission && (
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Target className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-black text-slate-900 text-base">{activeMission.title}</h4>
                    <p className="text-xs text-slate-500">{activeMission.objective}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 font-extrabold text-xs rounded-lg">
                    +{activeMission.rewardXp} XP
                  </span>
                  <span className="px-2.5 py-1 bg-sky-50 text-sky-700 font-extrabold text-xs rounded-lg">
                    +{activeMission.rewardGems} Gemas
                  </span>
                </div>
              </div>

              {/* Brief Theory */}
              {activeMission.briefTheory && (
                <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-2xl text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">Regra Pedagógica: </span>
                  {activeMission.briefTheory}
                </div>
              )}

              {/* Gameplay or Completion */}
              {!missionCompleted ? (
                <div className="space-y-4">
                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-full transition-all"
                      style={{
                        width: `${((missionStepIndex + 1) / activeMission.exercises.length) * 100}%`,
                      }}
                    />
                  </div>

                  {/* Question */}
                  {activeMission.exercises[missionStepIndex] && (
                    <div className="space-y-3">
                      <h5 className="font-bold text-sm sm:text-base text-slate-900">
                        {activeMission.exercises[missionStepIndex].prompt}
                      </h5>
                      {activeMission.exercises[missionStepIndex].context && (
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs sm:text-sm text-slate-800">
                          {activeMission.exercises[missionStepIndex].context}
                        </div>
                      )}

                      {/* Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {activeMission.exercises[missionStepIndex].options.map((opt: string, i: number) => {
                          const isSelected = selectedAnswer === opt;
                          const isRight = opt === activeMission.exercises[missionStepIndex].correctAnswer;
                          let style = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800';

                          if (isSelected) style = 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-200 font-bold';
                          if (hasCheckedAnswer) {
                            if (isRight) style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                            else if (isSelected && !isRight) style = 'bg-rose-50 border-rose-400 text-rose-950';
                          }

                          return (
                            <button
                              key={i}
                              disabled={hasCheckedAnswer}
                              onClick={() => setSelectedAnswer(opt)}
                              className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-left cursor-pointer ${style}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback */}
                      {hasCheckedAnswer && (
                        <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200">
                          <p className="font-bold mb-0.5">Explicação:</p>
                          <p>{activeMission.exercises[missionStepIndex].explanation}</p>
                        </div>
                      )}

                      {/* Action */}
                      <div className="pt-2 flex justify-end">
                        {!hasCheckedAnswer ? (
                          <button
                            disabled={!selectedAnswer}
                            onClick={handleCheckMissionAnswer}
                            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
                          >
                            Verificar
                          </button>
                        ) : (
                          <button
                            onClick={handleNextMissionStep}
                            className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5"
                          >
                            <span>
                              {missionStepIndex < activeMission.exercises.length - 1 ? 'Próximo' : 'Finalizar Missão'}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <MascotLingo mood="cheering" size="md" message="Missão adaptativa cumprida!" />
                  <h4 className="text-xl font-black text-slate-900">Parabéns pela evolução!</h4>
                  <p className="text-xs text-slate-600">
                    Você acertou {missionScore} de {activeMission.exercises.length} desafios e ganhou +{activeMission.rewardXp} XP!
                  </p>
                  <button
                    onClick={handleGenerateAdaptiveMission}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
                  >
                    Gerar Outra Missão do Lingo Brain
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 2. Arena & Leaderboards */}
      {activeSubTab === 'arena' && (
        <div className="space-y-6">
          {/* 3D Action Game Feature Banner */}
          <div className="p-6 bg-gradient-to-r from-indigo-900 via-indigo-800 to-sky-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-700/50">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-sky-300">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Experiência 3D Interativa • Three.js</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black">Lingo Runner 3D: Rodovia Cósmica</h4>
              <p className="text-xs sm:text-sm text-indigo-200 max-w-lg">
                Pilote o Lingo com controles em tempo real (WASD / Espaço), desvie de asteroides e atravesse os portais corretos de vocabulário em 60fps!
              </p>
            </div>
            <button
              onClick={onOpen3DGame}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl transition-transform active:scale-95 cursor-pointer flex items-center gap-2 shrink-0"
            >
              <Play className="w-5 h-5 fill-slate-950" />
              <span>Jogar em Tela Cheia 3D</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Quiz Game */}
          <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-sm text-slate-900">Duelo Rápido da Arena</h4>
                <p className="text-xs text-slate-500">4 perguntas de vocabulário contra o cronômetro</p>
              </div>
            </div>

            {!isArenaPlaying && !arenaFinished ? (
              <div className="p-6 bg-slate-50 rounded-2xl text-center space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Teste seus reflexos de vocabulário em inglês para acumular pontos na Liga Ouro!
                </p>
                <button
                  onClick={() => {
                    setIsArenaPlaying(true);
                    setArenaIndex(0);
                    setArenaScore(0);
                    setArenaFinished(false);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md cursor-pointer transition-transform active:scale-95"
                >
                  Começar Duelo (+50 XP)
                </button>
              </div>
            ) : arenaFinished ? (
              <div className="text-center py-6 space-y-3">
                <Trophy className="w-12 h-12 text-amber-500 mx-auto animate-bounce" />
                <h5 className="font-black text-base text-slate-900">Duelo Concluído!</h5>
                <p className="text-xs text-slate-600">
                  Você marcou {arenaScore} / {ARENA_QUESTIONS.length} pontos e subiu na classificação!
                </p>
                <button
                  onClick={() => {
                    setIsArenaPlaying(false);
                    setArenaFinished(false);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Jogar Novamente
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>Pergunta {arenaIndex + 1} de {ARENA_QUESTIONS.length}</span>
                  <span className="text-amber-600">Pontuação: {arenaScore}</span>
                </div>
                <h5 className="font-extrabold text-sm text-slate-900">
                  {ARENA_QUESTIONS[arenaIndex].q}
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {ARENA_QUESTIONS[arenaIndex].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleArenaAnswer(opt)}
                      className="p-3 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Leaderboard */}
          <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h4 className="font-black text-sm text-slate-900">Liga Ouro • Ranking Semanal</h4>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Top 3 avançam de liga
              </span>
            </div>

            <div className="space-y-2">
              {LEAGUE_RANKING.map((comp, idx) => (
                <div
                  key={comp.id}
                  className={`p-3 rounded-2xl border flex items-center justify-between text-xs transition-all ${
                    comp.isUser
                      ? 'bg-indigo-50/80 border-indigo-300 font-bold'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-center font-black text-slate-400">
                      {idx + 1}º
                    </span>
                    <span className="text-lg">{comp.isUser ? user.avatar : comp.avatar}</span>
                    <span className="font-extrabold text-slate-900">{comp.name}</span>
                  </div>
                  <span className="font-black text-indigo-600">
                    {comp.isUser ? user.xp : comp.xpThisWeek} XP
                  </span>
                </div>
              ))}
            </div>

            {onOpenLeaderboard && (
              <button
                onClick={onOpenLeaderboard}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Trophy className="w-3.5 h-3.5 fill-amber-200 text-white" />
                <span>Ver Pódio & Ranking Top 5 Oficial de XP</span>
              </button>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
