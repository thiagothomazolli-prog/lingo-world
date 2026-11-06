import React from 'react';

export type MascotMood = 'happy' | 'cheering' | 'thinking' | 'correct' | 'explaining' | 'proud';

interface MascotLingoProps {
  mood?: MascotMood;
  message?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const MascotLingo: React.FC<MascotLingoProps> = ({
  mood = 'happy',
  message,
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {message && (
        <div className="mb-2 max-w-xs px-3.5 py-2 bg-white text-slate-800 text-xs sm:text-sm font-semibold rounded-2xl shadow-md border border-indigo-100 relative">
          <span>{message}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-indigo-100 rotate-45" />
        </div>
      )}

      <div
        onClick={onClick}
        className={`${sizeClasses[size]} cursor-pointer transform hover:scale-105 transition-transform duration-300 drop-shadow-md`}
      >
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Cosmic Aura / Glow */}
          <circle cx="80" cy="80" r="72" fill="url(#cosmic-glow)" opacity="0.35" />

          {/* Body - Royal Blue & Vibrant Violet Feather Texture */}
          <ellipse cx="80" cy="88" rx="50" ry="54" fill="url(#owl-body)" />

          {/* Chest Feathers / Space Suit Harness */}
          <path
            d="M50 78 C60 115 100 115 110 78 C95 125 65 125 50 78 Z"
            fill="#FED7AA"
            opacity="0.9"
          />
          <path
            d="M60 92 C68 118 92 118 100 92 C90 120 70 120 60 92 Z"
            fill="#FDBA74"
            opacity="0.6"
          />

          {/* Wings */}
          {/* Left Wing */}
          <path
            d={
              mood === 'cheering'
                ? "M32 80 C15 50 20 20 40 45 C45 60 40 75 32 80 Z"
                : "M34 75 C18 90 22 115 38 110 C42 100 40 85 34 75 Z"
            }
            fill="#3B82F6"
            stroke="#1D4ED8"
            strokeWidth="2.5"
          />
          {/* Right Wing */}
          <path
            d={
              mood === 'cheering'
                ? "M128 80 C145 50 140 20 120 45 C115 60 120 75 128 80 Z"
                : "M126 75 C142 90 138 115 122 110 C118 100 120 85 126 75 Z"
            }
            fill="#3B82F6"
            stroke="#1D4ED8"
            strokeWidth="2.5"
          />

          {/* Ear Tufts / Astro-Antennas */}
          <path d="M42 46 L30 18 L55 35 Z" fill="#6366F1" stroke="#4338CA" strokeWidth="2" />
          <path d="M118 46 L130 18 L105 35 Z" fill="#6366F1" stroke="#4338CA" strokeWidth="2" />
          <circle cx="30" cy="18" r="4" fill="#F59E0B" />
          <circle cx="130" cy="18" r="4" fill="#F59E0B" />

          {/* Face Visor / Big Wise Eyes */}
          <ellipse cx="80" cy="58" rx="42" ry="32" fill="#1E1B4B" stroke="#818CF8" strokeWidth="3" />

          {/* Left Eye */}
          <circle cx="62" cy="58" r="14" fill="#FFFFFF" />
          <circle cx="64" cy="58" r="8" fill="#1E293B" />
          <circle cx="66" cy="55" r="3" fill="#FFFFFF" />

          {/* Right Eye */}
          <circle cx="98" cy="58" r="14" fill="#FFFFFF" />
          <circle cx="96" cy="58" r="8" fill="#1E293B" />
          <circle cx="98" cy="55" r="3" fill="#FFFFFF" />

          {/* Eye Glasses / Hologram Rim */}
          <circle cx="62" cy="58" r="17" stroke="#38BDF8" strokeWidth="2.5" opacity="0.8" />
          <circle cx="98" cy="58" r="17" stroke="#38BDF8" strokeWidth="2.5" opacity="0.8" />
          <line x1="79" y1="58" x2="81" y2="58" stroke="#38BDF8" strokeWidth="3" />

          {/* Golden Beak */}
          <polygon points="80,64 72,75 88,75" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />

          {/* Cheerful Blush */}
          <ellipse cx="48" cy="68" rx="6" ry="3.5" fill="#F43F5E" opacity="0.6" />
          <ellipse cx="112" cy="68" rx="6" ry="3.5" fill="#F43F5E" opacity="0.6" />

          {/* Feet / Landing Gear */}
          <ellipse cx="65" cy="138" rx="8" ry="4" fill="#F59E0B" />
          <ellipse cx="95" cy="138" rx="8" ry="4" fill="#F59E0B" />

          {/* Gradients */}
          <defs>
            <radialGradient id="cosmic-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="owl-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
