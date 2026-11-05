import React from 'react';
import { Star, Lock, Check, Gift, Swords, ShieldAlert, Sparkles, ChevronRight, Gamepad2, Trophy, ShoppingBag } from 'lucide-react';
import { World, Phase, UserProfile } from '../types';
import { WORLDS_DATA } from '../data/courseData';
import { MascotLingo } from '../components/MascotLingo';
import { DailyMissionsCard } from '../components/DailyMissionsCard';
import { DailyMission, DailyMissionsState } from '../types';

interface MapViewProps {
  user: UserProfile;
  missionsState: DailyMissionsState;
  onClaimMissionReward: (missionId: string) => void;
  onClaimAllBonus: () => void;
  onNavigateToCategory?: (category: DailyMission['category']) => void;
  onSelectPhase: (phase: Phase) => void;
  onOpenCefrTest: () => void;
  onOpen3DGame: () => void;
  onOpenLeaderboard: () => void;
  onOpenAiStudio?: () => void;
  onOpenShop?: () => void;
}

export const MapView: React.FC<MapViewProps> = ({
  user,
  missionsState,
  onClaimMissionReward,
  onClaimAllBonus,
  onNavigateToCategory,
  onSelectPhase,
  onOpenCefrTest,
  onOpen3DGame,
  onOpenLeaderboard,
  onOpenAiStudio,
  onOpenShop,
}) => {
  // Check if a phase is unlocked
  const isPhaseUnlocked = (phase: Phase): boolean => {
    // First phase of World 1 is always unlocked
    if (phase.worldId === 1 && phase.phaseNumber === 1) return true;

    // If already completed
    if (user.completedPhaseIds.includes(phase.id)) return true;

    // Check if previous phase in same world is completed
    const currentWorld = WORLDS_DATA.find((w) => w.id === phase.worldId);
    if (!currentWorld) return false;

    const phaseIndex = currentWorld.phases.findIndex((p) => p.id === phase.id);
    if (phaseIndex > 0) {
      const prevPhase = currentWorld.phases[phaseIndex - 1];
      return user.completedPhaseIds.includes(prevPhase.id);
    }

    // First phase of world N is unlocked if previous world's last phase is completed
    if (phase.worldId > 1 && phaseIndex === 0) {
      const prevWorld = WORLDS_DATA.find((w) => w.id === phase.worldId - 1);
      if (prevWorld && prevWorld.phases.length > 0) {
        const lastPhaseOfPrev = prevWorld.phases[prevWorld.phases.length - 1];
        return user.completedPhaseIds.includes(lastPhaseOfPrev.id);
      }
    }

    return false;
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Welcome Banner with Mascot */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Jornada de Fluência em Inglês • Nível Atual: {user.cefrLevel}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Olá, {user.name}! Vamos explorar o Mundo?
            </h1>
            <p className="text-sm sm:text-base text-indigo-100 font-medium">
              Conquiste territórios, enfrente os Guardiões de cada fase e pratique situações reais com o Professor IA.
            </p>
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={onOpen3DGame}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Explorador Cósmico 3D (Jogar)</span>
              </button>
              <button
                onClick={onOpenLeaderboard}
                className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <Trophy className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Ranking Top 5 (XP)</span>
              </button>
              {onOpenShop && (
                <button
                  onClick={onOpenShop}
                  className="px-4 py-2.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-slate-950" />
                  <span>Loja de Gemas ({user.gems} 💎)</span>
                </button>
              )}
              {onOpenAiStudio && (
                <button
                  onClick={onOpenAiStudio}
                  className="px-4 py-2.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-black text-xs rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2 ring-1 ring-white/30"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>IA Studio Labs (Multimodal)</span>
                </button>
              )}
              <button
                onClick={onOpenCefrTest}
                className="px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-extrabold text-xs rounded-xl backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
              >
                Refazer Nivelamento
              </button>
            </div>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            <MascotLingo mood="happy" size="lg" message="Vamos conquistar a próxima estrela!" />
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* 24h Daily Missions Section */}
      <DailyMissionsCard
        missionsState={missionsState}
        onClaimReward={onClaimMissionReward}
        onClaimAllBonus={onClaimAllBonus}
        onNavigateToCategory={onNavigateToCategory}
      />

      {/* Quick Leaderboard Access Bar */}
      <div className="p-4 bg-white border border-slate-200/90 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-xs shrink-0">
            <Trophy className="w-6 h-6 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-black text-sm text-slate-900">Ranking Top 5 de XP</span>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-black rounded-md uppercase">
                Liga Ouro Ativa
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Você acumulou <strong className="text-indigo-600 font-mono">{user.xp} XP</strong>. Veja quem lidera o pódio de fluência e suba na classificação!
            </p>
          </div>
        </div>

        <button
          onClick={onOpenLeaderboard}
          className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
        >
          <span>Abrir Ranking Oficial</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* World Map Progression */}
      <div className="space-y-12">
        {WORLDS_DATA.map((world, worldIndex) => {
          return (
            <div key={world.id} className="relative space-y-5">
              {/* World Header Card */}
              <div
                className={`p-5 rounded-2xl text-white shadow-md bg-gradient-to-r ${world.gradientFrom} ${world.gradientTo} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-black/20 text-white font-mono text-xs font-bold rounded-lg uppercase tracking-wider">
                      {world.levelBadge}
                    </span>
                    <span className="text-xs font-semibold text-white/80">Mundo {world.id} de 7</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1">{world.title}</h2>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5">{world.description}</p>
                </div>
              </div>

              {/* Connected Phase Pathway */}
              <div className="relative py-4 px-2 max-w-md mx-auto flex flex-col items-center">
                {/* Connecting SVG Path Line */}
                <div className="absolute top-8 bottom-8 w-2 bg-gradient-to-b from-indigo-200 via-sky-200 to-indigo-100 rounded-full -z-0" />

                <div className="w-full space-y-8 relative z-10">
                  {world.phases.map((phase, pIndex) => {
                    const unlocked = isPhaseUnlocked(phase);
                    const isCompleted = user.completedPhaseIds.includes(phase.id);
                    const stars = user.starsByPhase[phase.id] || 0;

                    // Alternating horizontal offset for natural winding road feel
                    const offsetClass =
                      pIndex % 3 === 0
                        ? 'translate-x-0'
                        : pIndex % 3 === 1
                        ? '-translate-x-12 sm:-translate-x-16'
                        : 'translate-x-12 sm:translate-x-16';

                    return (
                      <div
                        key={phase.id}
                        className={`flex flex-col items-center transition-all ${offsetClass}`}
                      >
                        {/* Node Button */}
                        <div className="relative group">
                          <button
                            disabled={!unlocked}
                            onClick={() => onSelectPhase(phase)}
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex flex-col items-center justify-center font-extrabold text-base sm:text-lg transition-all duration-300 shadow-xl cursor-pointer select-none active:scale-95 ${
                              isCompleted
                                ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-white ring-4 ring-emerald-200/60 hover:scale-105'
                                : unlocked
                                ? phase.type === 'boss'
                                  ? 'bg-gradient-to-tr from-rose-500 to-red-600 text-white ring-4 ring-rose-200 animate-bounce hover:scale-105'
                                  : phase.type === 'chest'
                                  ? 'bg-gradient-to-tr from-amber-400 to-orange-500 text-white ring-4 ring-amber-200 hover:scale-105'
                                  : 'bg-gradient-to-tr from-indigo-600 to-sky-500 text-white ring-4 ring-indigo-200 hover:scale-105 animate-pulse'
                                : 'bg-slate-200 text-slate-400 border-2 border-slate-300 opacity-80 cursor-not-allowed'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-8 h-8 stroke-[3]" />
                            ) : !unlocked ? (
                              <Lock className="w-7 h-7" />
                            ) : phase.type === 'boss' ? (
                              <Swords className="w-8 h-8" />
                            ) : phase.type === 'chest' ? (
                              <Gift className="w-8 h-8" />
                            ) : (
                              <span>{phase.phaseNumber}</span>
                            )}
                          </button>

                          {/* Stars underneath if completed */}
                          {isCompleted && (
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-0.5 px-2 py-0.5 bg-white/95 rounded-full shadow-sm border border-slate-100">
                              {[1, 2, 3].map((s) => (
                                <Star
                                  key={s}
                                  className={`w-3 h-3 ${
                                    s <= stars
                                      ? 'text-amber-400 fill-amber-400'
                                      : 'text-slate-300 fill-slate-200'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Phase Title Pill */}
                        <div className="mt-4 text-center max-w-[200px]">
                          <span className="text-xs font-black text-slate-800 line-clamp-1 block">
                            {phase.title}
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block">
                            {phase.subtitle}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
