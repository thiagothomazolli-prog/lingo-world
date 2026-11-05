import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Zap,
  Sparkles,
  Crown,
  Medal,
  TrendingUp,
  ArrowRight,
  Shield,
  Star,
  Users,
  Info,
} from 'lucide-react';
import { UserProfile } from '../types';

export interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  cefrLevel: string;
  streak: number;
  league: string;
  country: string;
  titleRole: string;
  isUser?: boolean;
}

const BASELINE_COMPETITORS: LeaderboardUser[] = [
  {
    id: 'comp-1',
    name: 'Helena Vance',
    avatar: '👩‍🚀',
    xp: 1450,
    cefrLevel: 'C1',
    streak: 42,
    league: 'Ouro',
    country: '🇬🇧',
    titleRole: 'Mestre da Fluência',
  },
  {
    id: 'comp-2',
    name: 'Lucas Siqueira',
    avatar: '🦁',
    xp: 980,
    cefrLevel: 'B2',
    streak: 28,
    league: 'Ouro',
    country: '🇧🇷',
    titleRole: 'Guerreiro da Arena',
  },
  {
    id: 'comp-3',
    name: 'Camila Duarte',
    avatar: '🦊',
    xp: 840,
    cefrLevel: 'B1',
    streak: 21,
    league: 'Ouro',
    country: '🇵🇹',
    titleRole: 'Exploradora Veloz',
  },
  {
    id: 'comp-4',
    name: 'Rodrigo Lima',
    avatar: '🐼',
    xp: 620,
    cefrLevel: 'A2',
    streak: 14,
    league: 'Ouro',
    country: '🇧🇷',
    titleRole: 'Foco Diário',
  },
  {
    id: 'comp-5',
    name: 'Beatriz Martins',
    avatar: '🦄',
    xp: 490,
    cefrLevel: 'A2',
    streak: 9,
    league: 'Ouro',
    country: '🇧🇷',
    titleRole: 'Estudante Ativa',
  },
  {
    id: 'comp-6',
    name: 'Mateo Rossi',
    avatar: '⚡',
    xp: 340,
    cefrLevel: 'A1',
    streak: 6,
    league: 'Ouro',
    country: '🇮🇹',
    titleRole: 'Novato Promissor',
  },
  {
    id: 'comp-7',
    name: 'Sofia Chen',
    avatar: '🦉',
    xp: 210,
    cefrLevel: 'A1',
    streak: 4,
    league: 'Ouro',
    country: '🇨🇳',
    titleRole: 'Constância Diária',
  },
];

interface LeaderboardProps {
  user: UserProfile;
  compact?: boolean;
  onExploreMap?: () => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({
  user,
  compact = false,
  onExploreMap,
}) => {
  const [showXpGuide, setShowXpGuide] = useState(false);

  // Construct user entry with live user data
  const currentUserEntry: LeaderboardUser = {
    id: 'current-user',
    name: user.name || 'Você',
    avatar: user.avatar || '🚀',
    xp: user.xp,
    cefrLevel: user.cefrLevel,
    streak: user.dailyStreak ?? user.streakDays ?? 1,
    league: 'Ouro',
    country: '🇧🇷',
    titleRole: 'Você (Explorador)',
    isUser: true,
  };

  // Combine and sort by accumulated XP descending
  const sortedUsers = [...BASELINE_COMPETITORS, currentUserEntry].sort(
    (a, b) => b.xp - a.xp
  );

  // Select top 5 users
  const top5 = sortedUsers.slice(0, 5);

  // Locate current user rank in full pool
  const userRank = sortedUsers.findIndex((u) => u.isUser) + 1;
  const userInTop5 = userRank <= 5;
  const fifthPlaceXp = top5[4] ? top5[4].xp : 0;
  const xpDifference = Math.max(0, fifthPlaceXp - user.xp + 10);

  // Reorder top 3 for Olympic-style podium (2nd on left, 1st center, 3rd right)
  const podiumOrder =
    top5.length >= 3
      ? [
          { item: top5[1], rank: 2, height: 'h-32 sm:h-36', medal: '🥈', color: 'from-slate-200 to-slate-400', border: 'border-slate-300' },
          { item: top5[0], rank: 1, height: 'h-40 sm:h-44', medal: '🥇', color: 'from-amber-200 via-yellow-400 to-amber-500', border: 'border-amber-400 ring-4 ring-amber-300/50' },
          { item: top5[2], rank: 3, height: 'h-28 sm:h-32', medal: '🥉', color: 'from-orange-200 to-amber-700', border: 'border-orange-300' },
        ]
      : [];

  return (
    <div className="space-y-6">
      {/* Header Badge & League Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 rounded-3xl text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-200 shadow-inner">
            <Trophy className="w-6 h-6 fill-amber-300 text-amber-300 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black tracking-tight">Ranking Top 5 de XP</h3>
              <span className="px-2 py-0.5 bg-white/20 backdrop-blur-xs text-[10px] font-mono font-bold rounded-full uppercase">
                Temporada Ativa
              </span>
            </div>
            <p className="text-xs text-amber-100 font-medium">
              Baseado no XP total acumulado na jornada de estudos e desafios.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1 bg-white/15 backdrop-blur-md text-xs font-bold rounded-xl flex items-center gap-1.5 border border-white/20">
            <Crown className="w-3.5 h-3.5 text-yellow-300" />
            <span>Liga Ouro</span>
          </span>
          <button
            onClick={() => setShowXpGuide(!showXpGuide)}
            className="p-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors cursor-pointer"
            title="Como ganhar mais XP?"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info Guide Toggle */}
      {showXpGuide && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-2 animate-in fade-in">
          <div className="font-extrabold flex items-center gap-1.5 text-amber-950">
            <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>Como escalar posições no Ranking de XP:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-semibold text-slate-700">
            <div className="p-2.5 bg-white rounded-xl border border-amber-100 flex items-center gap-2">
              <span className="text-lg">🗺️</span>
              <div>
                <span className="block text-slate-900 font-bold">Fases do Mapa</span>
                <span className="text-[11px] text-emerald-600 font-bold">+25 a +40 XP por fase</span>
              </div>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-amber-100 flex items-center gap-2">
              <span className="text-lg">🗂️</span>
              <div>
                <span className="block text-slate-900 font-bold">Revisão Espaçada</span>
                <span className="text-[11px] text-indigo-600 font-bold">+15 XP a cada flashcard</span>
              </div>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-amber-100 flex items-center gap-2">
              <span className="text-lg">🎮</span>
              <div>
                <span className="block text-slate-900 font-bold">Explorador 3D / Arena</span>
                <span className="text-[11px] text-amber-600 font-bold">+30 a +60 XP por missão</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Olympic Podium (Top 3 Visual) */}
      {!compact && podiumOrder.length === 3 && (
        <div className="pt-4 pb-2 px-2">
          <div className="text-center mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Pódio dos Líderes de XP
            </span>
          </div>

          <div className="flex items-end justify-center gap-2 sm:gap-4 max-w-md mx-auto">
            {podiumOrder.map(({ item, rank, height, medal, color, border }) => {
              const isUserItem = item.isUser;
              return (
                <div
                  key={item.id}
                  className="flex-1 flex flex-col items-center group transition-transform hover:-translate-y-1"
                >
                  {/* Avatar & Crown */}
                  <div className="relative mb-2 flex flex-col items-center">
                    {rank === 1 && (
                      <Crown className="w-5 h-5 text-amber-400 fill-amber-400 -mb-1 animate-pulse" />
                    )}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-3xl shadow-md border-2 ${
                        isUserItem ? 'ring-4 ring-indigo-500 border-white' : 'border-white'
                      }`}
                    >
                      {item.avatar}
                    </div>
                    <span className="absolute -bottom-2 px-2 py-0.2 bg-slate-900 text-white font-black text-[11px] rounded-full shadow-xs">
                      {medal} {rank}º
                    </span>
                  </div>

                  {/* Name and XP */}
                  <div className="text-center mt-2 w-full px-1">
                    <span
                      className={`block font-extrabold text-xs truncate ${
                        isUserItem ? 'text-indigo-600 font-black' : 'text-slate-800'
                      }`}
                      title={item.name}
                    >
                      {isUserItem ? 'Você' : item.name}
                    </span>
                    <span className="text-[11px] font-mono font-black text-amber-600 block">
                      {item.xp} XP
                    </span>
                  </div>

                  {/* Podium Column */}
                  <div
                    className={`w-full mt-2 rounded-t-2xl bg-gradient-to-t ${color} ${height} flex flex-col items-center justify-between p-2 shadow-sm border-t ${border}`}
                  >
                    <span className="text-xl sm:text-2xl font-black text-slate-900/60 font-mono">
                      {rank}
                    </span>
                    <div className="w-full text-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-900/70 block">
                        {item.cefrLevel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Top 5 Table / Cards */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between px-2 pb-1">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-indigo-500" />
            <span>Tabela Oficial • 5 Melhores Usuários</span>
          </span>
          <span className="text-[11px] text-slate-400 font-semibold">
            Ordenado por XP Acumulado
          </span>
        </div>

        <div className="space-y-2">
          {top5.map((competitor, index) => {
            const isUser = competitor.isUser;
            const rank = index + 1;
            const rankBadges: Record<number, { text: string; bg: string; textCol: string }> = {
              1: { text: '🥇 1º', bg: 'bg-amber-100 border-amber-300', textCol: 'text-amber-800' },
              2: { text: '🥈 2º', bg: 'bg-slate-100 border-slate-300', textCol: 'text-slate-800' },
              3: { text: '🥉 3º', bg: 'bg-orange-100 border-orange-300', textCol: 'text-orange-800' },
              4: { text: '4º', bg: 'bg-slate-50 border-slate-200', textCol: 'text-slate-600' },
              5: { text: '5º', bg: 'bg-slate-50 border-slate-200', textCol: 'text-slate-600' },
            };

            const badge = rankBadges[rank] || {
              text: `${rank}º`,
              bg: 'bg-slate-50 border-slate-200',
              textCol: 'text-slate-600',
            };

            return (
              <div
                key={competitor.id}
                className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all ${
                  isUser
                    ? 'bg-indigo-50/80 border-indigo-500 shadow-sm ring-2 ring-indigo-400/30'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-2xs'
                }`}
              >
                {/* Left: Rank + Avatar + Name + Badges */}
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center font-black text-xs font-mono shrink-0 ${badge.bg} ${badge.textCol}`}
                  >
                    {badge.text}
                  </div>

                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-2xl shadow-xs">
                      {competitor.avatar}
                    </div>
                    {isUser && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[9px] font-black border border-white">
                        ✓
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-extrabold truncate ${
                          isUser ? 'text-indigo-950 font-black' : 'text-slate-900'
                        }`}
                      >
                        {competitor.name}
                      </span>
                      {isUser && (
                        <span className="px-1.5 py-0.2 bg-indigo-600 text-white text-[9px] font-black rounded-md uppercase tracking-wider">
                          Você
                        </span>
                      )}
                      <span className="text-xs">{competitor.country}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-semibold mt-0.5">
                      <span className="px-1.5 py-0.2 bg-slate-100 text-slate-600 font-mono font-bold rounded">
                        CEFR {competitor.cefrLevel}
                      </span>
                      <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                        <Flame className="w-3 h-3 fill-amber-500" />
                        <span>{competitor.streak}d</span>
                      </span>
                      <span className="hidden sm:inline text-slate-400">• {competitor.titleRole}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Accumulated XP counter */}
                <div className="text-right shrink-0 pl-2">
                  <div className="flex items-center justify-end gap-1.5">
                    <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
                    <span className="text-base sm:text-lg font-black font-mono text-slate-900">
                      {competitor.xp}
                    </span>
                    <span className="text-xs font-extrabold text-indigo-600">XP</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    Acumulado
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* User Status Bar if outside Top 5 */}
        {!userInTop5 && (
          <div className="mt-4 p-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-indigo-800/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                {user.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-indigo-300">Sua Posição Geral:</span>
                  <span className="px-2 py-0.5 bg-amber-500 text-slate-950 font-black text-xs rounded-md">
                    {userRank}º Lugar
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-200">
                    ({user.xp} XP)
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Faltam apenas <strong className="text-amber-300">{xpDifference} XP</strong> para você entrar no <strong>Top 5</strong>!
                </p>
              </div>
            </div>

            {onExploreMap && (
              <button
                onClick={onExploreMap}
                className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-black text-xs rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Ganhar XP Agora</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* User Status Bar if INSIDE Top 5 */}
        {userInTop5 && (
          <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <div>
                <span className="font-extrabold text-emerald-950">
                  Parabéns! Você está no Top 5 Oficial ({userRank}º Lugar com {user.xp} XP).
                </span>
                <p className="text-emerald-700 text-[11px]">
                  Mantenha sua ofensiva diária para garantir sua promoção para a Liga Diamante ao fim da temporada!
                </p>
              </div>
            </div>
            {onExploreMap && (
              <button
                onClick={onExploreMap}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-2xs transition-colors shrink-0"
              >
                Continuar
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
