import React from 'react';
import { X, Trophy } from 'lucide-react';
import { UserProfile } from '../types';
import { Leaderboard } from './Leaderboard';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onExploreMap?: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  user,
  onExploreMap,
}) => {
  if (!isOpen) return null;

  const handleAction = () => {
    onClose();
    if (onExploreMap) onExploreMap();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-50 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shadow-xs">
              <Trophy className="w-4 h-4 fill-amber-500" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                Ranking de Fluência
              </h2>
              <span className="text-[11px] text-slate-500 font-semibold block">
                Top 5 Usuários • XP Acumulado
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          <Leaderboard user={user} onExploreMap={handleAction} />
        </div>
      </div>
    </div>
  );
};
