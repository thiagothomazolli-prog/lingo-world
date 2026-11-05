import React, { useState, useEffect } from 'react';
import {
  Target,
  Clock,
  Sparkles,
  CheckCircle2,
  Gift,
  Zap,
  Gem,
  ArrowRight,
  Flame,
  Check,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DailyMission, DailyMissionsState } from '../types';
import { getTimeUntilNextReset } from '../utils/missions';

interface DailyMissionsCardProps {
  missionsState: DailyMissionsState;
  onClaimReward: (missionId: string) => void;
  onClaimAllBonus: () => void;
  onNavigateToCategory?: (category: DailyMission['category']) => void;
  compact?: boolean;
}

export const DailyMissionsCard: React.FC<DailyMissionsCardProps> = ({
  missionsState,
  onClaimReward,
  onClaimAllBonus,
  onNavigateToCategory,
  compact = false,
}) => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextReset().text);

  // Update countdown every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNextReset().text);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const { missions, bonusClaimed, bonusXp, bonusGems } = missionsState;

  const completedCount = missions.filter((m) => m.isCompleted).length;
  const allCompleted = completedCount === missions.length;
  const hasUnclaimed = missions.some((m) => m.isCompleted && !m.isClaimed);

  const handleClaim = (mission: DailyMission) => {
    onClaimReward(mission.id);
    try {
      confetti({
        particleCount: 35,
        spread: 55,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleClaimBonus = () => {
    onClaimAllBonus();
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm space-y-4">
      {/* Header with 24h Countdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-sm shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-base text-slate-900 tracking-tight">
                Missões Diárias
              </h3>
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 font-mono font-bold text-[10px] rounded-lg">
                {completedCount}/3 Concluídas
              </span>
            </div>
            <p className="text-xs text-slate-500">
              3 tarefas rápidas renovadas a cada 24 horas para acelerar sua fluência.
            </p>
          </div>
        </div>

        {/* 24-Hour Renewal Countdown Chip */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200/70">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>Renovam em:</span>
          <span className="font-mono font-bold text-slate-900">{timeLeft}</span>
        </div>
      </div>

      {/* Progress Bar of Daily Completion */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs font-bold text-slate-600">
          <span>Progresso do Dia</span>
          <span className="font-mono text-indigo-600">
            {Math.round((completedCount / missions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-amber-500 via-orange-500 to-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / missions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 3 Missions List */}
      <div className="space-y-3 pt-1">
        {missions.map((mission) => {
          const progressPercent = Math.min(
            100,
            Math.round((mission.currentProgress / mission.targetProgress) * 100)
          );
          const isReadyToClaim = mission.isCompleted && !mission.isClaimed;

          return (
            <div
              key={mission.id}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                mission.isClaimed
                  ? 'bg-slate-50 border-slate-200/70 opacity-80'
                  : isReadyToClaim
                    ? 'bg-amber-50/70 border-amber-400 shadow-xs ring-2 ring-amber-300/40'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                  {mission.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-sm text-slate-900 truncate">
                      {mission.title}
                    </h4>
                    {mission.isClaimed && (
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.2 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
                        <Check className="w-3 h-3" /> Resgatado
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {mission.description}
                  </p>

                  {/* Individual Mission Progress Bar */}
                  <div className="flex items-center gap-2.5 mt-2">
                    <div className="w-32 sm:w-44 bg-slate-200/80 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          mission.isCompleted ? 'bg-emerald-500' : 'bg-indigo-600'
                        }`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-600">
                      {mission.currentProgress}/{mission.targetProgress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rewards & Action */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                {/* Reward Badges */}
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className="flex items-center gap-0.5 px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md font-mono">
                    <Zap className="w-3 h-3 fill-indigo-500 text-indigo-500" />
                    +{mission.rewardXp} XP
                  </span>
                  <span className="flex items-center gap-0.5 px-2 py-0.5 bg-sky-50 text-sky-700 rounded-md font-mono">
                    <Gem className="w-3 h-3 fill-sky-400 text-sky-500" />
                    +{mission.rewardGems} 💎
                  </span>
                </div>

                {/* Claim or Jump to Action Button */}
                {isReadyToClaim ? (
                  <button
                    onClick={() => handleClaim(mission)}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer animate-pulse flex items-center gap-1"
                  >
                    <Gift className="w-3.5 h-3.5" />
                    <span>Coletar</span>
                  </button>
                ) : mission.isClaimed ? (
                  <span className="px-3 py-1.5 text-[11px] font-bold text-slate-400 bg-slate-100 rounded-xl">
                    Concluída
                  </span>
                ) : onNavigateToCategory ? (
                  <button
                    onClick={() => onNavigateToCategory(mission.category)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Praticar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Daily Completion Chest Bonus */}
      <div
        className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-center justify-between gap-3 ${
          allCompleted && !bonusClaimed
            ? 'bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-amber-300 ring-2 ring-amber-300/40 shadow-xs'
            : bonusClaimed
              ? 'bg-slate-50 border-slate-200 text-slate-500'
              : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs shrink-0 ${
              allCompleted && !bonusClaimed
                ? 'bg-amber-400 text-amber-950 animate-bounce'
                : 'bg-white border border-slate-200 text-slate-400'
            }`}
          >
            🎁
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-extrabold text-sm text-slate-900">
                Baú de Ouro do Dia
              </span>
              <span className="px-1.5 py-0.2 bg-amber-200 text-amber-950 font-black text-[9px] rounded-md uppercase">
                Bônus Triplo
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Complete as 3 missões hoje para desbloquear o super prêmio de{' '}
              <strong className="text-indigo-600 font-mono">+{bonusXp} XP</strong> e{' '}
              <strong className="text-sky-600 font-mono">+{bonusGems} Gemas</strong>!
            </p>
          </div>
        </div>

        {allCompleted && !bonusClaimed ? (
          <button
            onClick={handleClaimBonus}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-white font-black text-xs rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Abrir Super Baú</span>
          </button>
        ) : bonusClaimed ? (
          <span className="px-3.5 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-black rounded-xl flex items-center gap-1 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Baú Resgatado Hoje</span>
          </span>
        ) : (
          <span className="text-[11px] font-bold text-slate-400 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">
            Falta {missions.length - completedCount} tarefa(s)
          </span>
        )}
      </div>
    </div>
  );
};
