import React from 'react';
import { Star, Lock, Check, Gift, Swords, ShieldAlert, Sparkles, ChevronRight, Trophy } from 'lucide-react';
import { World, Phase, UserProfile } from '../types';
import { WORLDS_DATA } from '../data/courseData';
import { MascotLingo } from '../components/MascotLingo';
import { DailyMissionsCard } from '../components/DailyMissionsCard';
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

export const MapView: React.FC<MapViewProps> = ({
  user,
  missionsState,
  onClaimMissionReward,
  onClaimAllBonus,
  onNavigateToCategory,
  onSelectPhase,
  onOpenCefrTest,
  onOpenLeaderboard,
  onOpenAiStudio,
  onOpenShop,
}) => {
  // Check if a phase is unlocked (Versão de teste: todas as fases abertas para livre navegação e teste)
  const isPhaseUnlocked = (_phase: Phase): boolean => {
    return true;
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Clean & Compact Welcome Header */}
      <div className="rounded-2xl bg-white border border-slate-200/90 px-4 py-3.5 shadow-2xs flex items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
            Olá, {user.name}! Escolha sua lição:
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Toque em uma fase desbloqueada para começar a praticar.
          </p>
        </div>
        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded-xl text-xs font-black shrink-0">
          Nível {user.cefrLevel}
        </span>
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
                    <span className="text-xs font-semibold text-white/80">
                      {world.id === 0 ? 'Módulo Preparatório Visual' : `Mundo ${world.id} de 7`}
                    </span>
                  </div>
                  {world.id === 0 && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-300 text-amber-950 font-black text-xs rounded-full shadow-xs mt-2">
                      <span>⭐ Ponto de Partida: Vocabulário Visual Ilustrado com Imagens</span>
                    </div>
                  )}
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

                    const isRoundStart = world.id === 0 && (phase.phaseNumber - 1) % 5 === 0;
                    const roundNum = Math.floor((phase.phaseNumber - 1) / 5) + 1;
                    const roundLabels: Record<number, string> = {
                      1: 'Rodada 1/4 • Essenciais do Dia a Dia (Alimentos → Animais → Casa → Roupas → Prática)',
                      2: 'Rodada 2/4 • Muito Comuns no Cotidiano (Feira → Zoológico → Cozinha → Transportes → Prática)',
                      3: 'Rodada 3/4 • Conhecidos pelo Público Geral (Refeições → Marinhos/Aves → Escola → Cidade → Prática)',
                      4: 'Rodada 4/4 • Expansão & Domínio (Doces/Bebidas → Exóticos → Ferramentas → Corpo/Natureza → Prática)',
                    };

                    return (
                      <React.Fragment key={phase.id}>
                        {isRoundStart && (
                          <div className="w-full py-2 px-3.5 rounded-2xl bg-amber-50 border-2 border-amber-200/90 text-center shadow-2xs">
                            <span className="text-[11px] sm:text-xs font-black text-amber-900 tracking-tight block">
                              🔄 {roundLabels[roundNum]}
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
                                <span>{world.id === 0 ? `🎯 PRÁTICA FINAL • RODADA 4` : '👑 BOSS FINAL'}</span>
                              </div>
                            )}
                            {phase.type === 'chest' && (
                              <div className="mb-2 px-2.5 py-0.5 bg-amber-400 text-amber-950 text-[10px] font-black tracking-wider uppercase rounded-full shadow-xs flex items-center gap-1">
                                <span>{world.id === 0 ? `🎯 PRÁTICA • RODADA ${phase.phaseNumber / 5}` : '🎁 BAÚ BÔNUS'}</span>
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
                                : 'bg-slate-200 border-b-[4px] border-slate-300 text-slate-400 cursor-not-allowed opacity-75'
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
