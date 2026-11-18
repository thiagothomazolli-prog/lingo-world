import React from 'react';
import { Star, Lock, Check, Gift, Swords } from 'lucide-react';
import { Phase, UserProfile } from '../types';
import { WORLDS_DATA } from '../data/courseData';
import { DailyMission, DailyMissionsState } from '../types';
import { sfx } from '../utils/soundEffects';

interface MapViewProps {
  user: UserProfile;
  missionsState: DailyMissionsState;
  onClaimMissionReward: (missionId: string) => void;
  onClaimAllBonus: () => void;
  onNavigateToCategory?: (category: DailyMission['category']) => void;
  onSelectPhase: (phase: Phase) => void;
  onOpenCefrTest: () => void;
  onOpenLeaderboard: () => void;
  onOpenAiStudio?: () => void;
  onOpenShop?: () => void;
}

const THEME_BANNERS: Record<string, { icon: string; title: string; subtitle: string }> = {
  home: {
    icon: '🏠',
    title: 'TEMA 1 • A Casa',
    subtitle: '4 Módulos por Frequência (1: Essenciais • 2: Comuns • 3: Intermediárias • 4: Menos Comuns • 8 palavras por módulo)',
  },
  food: {
    icon: '🍎',
    title: 'TEMA 2 • Comida',
    subtitle: '4 Módulos por Frequência (1: Essenciais • 2: Comuns • 3: Intermediárias • 4: Menos Comuns • 8 palavras por módulo)',
  },
  body: {
    icon: '🫀',
    title: 'TEMA 3 • Corpo Humano',
    subtitle: '4 Módulos por Frequência (1: Essenciais • 2: Comuns • 3: Intermediárias • 4: Menos Comuns • 8 palavras por módulo)',
  },
  transport: {
    icon: '🚗',
    title: 'TEMA 4 • Transporte',
    subtitle: '4 Módulos por Frequência (1: Essenciais • 2: Comuns • 3: Intermediárias • 4: Menos Comuns • 8 palavras por módulo)',
  },
  clothes: {
    icon: '👕',
    title: 'TEMA 5 • Roupas',
    subtitle: '4 Módulos por Frequência (1: Essenciais • 2: Comuns • 3: Intermediárias • 4: Menos Comuns • 8 palavras por módulo)',
  },
  work: {
    icon: '💼',
    title: 'TEMA 6 • Trabalho',
    subtitle: '4 Módulos por Frequência (1: Essenciais • 2: Comuns • 3: Intermediárias • 4: Menos Comuns • 8 palavras por módulo)',
  },
};

export const MapView: React.FC<MapViewProps> = ({
  user,
  onSelectPhase,
}) => {
  const [unlockAllForTest, setUnlockAllForTest] = React.useState(true);

  // Regra de progressão escolar: o aluno só avança para o próximo módulo se passar na prova com nota >= 70
  const isPhaseUnlocked = (phase: Phase): boolean => {
    if (unlockAllForTest) return true;
    if ((phase.worldId === 0 || phase.worldId === 1) && phase.phaseNumber === 1) return true;
    if (user.completedPhaseIds.includes(phase.id)) return true;

    const currentWorld = WORLDS_DATA.find((w) => w.id === phase.worldId);
    if (!currentWorld) return false;

    const phaseIndex = currentWorld.phases.findIndex((p) => p.id === phase.id);
    if (phaseIndex > 0) {
      const prevPhase = currentWorld.phases[phaseIndex - 1];
      return user.completedPhaseIds.includes(prevPhase.id);
    }

    if (phase.worldId > 0 && phaseIndex === 0) {
      const prevWorld = WORLDS_DATA.find((w) => w.id === phase.worldId - 1);
      if (prevWorld && prevWorld.phases.length > 0) {
        const lastPhaseOfPrev = prevWorld.phases[prevWorld.phases.length - 1];
        return user.completedPhaseIds.includes(lastPhaseOfPrev.id);
      }
    }

    return false;
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Clean & Compact Welcome Header */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 px-4 py-3.5 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Olá, {user.name}! Explore os Temas e Módulos Progressivos:
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Cada tema tem <strong>4 módulos por frequência</strong> (8 palavras genéricas por módulo) • Nota mínima: <strong>70 pontos</strong>.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              sfx.playTap();
              setUnlockAllForTest((prev) => !prev);
            }}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-black border transition-all cursor-pointer ${
              unlockAllForTest
                ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700'
                : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
            }`}
            title="Alternar modo de teste (todas abertas vs bloqueio escolar >= 70 pts)"
          >
            {unlockAllForTest ? '🔓 Teste: Fases Abertas' : '🎓 Modo Prova (≥ 70 pts)'}
          </button>
          <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800 rounded-xl text-xs font-black shrink-0">
            Nível {user.cefrLevel}
          </span>
        </div>
      </div>

      {/* World Map Progression */}
      <div className="space-y-12">
        {WORLDS_DATA.map((world) => {
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
                    <span className="text-xs font-semibold text-white/80">
                      {world.id === 0 ? '6 Temas × 4 Módulos por Frequência (8 palavras/módulo)' : `Mundo ${world.id} de 7`}
                    </span>
                  </div>
                  {world.id === 0 && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-300 text-amber-950 font-black text-xs rounded-full shadow-xs mt-2">
                      <span>⭐ Módulos 1 a 4 por Frequência de Uso + 1 Módulo de Pronomes a cada 3</span>
                    </div>
                  )}
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1">{world.title}</h2>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5">{world.description}</p>
                </div>
              </div>

              {/* Connected Phase Pathway */}
              <div className="relative py-4 px-2 max-w-md mx-auto flex flex-col items-center">
                {/* Connecting SVG Path Line */}
                <div className="absolute top-8 bottom-8 w-2 bg-gradient-to-b from-indigo-200 via-sky-200 to-indigo-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-full -z-0" />

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

                    const isFirstModuleOfTheme =
                      world.id === 0 &&
                      phase.themeId &&
                      phase.themeId !== 'pronouns' &&
                      phase.frequencyLevel?.startsWith('Módulo 1');
                    const themeBanner = isFirstModuleOfTheme && phase.themeId ? THEME_BANNERS[phase.themeId] : null;

                    return (
                      <React.Fragment key={phase.id}>
                        {themeBanner && (
                          <div className="w-full py-3 px-4 rounded-2xl bg-amber-50 dark:bg-amber-950/70 border-2 border-amber-300 dark:border-amber-700 text-center shadow-xs">
                            <span className="text-xs sm:text-sm font-black text-amber-950 dark:text-amber-200 tracking-tight block">
                              {themeBanner.icon} {themeBanner.title}
                            </span>
                            <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-300/90 block mt-0.5">
                              {themeBanner.subtitle}
                            </span>
                          </div>
                        )}
                        <div
                          className={`flex flex-col items-center transition-all ${offsetClass}`}
                        >
                          {/* Node Button */}
                          <div className="relative group flex flex-col items-center">
                            {phase.type === 'boss' && (
                              <div className="mb-2 px-3 py-0.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white text-[10px] font-black tracking-wider uppercase rounded-full shadow-md flex items-center gap-1">
                                <span>{world.id === 0 ? `👩‍🏫 LIÇÃO DE PRONOMES ${phase.phaseNumber / 4}/8` : '👑 BOSS FINAL'}</span>
                              </div>
                            )}
                            {phase.type === 'chest' && (
                              <div className="mb-2 px-2.5 py-0.5 bg-amber-400 text-amber-950 text-[10px] font-black tracking-wider uppercase rounded-full shadow-xs flex items-center gap-1">
                                <span>{world.id === 0 ? `👩‍🏫 LIÇÃO DE PRONOMES ${phase.phaseNumber / 4}/8` : '🎁 BAÚ BÔNUS'}</span>
                              </div>
                            )}
                            <button
                              disabled={!unlocked}
                              onClick={() => {
                                sfx.playTap();
                                onSelectPhase(phase);
                              }}
                              className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center font-black text-lg transition-transform active:translate-y-1.5 cursor-pointer select-none ${
                                isCompleted
                                  ? 'bg-emerald-500 border-b-[6px] border-emerald-700 text-white shadow-sm'
                                  : unlocked
                                  ? phase.type === 'boss'
                                    ? 'bg-rose-500 border-b-[6px] border-rose-700 text-white ring-4 ring-rose-200 shadow-md'
                                    : phase.type === 'chest'
                                    ? 'bg-amber-400 border-b-[6px] border-amber-600 text-amber-950 shadow-md'
                                    : 'bg-indigo-600 border-b-[6px] border-indigo-800 text-white ring-4 ring-indigo-200 shadow-md'
                                  : 'bg-slate-200 dark:bg-slate-800 border-b-[4px] border-slate-300 dark:border-slate-700 text-slate-400 cursor-not-allowed opacity-75'
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
                              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-0.5 px-2 py-0.5 bg-white/95 dark:bg-slate-900 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">
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
                          <div className="mt-4 text-center max-w-[235px]">
                            {phase.frequencyLevel && (
                              <span className="inline-block px-2 py-0.5 mb-1 rounded-md bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/80 dark:border-indigo-800 text-[10px] font-black text-indigo-700 dark:text-indigo-300">
                                {phase.frequencyLevel}
                              </span>
                            )}
                            <span className="text-xs font-black text-slate-800 dark:text-slate-100 line-clamp-1 block">
                              {phase.title}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block">
                              {phase.subtitle}
                            </span>
                          </div>
                        </div>
                      </React.Fragment>
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
