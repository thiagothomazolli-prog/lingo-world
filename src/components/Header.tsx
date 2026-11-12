import React from 'react';
import { Flame, Gem, Zap, Shield, Crown, Sparkles, BookOpen, Trophy, Target, ShoppingBag } from 'lucide-react';
import { UserProfile, LanguageCode } from '../types';

interface HeaderProps {
  user: UserProfile;
  onOpenUpgradeModal: () => void;
  onOpenCefrTest: () => void;
  onOpenAdmin: () => void;
  onOpenLeaderboard: () => void;
  onOpenMissions?: () => void;
  onOpenAiStudio?: () => void;
  onOpenShop?: () => void;
  unclaimedMissionsCount?: number;
  onSelectLanguage: (lang: LanguageCode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onOpenUpgradeModal,
  onOpenCefrTest,
  onOpenAdmin,
  onOpenLeaderboard,
  onOpenMissions,
  onOpenAiStudio,
  onOpenShop,
  unclaimedMissionsCount = 0,
  onSelectLanguage,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 pt-[calc(0.625rem+env(safe-area-inset-top))] pb-2.5 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand & Language Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-black text-lg shadow-sm tracking-tighter">
              LW
            </div>
            <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-black rounded-md shadow-2xs">
              v1.11.0
            </span>
            <div className="hidden sm:block">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg">LINGO<span className="text-indigo-600">WORLD</span></span>
              <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Aprenda • Explore • Conquiste</span>
            </div>
          </div>

          {/* Language selector chip */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors border border-slate-200">
              <span>🇬🇧</span>
              <span className="hidden md:inline">Inglês</span>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-black px-1.5 py-0.2 rounded-full">{user.cefrLevel}</span>
            </button>
            <div className="absolute left-0 mt-1.5 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 hidden group-hover:block z-50 text-xs">
              <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Idiomas disponíveis</div>
              <button
                onClick={() => onSelectLanguage('en')}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-indigo-50 text-slate-800 font-semibold"
              >
                <span>🇬🇧 Inglês (Principal)</span>
                <span className="text-emerald-600 text-[10px] font-bold">Ativo</span>
              </button>
              <button
                onClick={() => onSelectLanguage('es')}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-50 text-slate-600"
              >
                <span>🇪🇸 Espanhol</span>
                <span className="text-[10px] text-slate-400">Em Breve</span>
              </button>
              <button
                onClick={() => onSelectLanguage('zh')}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-50 text-slate-600"
              >
                <span>🇨🇳 Mandarim (Pinyin)</span>
                <span className="text-[10px] text-slate-400">Beta</span>
              </button>
              <button
                onClick={() => onSelectLanguage('fr')}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-50 text-slate-600"
              >
                <span>🇫🇷 Francês</span>
                <span className="text-[10px] text-slate-400">Em Breve</span>
              </button>
              <button
                onClick={() => onSelectLanguage('de')}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-50 text-slate-600"
              >
                <span>🇩🇪 Alemão</span>
                <span className="text-[10px] text-slate-400">Em Breve</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gamification Stats: Streak, Gems, XP */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Daily Streak Count */}
          <div className="relative group">
            <div
              title={`Ofensiva Diária: ${user.dailyStreak ?? user.streakDays} dias seguidos estudando`}
              className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border border-amber-300/80 rounded-full text-amber-800 font-extrabold text-xs cursor-pointer shadow-xs transition-all active:scale-95"
            >
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
              <span className="font-mono text-sm font-black">{user.dailyStreak ?? user.streakDays}</span>
              <span className="hidden md:inline text-[11px] font-bold text-amber-700">dias</span>
            </div>

            {/* Streak Info Dropdown Popover */}
            <div className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-64 p-3 bg-white border border-amber-200 rounded-2xl shadow-xl hidden group-hover:block z-50 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-100">
                <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                <div>
                  <h5 className="font-black text-slate-900 leading-tight">
                    Ofensiva Diária: {user.dailyStreak ?? user.streakDays} Dias
                  </h5>
                  <span className="text-[10px] text-amber-700 font-semibold">Sequência ativa</span>
                </div>
              </div>
              <p className="py-2 text-slate-600 text-[11px] leading-relaxed">
                Estude diariamente para manter sua sequência. Cada dia consecutivo concede <strong>Gemas bônus</strong> (de +5 a +15 💎) para a sua jornada!
              </p>
              <div className="p-2 bg-amber-50 rounded-xl text-[10px] font-bold text-amber-900 flex items-center justify-between">
                <span>Bônus diário:</span>
                <span className="text-emerald-700 font-black">+5 a +15 Gemas 💎</span>
              </div>
            </div>
          </div>

          {/* LingoGems */}
          <button
            onClick={onOpenShop}
            title="Abrir Loja de Gemas: compre Congelador de Ofensiva e Skins de Avatar!"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 hover:bg-sky-100 border border-sky-300/80 rounded-full text-sky-700 font-extrabold text-xs cursor-pointer shadow-2xs transition-all active:scale-95"
          >
            <Gem className="w-4 h-4 text-sky-500 fill-sky-400" />
            <span className="font-mono">{user.gems}</span>
            <span className="hidden md:inline text-[10px] text-sky-600 font-bold uppercase tracking-wider">Loja</span>
          </button>

          {/* XP */}
          <div
            title="Experiência acumulada"
            className="flex items-center gap-1 px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200/60 rounded-full text-indigo-700 font-bold text-xs cursor-pointer transition-colors"
          >
            <Zap className="w-4 h-4 text-indigo-600 fill-indigo-500" />
            <span>{user.xp}</span>
            <span className="hidden md:inline text-[11px] font-medium text-indigo-600">XP</span>
          </div>

          {/* Plan badge & Upgrade button */}
          {user.plan === 'free' ? (
            <button
              onClick={onOpenUpgradeModal}
              className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs rounded-full shadow-xs transition-transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plus</span>
            </button>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-xs rounded-full shadow-xs">
              <Crown className="w-3.5 h-3.5" />
              <span className="capitalize">{user.plan}</span>
            </span>
          )}

          {/* Level Test Button */}
          <button
            onClick={onOpenCefrTest}
            title="Fazer Teste de Nivelamento CEFR"
            className="hidden lg:flex items-center gap-1 px-2.5 py-1 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nivelamento</span>
          </button>

          {/* Daily Missions Button */}
          {onOpenMissions && (
            <button
              onClick={onOpenMissions}
              title="Missões Diárias (3 tarefas com XP e Gemas a cada 24h)"
              className="relative flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-full border border-slate-200 transition-transform active:scale-95 cursor-pointer shadow-2xs"
            >
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>Missões</span>
              {unclaimedMissionsCount > 0 ? (
                <span className="flex items-center justify-center w-4 h-4 bg-amber-500 text-slate-950 font-black text-[9px] rounded-full animate-bounce">
                  {unclaimedMissionsCount}
                </span>
              ) : (
                <span className="hidden md:inline-block px-1.5 py-0.2 bg-slate-200 text-slate-600 rounded-full text-[9px] font-bold">
                  24h
                </span>
              )}
            </button>
          )}

          {/* Ranking Top 5 Button */}
          <button
            onClick={onOpenLeaderboard}
            title="Ver Ranking Top 5 (Líderes de XP)"
            className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs rounded-full shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <Trophy className="w-3.5 h-3.5 fill-amber-200 text-white" />
            <span>Ranking</span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 bg-white/25 rounded-full text-[9px] font-black uppercase">
              Top 5
            </span>
          </button>

          {/* Shop Modal Button */}
          {onOpenShop && (
            <button
              onClick={onOpenShop}
              title="Abrir Loja de Gemas: adquira Congelador de Ofensiva e Skins de Avatar"
              className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xs font-black rounded-full shadow-xs transition-transform active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Loja</span>
            </button>
          )}

          {/* AI Studio Multi-modal Labs Button */}
          {onOpenAiStudio && (
            <button
              onClick={onOpenAiStudio}
              title="Abrir AI Studio Labs (Música Lyria, Vídeos Omni, Imagens, Voz Live e Ciência)"
              className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:from-fuchsia-700 hover:to-indigo-700 text-white text-xs font-black rounded-full shadow-sm transition-transform active:scale-95 cursor-pointer ring-1 ring-white/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>IA Studio</span>
            </button>
          )}

          {/* Admin Portal Button */}
          <button
            onClick={onOpenAdmin}
            title="Painel Administrativo & Métricas de Negócio"
            className="flex items-center gap-1 p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-transparent hover:border-indigo-100"
          >
            <Shield className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
