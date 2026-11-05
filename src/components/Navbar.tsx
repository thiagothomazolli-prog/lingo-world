import React from 'react';
import { Map, BookOpen, Bot, Swords, User } from 'lucide-react';

export type NavTab = 'map' | 'study' | 'tutor' | 'challenges' | 'profile';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  pendingReviewsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  pendingReviewsCount = 0,
}) => {
  const tabs = [
    { id: 'map' as NavTab, label: 'Mapa', icon: Map, badge: null },
    {
      id: 'study' as NavTab,
      label: 'Estudar',
      icon: BookOpen,
      badge: pendingReviewsCount > 0 ? pendingReviewsCount : null,
    },
    { id: 'tutor' as NavTab, label: 'Professor IA', icon: Bot, isSpecial: true },
    { id: 'challenges' as NavTab, label: 'Desafios', icon: Swords, badge: 'Novo' },
    { id: 'profile' as NavTab, label: 'Perfil', icon: User, badge: null },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-1.5 px-3 shadow-lg md:static md:border-t-0 md:bg-transparent md:shadow-none md:p-0">
      <div className="max-w-md md:max-w-none mx-auto flex items-center justify-around md:justify-start md:gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative flex flex-col md:flex-row items-center justify-center md:gap-2 px-3 py-1.5 md:py-2 md:px-4 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? tab.isSpecial
                    ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md scale-105'
                    : 'text-indigo-600 bg-indigo-50/90 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive && !tab.isSpecial ? 'stroke-[2.5]' : ''}`} />
                {tab.badge && (
                  <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 bg-rose-500 text-white text-[9px] font-black rounded-full shadow-xs">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="mt-0.5 md:mt-0 text-[11px] md:text-sm tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
