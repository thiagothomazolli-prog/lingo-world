import React from 'react';

interface VocabIllustrationProps {
  word: string;
  emoji?: string;
  className?: string;
}

function norm(word: string): string {
  return word.toLowerCase().replace(/[^a-z0-9]/g, '');
}

type WindowPlaceType =
  | 'bookstore'
  | 'bakery'
  | 'pharmacy'
  | 'supermarket'
  | 'library'
  | 'hospital'
  | 'school'
  | 'restaurant'
  | 'bank'
  | 'hotel'
  | 'cafe'
  | 'butcher'
  | 'florist'
  | 'barber'
  | 'cinema'
  | 'gym'
  | 'postoffice'
  | 'toystore'
  | 'clothing'
  | 'shoestore'
  | 'hardware'
  | 'laundromat'
  | 'police'
  | 'firestation'
  | 'gasstation'
  | 'airport'
  | 'museum'
  | 'petshop'
  | 'jewelry'
  | 'trainstation'
  | 'busstop';

function renderPlaceBuilding(config: {
  roofColor: string;
  awningColor1: string;
  awningColor2: string;
  wallColor: string;
  doorColor: string;
  windowType: WindowPlaceType;
}) {
  const { roofColor, awningColor1, awningColor2, wallColor, doorColor, windowType } = config;
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
      <defs>
        <linearGradient id={`wall-${windowType}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={wallColor} />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>

      {/* Sidewalk / Ground */}
      <rect x="6" y="102" width="108" height="10" rx="4" fill="#94a3b8" />
      <rect x="10" y="100" width="100" height="4" rx="2" fill="#cbd5e1" />

      {/* Main Building Facade */}
      <rect x="14" y="28" width="92" height="74" rx="3" fill={`url(#wall-${windowType})`} stroke="#475569" strokeWidth="2" />

      {/* Classical Pillars for Library / Museum / Bank */}
      {(windowType === 'library' || windowType === 'museum' || windowType === 'bank') && (
        <g>
          <rect x="16" y="42" width="6" height="58" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
          <rect x="98" y="42" width="6" height="58" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
        </g>
      )}

      {/* Roof / Cornice */}
      <path d="M 10 28 L 18 14 L 102 14 L 110 28 Z" fill={roofColor} stroke="#334155" strokeWidth="2" strokeLinejoin="round" />

      {/* Roof Emblem for specific places (NO English text spoilers!) */}
      {(windowType === 'hospital' || windowType === 'pharmacy') && (
        <g transform="translate(50, 5)">
          <rect x="0" y="0" width="20" height="20" rx="4" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
          <rect x="8" y="3" width="4" height="14" fill={windowType === 'pharmacy' ? '#10b981' : '#ef4444'} />
          <rect x="3" y="8" width="14" height="4" fill={windowType === 'pharmacy' ? '#10b981' : '#ef4444'} />
        </g>
      )}
      {windowType === 'school' && (
        <g transform="translate(52, 4)">
          <polygon points="8,0 16,8 0,8" fill="#dc2626" />
          <rect x="2" y="8" width="12" height="10" fill="#fef3c7" stroke="#475569" strokeWidth="1.2" />
          <circle cx="8" cy="13" r="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1" />
        </g>
      )}
      {windowType === 'bank' && (
        <g transform="translate(48, 4)">
          <circle cx="12" cy="11" r="9" fill="#fbbf24" stroke="#92400e" strokeWidth="1.5" />
          <text x="12" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#78350f">$</text>
        </g>
      )}
      {windowType === 'police' && (
        <g transform="translate(51, 4)">
          <path d="M 9 1 L 17 4 L 15 14 L 9 19 L 3 14 L 1 4 Z" fill="#1d4ed8" stroke="#fef08a" strokeWidth="1.5" />
          <circle cx="9" cy="9" r="3" fill="#fef08a" />
        </g>
      )}
      {windowType === 'firestation' && (
        <g transform="translate(52, 4)">
          <circle cx="8" cy="10" r="8" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
          <path d="M 8 4 C 11 8, 12 11, 8 15 C 4 11, 5 8, 8 4 Z" fill="#fde047" />
        </g>
      )}
      {windowType === 'hotel' && (
        <g transform="translate(45, 5)">
          <rect x="0" y="2" width="30" height="14" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.2" />
          <circle cx="7" cy="9" r="2" fill="#fbbf24" />
          <circle cx="15" cy="9" r="2" fill="#fbbf24" />
          <circle cx="23" cy="9" r="2" fill="#fbbf24" />
        </g>
      )}

      {/* Striped Shop Awning */}
      <g>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M ${14 + i * 15.3} 28 L ${14 + (i + 1) * 15.3} 28 L ${14 + (i + 1) * 15.3} 42 Q ${14 + (i + 0.5) * 15.3} 47 ${14 + i * 15.3} 42 Z`}
            fill={i % 2 === 0 ? awningColor1 : awningColor2}
            stroke="#334155"
            strokeWidth="1.2"
          />
        ))}
      </g>

      {/* Shop Entrance Door (Left side) */}
      <rect x="20" y="52" width="24" height="50" rx="2" fill={doorColor} stroke="#334155" strokeWidth="2" />
      <rect x="24" y="56" width="16" height="22" rx="1.5" fill="url(#glassGrad)" stroke="#475569" strokeWidth="1.2" />
      <circle cx="40" cy="80" r="2" fill="#fbbf24" />

      {/* Large Shop Display Vitrine Window (Right side) */}
      <rect x="50" y="50" width="50" height="40" rx="3" fill="url(#glassGrad)" stroke="#334155" strokeWidth="2" />
      <line x1="50" y1="66" x2="100" y2="66" stroke="#64748b" strokeWidth="1.5" />
      <line x1="50" y1="80" x2="100" y2="80" stroke="#64748b" strokeWidth="1.5" />

      {/* Interior Display Items inside the Shop Window */}
      {(windowType === 'bookstore' || windowType === 'library') && (
        <g>
          <rect x="55" y="55" width="5" height="11" fill="#ef4444" stroke="#7f1d1d" strokeWidth="0.8" />
          <rect x="61" y="54" width="6" height="12" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="0.8" />
          <rect x="68" y="56" width="5" height="10" fill="#10b981" stroke="#064e3b" strokeWidth="0.8" />
          <rect x="74" y="53" width="6" height="13" fill="#f59e0b" stroke="#78350f" strokeWidth="0.8" />
          <rect x="82" y="55" width="5" height="11" fill="#8b5cf6" stroke="#4c1d95" strokeWidth="0.8" />
          <rect x="88" y="54" width="6" height="12" fill="#ec4899" stroke="#831843" strokeWidth="0.8" />
          <path d="M 58 78 L 58 69 Q 65 67 72 69 L 72 78 Q 65 76 58 78 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          <line x1="65" y1="68" x2="65" y2="77" stroke="#334155" strokeWidth="1.2" />
          <rect x="78" y="69" width="5" height="11" fill="#06b6d4" />
          <rect x="84" y="68" width="6" height="12" fill="#f97316" />
          <rect x="91" y="70" width="5" height="10" fill="#6366f1" />
        </g>
      )}

      {windowType === 'bakery' && (
        <g>
          <ellipse cx="62" cy="62" rx="8" ry="4" fill="#d97706" stroke="#78350f" strokeWidth="1" />
          <line x1="59" y1="59" x2="61" y2="63" stroke="#fef3c7" strokeWidth="1.2" />
          <line x1="63" y1="59" x2="65" y2="63" stroke="#fef3c7" strokeWidth="1.2" />
          <ellipse cx="80" cy="62" rx="7" ry="4" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
          <ellipse cx="93" cy="62" rx="5" ry="3.5" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          <rect x="56" y="72" width="14" height="8" rx="2" fill="#fde68a" stroke="#92400e" strokeWidth="1" />
          <path d="M 56 74 Q 63 77 70 74" stroke="#ef4444" strokeWidth="1.5" fill="none" />
          <circle cx="63" cy="70" r="2" fill="#ef4444" />
          <path d="M 76 78 Q 84 68 94 78" stroke="#d97706" strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>
      )}

      {(windowType === 'pharmacy' || windowType === 'hospital') && (
        <g>
          <rect x="56" y="55" width="7" height="10" rx="1" fill="#ffffff" stroke="#059669" strokeWidth="1.2" />
          <rect x="58" y="58" width="3" height="4" fill="#10b981" />
          <rect x="68" y="54" width="8" height="11" rx="1" fill="#ecfdf5" stroke="#059669" strokeWidth="1.2" />
          <rect x="82" y="56" width="10" height="9" rx="2" fill="#3b82f6" />
          <rect x="58" y="69" width="9" height="10" rx="2" fill="#f43f5e" />
          <rect x="72" y="70" width="9" height="9" rx="2" fill="#10b981" />
          <rect x="85" y="69" width="8" height="10" rx="2" fill="#f59e0b" />
        </g>
      )}

      {windowType === 'supermarket' && (
        <g>
          <circle cx="58" cy="61" r="4" fill="#ef4444" />
          <circle cx="66" cy="61" r="4" fill="#22c55e" />
          <circle cx="74" cy="61" r="4" fill="#eab308" />
          <rect x="82" y="55" width="6" height="10" fill="#3b82f6" />
          <rect x="90" y="55" width="6" height="10" fill="#f97316" />
          <path d="M 60 70 L 64 70 L 67 82 L 84 82 L 87 73 L 65 73" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="69" cy="86" r="2.5" fill="#1e293b" />
          <circle cx="82" cy="86" r="2.5" fill="#1e293b" />
        </g>
      )}

      {windowType === 'butcher' && (
        <g>
          <ellipse cx="64" cy="60" rx="8" ry="5" fill="#e11d48" stroke="#881337" strokeWidth="1.2" />
          <circle cx="67" cy="60" r="2" fill="#ffe4e6" />
          <ellipse cx="85" cy="60" rx="8" ry="5" fill="#be123c" stroke="#881337" strokeWidth="1.2" />
          <path d="M 60 74 Q 75 69 90 74" stroke="#e11d48" strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>
      )}

      {windowType === 'florist' && (
        <g>
          <rect x="57" y="60" width="6" height="6" fill="#d97706" />
          <circle cx="60" cy="56" r="4" fill="#ec4899" />
          <rect x="72" y="60" width="6" height="6" fill="#d97706" />
          <circle cx="75" cy="56" r="4" fill="#eab308" />
          <rect x="87" y="60" width="6" height="6" fill="#d97706" />
          <circle cx="90" cy="56" r="4" fill="#a855f7" />
          <circle cx="65" cy="74" r="5" fill="#f43f5e" />
          <circle cx="82" cy="74" r="5" fill="#22c55e" />
        </g>
      )}

      {windowType === 'clothing' && (
        <g>
          <path d="M 56 56 L 62 53 L 68 56 L 66 65 L 58 65 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
          <path d="M 76 56 L 82 53 L 88 56 L 86 65 L 78 65 Z" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
          <path d="M 65 70 L 75 70 L 78 80 L 62 80 Z" fill="#10b981" stroke="#047857" strokeWidth="1" />
        </g>
      )}

      {windowType === 'shoestore' && (
        <g>
          <path d="M 55 62 L 63 62 L 67 65 L 55 65 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="1.2" />
          <path d="M 75 62 L 83 62 L 87 65 L 75 65 Z" fill="#2563eb" stroke="#1e40af" strokeWidth="1.2" />
          <path d="M 65 76 L 75 76 L 79 79 L 65 79 Z" fill="#f59e0b" stroke="#92400e" strokeWidth="1.2" />
        </g>
      )}

      {(windowType === 'restaurant' || windowType === 'cafe') && (
        <g>
          <circle cx="75" cy="55" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
          <path d="M 62 76 L 88 76 L 84 86 L 66 86 Z" fill="#ffffff" stroke="#475569" strokeWidth="1.2" />
          <path d="M 70 72 Q 75 66 80 72 Z" fill="#94a3b8" />
        </g>
      )}

      {windowType === 'barber' && (
        <g>
          {/* Classic Barber Pole */}
          <rect x="44" y="54" width="6" height="32" rx="3" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          <line x1="44" y1="60" x2="50" y2="66" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="44" y1="68" x2="50" y2="74" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="44" y1="76" x2="50" y2="82" stroke="#ef4444" strokeWidth="2.5" />
          {/* Scissors & Chair in window */}
          <circle cx="68" cy="60" r="3" fill="none" stroke="#334155" strokeWidth="1.5" />
          <circle cx="76" cy="60" r="3" fill="none" stroke="#334155" strokeWidth="1.5" />
          <line x1="70" y1="58" x2="82" y2="52" stroke="#334155" strokeWidth="1.5" />
          <line x1="74" y1="58" x2="62" y2="52" stroke="#334155" strokeWidth="1.5" />
        </g>
      )}

      {windowType === 'petshop' && (
        <g>
          {/* Paw print & bone & fishbowl in window */}
          <circle cx="65" cy="60" r="3.5" fill="#d97706" />
          <circle cx="61" cy="55" r="1.5" fill="#d97706" />
          <circle cx="65" cy="54" r="1.5" fill="#d97706" />
          <circle cx="69" cy="55" r="1.5" fill="#d97706" />
          <circle cx="85" cy="60" r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
          <ellipse cx="85" cy="60" rx="2.5" ry="1.5" fill="#f97316" />
        </g>
      )}

      {windowType === 'toystore' && (
        <g>
          <circle cx="63" cy="59" r="5" fill="#ef4444" />
          <rect x="74" y="55" width="8" height="8" fill="#eab308" stroke="#a16207" strokeWidth="1" />
          <polygon points="88,54 93,63 83,63" fill="#3b82f6" />
          <circle cx="68" cy="74" r="5" fill="#a855f7" />
          <circle cx="82" cy="74" r="5" fill="#22c55e" />
        </g>
      )}

      {windowType === 'jewelry' && (
        <g>
          <polygon points="65,54 71,59 65,65 59,59" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
          <circle cx="84" cy="60" r="5" fill="none" stroke="#eab308" strokeWidth="2.5" />
          <polygon points="84,52 87,55 81,55" fill="#38bdf8" />
        </g>
      )}

      {windowType === 'hardware' && (
        <g>
          <rect x="60" y="55" width="3" height="10" fill="#78350f" />
          <rect x="56" y="53" width="11" height="4" rx="1" fill="#475569" />
          <path d="M 78 55 L 88 65" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <rect x="62" y="70" width="24" height="9" rx="1.5" fill="#dc2626" />
        </g>
      )}

      {windowType === 'laundromat' && (
        <g>
          <rect x="56" y="68" width="16" height="18" rx="2" fill="#ffffff" stroke="#475569" strokeWidth="1.5" />
          <circle cx="64" cy="77" r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
          <rect x="76" y="68" width="16" height="18" rx="2" fill="#ffffff" stroke="#475569" strokeWidth="1.5" />
          <circle cx="84" cy="77" r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
        </g>
      )}

      {windowType === 'gym' && (
        <g>
          <line x1="58" y1="60" x2="90" y2="60" stroke="#334155" strokeWidth="2.5" />
          <rect x="56" y="55" width="4" height="10" rx="1" fill="#1e293b" />
          <rect x="88" y="55" width="4" height="10" rx="1" fill="#1e293b" />
          <circle cx="74" cy="74" r="5" fill="#ef4444" />
        </g>
      )}

      {windowType === 'cinema' && (
        <g>
          <rect x="56" y="54" width="38" height="22" rx="2" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.5" />
          <polygon points="71,60 71,70 81,65" fill="#fbbf24" />
        </g>
      )}

      {windowType === 'postoffice' && (
        <g>
          <rect x="58" y="55" width="18" height="11" rx="1" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <polyline points="58,55 67,61 76,55" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="64" y="70" width="22" height="10" rx="1" fill="#d97706" stroke="#78350f" strokeWidth="1.2" />
        </g>
      )}
    </svg>
  );
}

// Helper for full-body four-legged animals
function renderQuadrupedAnimal(config: {
  bodyColor: string;
  secondaryColor: string;
  strokeColor: string;
  earType: 'floppy' | 'pointed' | 'round' | 'long' | 'horns';
  snoutColor: string;
  stripes?: 'tiger' | 'zebra' | 'spots' | 'cow' | 'none';
  tailType?: 'long' | 'fluffy' | 'curly' | 'tuft' | 'short';
  longNeck?: boolean;
  trunk?: boolean;
}) {
  const {
    bodyColor,
    secondaryColor,
    strokeColor,
    earType,
    snoutColor,
    stripes = 'none',
    tailType = 'long',
    longNeck = false,
    trunk = false,
  } = config;
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
      <ellipse cx="60" cy="105" rx="38" ry="6" fill="#cbd5e1" opacity="0.5" />

      {/* Tail */}
      {tailType === 'long' && (
        <path d="M 24 62 Q 10 48 16 34" fill="none" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
      )}
      {tailType === 'fluffy' && (
        <ellipse cx="18" cy="58" rx="10" ry="6" transform="rotate(-30 18 58)" fill={bodyColor} stroke={strokeColor} strokeWidth="1.8" />
      )}
      {tailType === 'short' && (
        <circle cx="22" cy="60" r="6" fill="#ffffff" stroke={strokeColor} strokeWidth="1.5" />
      )}
      {tailType === 'curly' && (
        <path d="M 22 60 Q 12 54 16 48 Q 20 44 18 52" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
      )}
      {tailType === 'tuft' && (
        <g>
          <path d="M 22 62 Q 12 52 14 40" fill="none" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
          <circle cx="14" cy="38" r="4" fill={strokeColor} />
        </g>
      )}

      {/* 4 Full-Body Standing Legs */}
      <rect x="28" y="70" width="8" height="31" rx="4" fill={secondaryColor} stroke={strokeColor} strokeWidth="1.2" />
      <rect x="38" y="72" width="8" height="31" rx="4" fill={bodyColor} stroke={strokeColor} strokeWidth="1.2" />
      <rect x="66" y="70" width="8" height="31" rx="4" fill={secondaryColor} stroke={strokeColor} strokeWidth="1.2" />
      <rect x="76" y="72" width="8" height="31" rx="4" fill={bodyColor} stroke={strokeColor} strokeWidth="1.2" />

      {/* Full Torso */}
      <ellipse cx="54" cy="66" rx="28" ry="16" fill={bodyColor} stroke={strokeColor} strokeWidth="2" />

      {/* Patterns on Torso */}
      {stripes === 'tiger' && (
        <path d="M 40 52 L 42 66 M 50 50 L 52 66 M 60 51 L 61 65 M 69 54 L 68 65" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
      )}
      {stripes === 'zebra' && (
        <path d="M 38 52 L 40 74 M 48 50 L 50 76 M 58 50 L 60 76 M 68 52 L 68 74" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
      )}
      {stripes === 'spots' && (
        <g fill={strokeColor} opacity="0.75">
          <circle cx="42" cy="60" r="3.5" />
          <circle cx="54" cy="57" r="4" />
          <circle cx="64" cy="63" r="3.5" />
          <circle cx="48" cy="69" r="3" />
        </g>
      )}
      {stripes === 'cow' && (
        <g fill="#1e293b">
          <ellipse cx="44" cy="60" rx="8" ry="5" />
          <ellipse cx="64" cy="66" rx="7" ry="6" />
        </g>
      )}

      {/* Neck */}
      {longNeck ? (
        <path d="M 70 60 L 82 18 L 92 22 L 80 66 Z" fill={bodyColor} stroke={strokeColor} strokeWidth="1.8" />
      ) : (
        <path d="M 68 58 L 78 38 L 92 44 L 82 66 Z" fill={bodyColor} />
      )}

      {/* Ears / Horns */}
      {earType === 'pointed' && (
        <g>
          <polygon points="75,32 77,16 86,28" fill={bodyColor} stroke={strokeColor} strokeWidth="1.8" />
          <polygon points="86,28 96,16 96,32" fill={bodyColor} stroke={strokeColor} strokeWidth="1.8" />
        </g>
      )}
      {earType === 'round' && (
        <g>
          <circle cx="76" cy="26" r="6" fill={secondaryColor} stroke={strokeColor} strokeWidth="1.8" />
          <circle cx="94" cy="26" r="6" fill={secondaryColor} stroke={strokeColor} strokeWidth="1.8" />
        </g>
      )}
      {earType === 'long' && (
        <g>
          <ellipse cx="79" cy="18" rx="4" ry="13" transform="rotate(-10 79 18)" fill={bodyColor} stroke={strokeColor} strokeWidth="1.8" />
          <ellipse cx="90" cy="18" rx="4" ry="13" transform="rotate(8 90 18)" fill={bodyColor} stroke={strokeColor} strokeWidth="1.8" />
        </g>
      )}
      {earType === 'horns' && (
        <g>
          <path d="M 76 28 Q 70 16 78 14" fill="none" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 92 28 Q 98 16 90 14" fill="none" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      )}

      {/* Head */}
      <circle cx={longNeck ? 88 : 86} cy={longNeck ? 22 : 38} r={longNeck ? 10 : 13} fill={bodyColor} stroke={strokeColor} strokeWidth="2" />

      {earType === 'floppy' && (
        <ellipse cx="77" cy="40" rx="6" ry="11" transform="rotate(14 77 40)" fill={strokeColor} />
      )}

      {/* Snout or Trunk */}
      {trunk ? (
        <path d="M 96 40 Q 110 44 106 66 Q 104 72 99 68" fill="none" stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />
      ) : (
        <g>
          <ellipse cx={longNeck ? 97 : 98} cy={longNeck ? 24 : 41} rx="8" ry="5.5" fill={snoutColor} stroke={strokeColor} strokeWidth="1.5" />
          <circle cx={longNeck ? 102 : 103} cy={longNeck ? 23 : 39} r="2.2" fill="#1e293b" />
        </g>
      )}

      {/* Eye */}
      <circle cx={longNeck ? 90 : 89} cy={longNeck ? 20 : 35} r="2.2" fill="#1e293b" />
    </svg>
  );
}

export const VocabIllustration: React.FC<VocabIllustrationProps> = ({ word, emoji }) => {
  const key = norm(word);

  // ============================================================================
  // 1. FURNITURE & HOME OBJECTS (Table, Pillow, Chair, Bed, Sofa, Wardrobe, etc.)
  // ============================================================================
  if (key === 'table' || key === 'diningtable' || key === 'desk') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="102" rx="46" ry="7" fill="#cbd5e1" opacity="0.6" />
        <rect x="26" y="54" width="7" height="42" rx="2" fill="#78350f" />
        <rect x="87" y="54" width="7" height="42" rx="2" fill="#78350f" />
        <rect x="18" y="58" width="8" height="46" rx="2.5" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
        <rect x="94" y="58" width="8" height="46" rx="2.5" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
        <rect x="18" y="52" width="84" height="8" fill="#b45309" stroke="#451a03" strokeWidth="1.5" />
        <polygon points="8,52 24,34 96,34 112,52" fill="#d97706" stroke="#451a03" strokeWidth="2" strokeLinejoin="round" />
        <rect x="8" y="52" width="104" height="5" rx="1.5" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
        <line x1="28" y1="41" x2="92" y2="41" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="47" x2="100" y2="47" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (key === 'pillow' || key === 'cushion') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <defs>
          <radialGradient id="pillowGrad" cx="45%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </radialGradient>
        </defs>
        <ellipse cx="60" cy="94" rx="44" ry="8" fill="#94a3b8" opacity="0.35" />
        <path
          d="M 18 36 Q 60 42 102 36 Q 96 62 102 86 Q 60 80 18 86 Q 24 62 18 36 Z"
          fill="url(#pillowGrad)"
          stroke="#64748b"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M 26 43 Q 60 48 94 43 Q 90 62 94 79 Q 60 74 26 79 Q 30 62 26 43 Z"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path d="M 42 54 Q 60 60 78 54" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M 46 66 Q 60 62 74 66" fill="none" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (key === 'chair' || key === 'armchair') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="106" rx="34" ry="6" fill="#cbd5e1" opacity="0.5" />
        <rect x="34" y="16" width="7" height="52" rx="2" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
        <rect x="79" y="16" width="7" height="52" rx="2" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
        <rect x="34" y="20" width="52" height="9" rx="2" fill="#d97706" stroke="#451a03" strokeWidth="1.5" />
        <rect x="38" y="35" width="44" height="7" rx="1.5" fill="#b45309" stroke="#451a03" strokeWidth="1.2" />
        <rect x="34" y="66" width="7" height="36" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
        <rect x="79" y="66" width="7" height="36" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
        <rect x="28" y="70" width="7" height="36" rx="2" fill="#b45309" stroke="#451a03" strokeWidth="1.5" />
        <rect x="85" y="70" width="7" height="36" rx="2" fill="#b45309" stroke="#451a03" strokeWidth="1.5" />
        <polygon points="26,68 36,56 84,56 94,68" fill="#f59e0b" stroke="#451a03" strokeWidth="2" strokeLinejoin="round" />
        <rect x="26" y="68" width="68" height="6" rx="2" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
      </svg>
    );
  }

  if (key === 'sofa' || key === 'couch') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="100" rx="48" ry="6" fill="#cbd5e1" opacity="0.5" />
        <rect x="18" y="88" width="6" height="10" rx="2" fill="#451a03" />
        <rect x="96" y="88" width="6" height="10" rx="2" fill="#451a03" />
        {/* Sofa Backrest */}
        <rect x="18" y="36" width="84" height="38" rx="10" fill="#2563eb" stroke="#1e3a8a" strokeWidth="2" />
        {/* Sofa Cushions */}
        <rect x="20" y="64" width="40" height="18" rx="5" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="1.8" />
        <rect x="60" y="64" width="40" height="18" rx="5" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="1.8" />
        {/* Armrests */}
        <rect x="10" y="52" width="14" height="36" rx="6" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="2" />
        <rect x="96" y="52" width="14" height="36" rx="6" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="2" />
        <rect x="16" y="80" width="88" height="10" rx="3" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1.8" />
      </svg>
    );
  }

  if (key === 'bed') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="102" rx="48" ry="6" fill="#cbd5e1" opacity="0.5" />
        {/* Headboard */}
        <rect x="14" y="28" width="10" height="68" rx="3" fill="#78350f" stroke="#451a03" strokeWidth="2" />
        {/* Footboard */}
        <rect x="98" y="54" width="8" height="42" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="2" />
        {/* Mattress */}
        <rect x="24" y="58" width="74" height="22" rx="3" fill="#ffffff" stroke="#64748b" strokeWidth="1.8" />
        {/* Blanket / Duvet */}
        <path d="M 46 58 L 96 58 Q 98 58 98 62 L 98 80 L 46 80 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.8" />
        {/* Pillow on Bed */}
        <rect x="27" y="50" width="18" height="9" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
        {/* Wooden Bed Frame */}
        <rect x="20" y="78" width="82" height="10" fill="#b45309" stroke="#451a03" strokeWidth="1.8" />
      </svg>
    );
  }

  if (key === 'wardrobe' || key === 'closet') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="106" rx="36" ry="5" fill="#cbd5e1" opacity="0.5" />
        <rect x="26" y="16" width="68" height="86" rx="3" fill="#b45309" stroke="#451a03" strokeWidth="2" />
        <rect x="30" y="20" width="29" height="62" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
        <rect x="61" y="20" width="29" height="62" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="55" cy="52" r="2.2" fill="#fef08a" />
        <circle cx="65" cy="52" r="2.2" fill="#fef08a" />
        <rect x="30" y="85" width="60" height="12" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
      </svg>
    );
  }

  if (key === 'bookshelf' || key === 'bookcase') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <rect x="24" y="16" width="72" height="88" rx="3" fill="#92400e" stroke="#451a03" strokeWidth="2" />
        <rect x="29" y="22" width="62" height="22" fill="#78350f" />
        <rect x="29" y="49" width="62" height="22" fill="#78350f" />
        <rect x="29" y="76" width="62" height="22" fill="#78350f" />
        {/* Books on shelves */}
        <rect x="33" y="26" width="6" height="18" fill="#ef4444" />
        <rect x="40" y="28" width="6" height="16" fill="#3b82f6" />
        <rect x="47" y="25" width="7" height="19" fill="#10b981" />
        <rect x="55" y="27" width="6" height="17" fill="#eab308" />
        <rect x="35" y="53" width="7" height="18" fill="#a855f7" />
        <rect x="43" y="55" width="6" height="16" fill="#f97316" />
        <rect x="50" y="52" width="7" height="19" fill="#06b6d4" />
      </svg>
    );
  }

  if (key === 'rug' || key === 'carpet') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <polygon points="22,42 98,42 110,86 10,86" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2" strokeLinejoin="round" />
        <polygon points="30,48 90,48 98,78 22,78" fill="#fef08a" stroke="#991b1b" strokeWidth="1.5" />
        <polygon points="60,54 78,63 60,72 42,63" fill="#1d4ed8" />
      </svg>
    );
  }

  if (key === 'curtain' || key === 'curtains') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <rect x="24" y="24" width="72" height="68" fill="#bae6fd" stroke="#475569" strokeWidth="2" />
        <line x1="16" y1="22" x2="104" y2="22" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
        <path d="M 20 22 L 52 22 Q 48 56 36 74 L 22 96 L 18 96 Z" fill="#e11d48" stroke="#881337" strokeWidth="1.8" />
        <path d="M 100 22 L 68 22 Q 72 56 84 74 L 98 96 L 102 96 Z" fill="#e11d48" stroke="#881337" strokeWidth="1.8" />
      </svg>
    );
  }

  if (key === 'fridge' || key === 'refrigerator') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <rect x="32" y="14" width="56" height="92" rx="5" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
        <line x1="32" y1="46" x2="88" y2="46" stroke="#475569" strokeWidth="2" />
        <rect x="38" y="24" width="4" height="16" rx="2" fill="#94a3b8" />
        <rect x="38" y="54" width="4" height="26" rx="2" fill="#94a3b8" />
      </svg>
    );
  }

  if (key === 'microwave') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <rect x="16" y="34" width="88" height="54" rx="5" fill="#f1f5f9" stroke="#334155" strokeWidth="2.2" />
        <rect x="24" y="42" width="54" height="38" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        <rect x="84" y="42" width="14" height="10" rx="1" fill="#10b981" />
        <circle cx="91" cy="62" r="3" fill="#64748b" />
        <circle cx="91" cy="72" r="3" fill="#64748b" />
      </svg>
    );
  }

  if (key === 'stove' || key === 'oven') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <rect x="24" y="22" width="72" height="80" rx="4" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
        <rect x="24" y="22" width="72" height="16" rx="2" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
        <circle cx="38" cy="30" r="3" fill="#1e293b" />
        <circle cx="52" cy="30" r="3" fill="#1e293b" />
        <circle cx="68" cy="30" r="3" fill="#1e293b" />
        <circle cx="82" cy="30" r="3" fill="#1e293b" />
        <rect x="32" y="46" width="56" height="44" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.8" />
        <rect x="38" y="54" width="44" height="28" rx="2" fill="#f97316" opacity="0.7" />
      </svg>
    );
  }

  if (key === 'washingmachine' || key === 'washer') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <rect x="26" y="18" width="68" height="84" rx="5" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
        <line x1="26" y1="36" x2="94" y2="36" stroke="#64748b" strokeWidth="1.8" />
        <circle cx="78" cy="27" r="4" fill="#3b82f6" />
        <circle cx="60" cy="68" r="22" fill="#bae6fd" stroke="#475569" strokeWidth="4" />
        <path d="M 42 68 Q 51 62 60 68 T 78 68" fill="none" stroke="#0284c7" strokeWidth="2.5" />
      </svg>
    );
  }

  // ============================================================================
  // 2. CITY PLACES & SHOPS (Storefront Facades without English text spoilers)
  // ============================================================================
  if (key === 'bookstore' || key === 'bookshop') {
    return renderPlaceBuilding({
      roofColor: '#1e3a8a',
      awningColor1: '#2563eb',
      awningColor2: '#ffffff',
      wallColor: '#fef3c7',
      doorColor: '#78350f',
      windowType: 'bookstore',
    });
  }
  if (key === 'library') {
    return renderPlaceBuilding({
      roofColor: '#312e81',
      awningColor1: '#4f46e5',
      awningColor2: '#e0e7ff',
      wallColor: '#f1f5f9',
      doorColor: '#451a03',
      windowType: 'library',
    });
  }
  if (key === 'bakery' || key === 'bakeshop') {
    return renderPlaceBuilding({
      roofColor: '#9a3412',
      awningColor1: '#ea580c',
      awningColor2: '#fffbeb',
      wallColor: '#ffedd5',
      doorColor: '#7c2d12',
      windowType: 'bakery',
    });
  }
  if (key === 'pharmacy' || key === 'drugstore') {
    return renderPlaceBuilding({
      roofColor: '#065f46',
      awningColor1: '#10b981',
      awningColor2: '#ffffff',
      wallColor: '#f8fafc',
      doorColor: '#047857',
      windowType: 'pharmacy',
    });
  }
  if (key === 'hospital' || key === 'clinic') {
    return renderPlaceBuilding({
      roofColor: '#991b1b',
      awningColor1: '#ef4444',
      awningColor2: '#ffffff',
      wallColor: '#ffffff',
      doorColor: '#0284c7',
      windowType: 'hospital',
    });
  }
  if (key === 'supermarket' || key === 'grocery' || key === 'grocerystore' || key === 'market') {
    return renderPlaceBuilding({
      roofColor: '#15803d',
      awningColor1: '#22c55e',
      awningColor2: '#fef08a',
      wallColor: '#f1f5f9',
      doorColor: '#0284c7',
      windowType: 'supermarket',
    });
  }
  if (key === 'school' || key === 'university' || key === 'college') {
    return renderPlaceBuilding({
      roofColor: '#b91c1c',
      awningColor1: '#dc2626',
      awningColor2: '#fef3c7',
      wallColor: '#fde68a',
      doorColor: '#78350f',
      windowType: 'school',
    });
  }
  if (key === 'bank') {
    return renderPlaceBuilding({
      roofColor: '#334155',
      awningColor1: '#0f172a',
      awningColor2: '#cbd5e1',
      wallColor: '#e2e8f0',
      doorColor: '#1e293b',
      windowType: 'bank',
    });
  }
  if (key === 'hotel') {
    return renderPlaceBuilding({
      roofColor: '#78350f',
      awningColor1: '#d97706',
      awningColor2: '#fef3c7',
      wallColor: '#fef9c3',
      doorColor: '#451a03',
      windowType: 'hotel',
    });
  }
  if (key === 'butchershop' || key === 'butcher') {
    return renderPlaceBuilding({
      roofColor: '#881337',
      awningColor1: '#e11d48',
      awningColor2: '#ffffff',
      wallColor: '#ffe4e6',
      doorColor: '#4c0519',
      windowType: 'butcher',
    });
  }
  if (key === 'flowershop' || key === 'florist') {
    return renderPlaceBuilding({
      roofColor: '#831843',
      awningColor1: '#ec4899',
      awningColor2: '#fdf2f8',
      wallColor: '#fce7f3',
      doorColor: '#701a75',
      windowType: 'florist',
    });
  }
  if (key === 'clothingstore' || key === 'boutique') {
    return renderPlaceBuilding({
      roofColor: '#4c1d95',
      awningColor1: '#8b5cf6',
      awningColor2: '#ffffff',
      wallColor: '#f5f3ff',
      doorColor: '#3b0764',
      windowType: 'clothing',
    });
  }
  if (key === 'shoestore') {
    return renderPlaceBuilding({
      roofColor: '#1e40af',
      awningColor1: '#3b82f6',
      awningColor2: '#fef3c7',
      wallColor: '#eff6ff',
      doorColor: '#1e3a8a',
      windowType: 'shoestore',
    });
  }
  if (key === 'restaurant' || key === 'coffeeshop' || key === 'cafe') {
    return renderPlaceBuilding({
      roofColor: '#7f1d1d',
      awningColor1: '#dc2626',
      awningColor2: '#fef2f2',
      wallColor: '#fef3c7',
      doorColor: '#451a03',
      windowType: 'restaurant',
    });
  }
  if (key === 'barbershop' || key === 'hairsalon') {
    return renderPlaceBuilding({
      roofColor: '#1e3a8a',
      awningColor1: '#ef4444',
      awningColor2: '#2563eb',
      wallColor: '#f8fafc',
      doorColor: '#334155',
      windowType: 'barber',
    });
  }
  if (key === 'petshop') {
    return renderPlaceBuilding({
      roofColor: '#b45309',
      awningColor1: '#f59e0b',
      awningColor2: '#ffffff',
      wallColor: '#fef3c7',
      doorColor: '#0284c7',
      windowType: 'petshop',
    });
  }
  if (key === 'toystore') {
    return renderPlaceBuilding({
      roofColor: '#be123c',
      awningColor1: '#f43f5e',
      awningColor2: '#fde047',
      wallColor: '#fff1f2',
      doorColor: '#2563eb',
      windowType: 'toystore',
    });
  }
  if (key === 'jewelrystore') {
    return renderPlaceBuilding({
      roofColor: '#0f172a',
      awningColor1: '#0284c7',
      awningColor2: '#e0f2fe',
      wallColor: '#f8fafc',
      doorColor: '#1e293b',
      windowType: 'jewelry',
    });
  }
  if (key === 'hardwarestore') {
    return renderPlaceBuilding({
      roofColor: '#431407',
      awningColor1: '#ea580c',
      awningColor2: '#fed7aa',
      wallColor: '#e2e8f0',
      doorColor: '#334155',
      windowType: 'hardware',
    });
  }
  if (key === 'laundromat') {
    return renderPlaceBuilding({
      roofColor: '#0369a1',
      awningColor1: '#0ea5e9',
      awningColor2: '#ffffff',
      wallColor: '#f0f9ff',
      doorColor: '#0284c7',
      windowType: 'laundromat',
    });
  }
  if (key === 'gym') {
    return renderPlaceBuilding({
      roofColor: '#111827',
      awningColor1: '#4b5563',
      awningColor2: '#f97316',
      wallColor: '#e5e7eb',
      doorColor: '#1f2937',
      windowType: 'gym',
    });
  }
  if (key === 'cinema' || key === 'movietheater') {
    return renderPlaceBuilding({
      roofColor: '#4c0519',
      awningColor1: '#9f1239',
      awningColor2: '#fde047',
      wallColor: '#ffe4e6',
      doorColor: '#881337',
      windowType: 'cinema',
    });
  }
  if (key === 'postoffice') {
    return renderPlaceBuilding({
      roofColor: '#1e40af',
      awningColor1: '#2563eb',
      awningColor2: '#ffffff',
      wallColor: '#eff6ff',
      doorColor: '#1d4ed8',
      windowType: 'postoffice',
    });
  }
  if (key === 'policestation') {
    return renderPlaceBuilding({
      roofColor: '#1e3a8a',
      awningColor1: '#1d4ed8',
      awningColor2: '#dbeafe',
      wallColor: '#eff6ff',
      doorColor: '#1e40af',
      windowType: 'police',
    });
  }
  if (key === 'firestation') {
    return renderPlaceBuilding({
      roofColor: '#7f1d1d',
      awningColor1: '#dc2626',
      awningColor2: '#fef08a',
      wallColor: '#fee2e2',
      doorColor: '#991b1b',
      windowType: 'firestation',
    });
  }

  // ============================================================================
  // 3. REALISTIC FULL-BODY ANIMALS (NO cartoon faces-only, NO puppies/kittens)
  // ============================================================================
  if (key === 'dog') {
    return renderQuadrupedAnimal({
      bodyColor: '#f59e0b',
      secondaryColor: '#b45309',
      strokeColor: '#78350f',
      earType: 'floppy',
      snoutColor: '#fde68a',
      tailType: 'long',
    });
  }
  if (key === 'cat') {
    return renderQuadrupedAnimal({
      bodyColor: '#fb923c',
      secondaryColor: '#c2410c',
      strokeColor: '#7c2d12',
      earType: 'pointed',
      snoutColor: '#fed7aa',
      stripes: 'tiger',
      tailType: 'long',
    });
  }
  if (key === 'lion') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="105" rx="40" ry="6" fill="#cbd5e1" opacity="0.5" />
        <path d="M 22 64 Q 8 52 14 38" fill="none" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="14" cy="36" rx="5" ry="4" fill="#78350f" />
        <rect x="28" y="70" width="9" height="32" rx="4" fill="#b45309" />
        <rect x="39" y="72" width="9" height="32" rx="4" fill="#f59e0b" />
        <rect x="68" y="70" width="9" height="32" rx="4" fill="#b45309" />
        <rect x="79" y="72" width="9" height="32" rx="4" fill="#f59e0b" />
        <ellipse cx="55" cy="66" rx="28" ry="16" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
        <circle cx="84" cy="44" r="22" fill="#78350f" stroke="#451a03" strokeWidth="2" />
        <circle cx="84" cy="44" r="18" fill="#92400e" />
        <circle cx="86" cy="44" r="13" fill="#fbbf24" />
        <circle cx="82" cy="41" r="2" fill="#1e293b" />
        <circle cx="91" cy="41" r="2" fill="#1e293b" />
        <ellipse cx="87" cy="47" rx="6" ry="4.5" fill="#fde68a" />
        <polygon points="85,45 90,45 87.5,48" fill="#451a03" />
      </svg>
    );
  }
  if (key === 'tiger') {
    return renderQuadrupedAnimal({
      bodyColor: '#f97316',
      secondaryColor: '#c2410c',
      strokeColor: '#431407',
      earType: 'round',
      snoutColor: '#ffedd5',
      stripes: 'tiger',
      tailType: 'long',
    });
  }
  if (key === 'bear') {
    return renderQuadrupedAnimal({
      bodyColor: '#78350f',
      secondaryColor: '#451a03',
      strokeColor: '#270e02',
      earType: 'round',
      snoutColor: '#d97706',
      tailType: 'short',
    });
  }
  if (key === 'wolf') {
    return renderQuadrupedAnimal({
      bodyColor: '#64748b',
      secondaryColor: '#475569',
      strokeColor: '#1e293b',
      earType: 'pointed',
      snoutColor: '#cbd5e1',
      tailType: 'fluffy',
    });
  }
  if (key === 'fox') {
    return renderQuadrupedAnimal({
      bodyColor: '#ea580c',
      secondaryColor: '#9a3412',
      strokeColor: '#431407',
      earType: 'pointed',
      snoutColor: '#ffffff',
      tailType: 'fluffy',
    });
  }
  if (key === 'rabbit') {
    return renderQuadrupedAnimal({
      bodyColor: '#f8fafc',
      secondaryColor: '#e2e8f0',
      strokeColor: '#64748b',
      earType: 'long',
      snoutColor: '#fce7f3',
      tailType: 'short',
    });
  }
  if (key === 'mouse' || key === 'rat') {
    return renderQuadrupedAnimal({
      bodyColor: '#94a3b8',
      secondaryColor: '#64748b',
      strokeColor: '#334155',
      earType: 'round',
      snoutColor: '#fbcfe8',
      tailType: 'long',
    });
  }
  if (key === 'hamster' || key === 'guineapig') {
    return renderQuadrupedAnimal({
      bodyColor: '#fbbf24',
      secondaryColor: '#d97706',
      strokeColor: '#78350f',
      earType: 'round',
      snoutColor: '#fef3c7',
      tailType: 'short',
    });
  }
  if (key === 'pig') {
    return renderQuadrupedAnimal({
      bodyColor: '#f472b6',
      secondaryColor: '#db2777',
      strokeColor: '#831843',
      earType: 'pointed',
      snoutColor: '#fbcfe8',
      tailType: 'curly',
    });
  }
  if (key === 'cow') {
    return renderQuadrupedAnimal({
      bodyColor: '#ffffff',
      secondaryColor: '#cbd5e1',
      strokeColor: '#334155',
      earType: 'horns',
      snoutColor: '#fbcfe8',
      stripes: 'cow',
      tailType: 'tuft',
    });
  }
  if (key === 'horse') {
    return renderQuadrupedAnimal({
      bodyColor: '#92400e',
      secondaryColor: '#78350f',
      strokeColor: '#451a03',
      earType: 'pointed',
      snoutColor: '#b45309',
      tailType: 'fluffy',
    });
  }
  if (key === 'sheep') {
    return renderQuadrupedAnimal({
      bodyColor: '#f8fafc',
      secondaryColor: '#334155',
      strokeColor: '#475569',
      earType: 'floppy',
      snoutColor: '#cbd5e1',
      tailType: 'short',
    });
  }
  if (key === 'giraffe') {
    return renderQuadrupedAnimal({
      bodyColor: '#fbbf24',
      secondaryColor: '#d97706',
      strokeColor: '#78350f',
      earType: 'horns',
      snoutColor: '#fde68a',
      stripes: 'spots',
      tailType: 'tuft',
      longNeck: true,
    });
  }
  if (key === 'zebra') {
    return renderQuadrupedAnimal({
      bodyColor: '#ffffff',
      secondaryColor: '#cbd5e1',
      strokeColor: '#0f172a',
      earType: 'pointed',
      snoutColor: '#334155',
      stripes: 'zebra',
      tailType: 'tuft',
    });
  }
  if (key === 'elephant') {
    return renderQuadrupedAnimal({
      bodyColor: '#94a3b8',
      secondaryColor: '#64748b',
      strokeColor: '#334155',
      earType: 'floppy',
      snoutColor: '#94a3b8',
      tailType: 'tuft',
      trunk: true,
    });
  }
  if (key === 'deer') {
    return renderQuadrupedAnimal({
      bodyColor: '#b45309',
      secondaryColor: '#78350f',
      strokeColor: '#451a03',
      earType: 'horns',
      snoutColor: '#fde68a',
      stripes: 'spots',
      tailType: 'short',
    });
  }
  if (key === 'panda') {
    return renderQuadrupedAnimal({
      bodyColor: '#ffffff',
      secondaryColor: '#0f172a',
      strokeColor: '#0f172a',
      earType: 'round',
      snoutColor: '#e2e8f0',
      stripes: 'cow',
      tailType: 'short',
    });
  }
  if (key === 'koala') {
    return renderQuadrupedAnimal({
      bodyColor: '#94a3b8',
      secondaryColor: '#64748b',
      strokeColor: '#334155',
      earType: 'round',
      snoutColor: '#1e293b',
      tailType: 'short',
    });
  }
  if (key === 'monkey') {
    return renderQuadrupedAnimal({
      bodyColor: '#92400e',
      secondaryColor: '#78350f',
      strokeColor: '#451a03',
      earType: 'round',
      snoutColor: '#fde68a',
      tailType: 'long',
    });
  }
  if (key === 'bird' || key === 'parrot' || key === 'eagle') {
    const isParrot = key === 'parrot';
    const isEagle = key === 'eagle';
    const bodyCol = isParrot ? '#22c55e' : isEagle ? '#78350f' : '#0ea5e9';
    const wingCol = isParrot ? '#ef4444' : isEagle ? '#451a03' : '#0284c7';
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="105" rx="30" ry="5" fill="#cbd5e1" opacity="0.5" />
        {/* Branch / Perch */}
        <line x1="20" y1="92" x2="100" y2="92" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
        {/* Legs */}
        <line x1="54" y1="76" x2="54" y2="92" stroke="#f59e0b" strokeWidth="3" />
        <line x1="66" y1="76" x2="66" y2="92" stroke="#f59e0b" strokeWidth="3" />
        {/* Tail feathers */}
        <polygon points="36,68 16,84 26,88 42,74" fill={wingCol} />
        {/* Full Bird Body */}
        <ellipse cx="58" cy="60" rx="22" ry="18" transform="rotate(-15 58 60)" fill={bodyCol} stroke="#1e293b" strokeWidth="1.8" />
        {/* Folded Wing */}
        <ellipse cx="55" cy="62" rx="14" ry="9" transform="rotate(-10 55 62)" fill={wingCol} />
        {/* Head */}
        <circle cx="72" cy="40" r="13" fill={isEagle ? '#ffffff' : bodyCol} stroke="#1e293b" strokeWidth="1.8" />
        {/* Beak */}
        <polygon points="84,36 98,42 84,46" fill="#f59e0b" stroke="#b45309" strokeWidth="1.2" />
        {/* Eye */}
        <circle cx="75" cy="38" r="2.5" fill="#0f172a" />
      </svg>
    );
  }

  // ============================================================================
  // 4. REALISTIC 3D FRUITS & FOODS (Apple, Banana, Orange, Strawberry, etc.)
  // ============================================================================
  if (key === 'apple') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <defs>
          <radialGradient id="apple3d" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="45%" stopColor="#ef4444" />
            <stop offset="85%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </radialGradient>
        </defs>
        <ellipse cx="60" cy="105" rx="30" ry="6" fill="#cbd5e1" opacity="0.5" />
        <path d="M 60 32 Q 62 18 68 14" fill="none" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 62 24 Q 78 12 90 22 Q 76 34 62 24 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
        <path
          d="M 60 32 C 42 24, 20 38, 22 64 C 24 88, 42 102, 55 100 C 58 99, 62 99, 65 100 C 78 102, 96 88, 98 64 C 100 38, 78 24, 60 32 Z"
          fill="url(#apple3d)"
          stroke="#7f1d1d"
          strokeWidth="1.8"
        />
        <ellipse cx="40" cy="48" rx="6" ry="12" transform="rotate(-20 40 48)" fill="#ffffff" opacity="0.45" />
      </svg>
    );
  }

  if (key === 'papaya') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="104" rx="34" ry="6" fill="#cbd5e1" opacity="0.5" />
        {/* Cut Papaya Half showing orange flesh and black seeds */}
        <path d="M 28 24 Q 60 14 78 36 Q 100 66 86 92 Q 60 106 34 90 Q 16 68 28 24 Z" fill="#15803d" stroke="#14532d" strokeWidth="2" />
        <path d="M 33 28 Q 58 20 74 39 Q 93 65 81 88 Q 58 100 37 86 Q 22 66 33 28 Z" fill="#f97316" />
        <ellipse cx="57" cy="64" rx="14" ry="20" fill="#ea580c" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <circle key={i} cx={52 + (i % 2) * 10} cy={50 + i * 3.8} r="2.5" fill="#1e293b" />
        ))}
      </svg>
    );
  }

  if (key === 'plum' || key === 'apricot' || key === 'tangerine' || key === 'lime' || key === 'guava' || key === 'passionfruit' || key === 'pomegranate' || key === 'fig') {
    const colorMap: Record<string, { main: string; inner: string; stroke: string; seeds?: string }> = {
      plum: { main: '#7e22ce', inner: '#f59e0b', stroke: '#4c1d95' },
      apricot: { main: '#fb923c', inner: '#ea580c', stroke: '#9a3412' },
      tangerine: { main: '#f97316', inner: '#fdba74', stroke: '#c2410c' },
      lime: { main: '#22c55e', inner: '#86efac', stroke: '#15803d' },
      guava: { main: '#4ade80', inner: '#f43f5e', stroke: '#166534', seeds: '#fef08a' },
      passionfruit: { main: '#eab308', inner: '#f59e0b', stroke: '#854d0e', seeds: '#1e293b' },
      pomegranate: { main: '#dc2626', inner: '#fca5a5', stroke: '#7f1d1d', seeds: '#991b1b' },
      fig: { main: '#581c87', inner: '#e11d48', stroke: '#3b0764', seeds: '#fde047' },
    };
    const cfg = colorMap[key] || colorMap.plum;
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="104" rx="34" ry="6" fill="#cbd5e1" opacity="0.5" />
        {/* Stem & Leaf */}
        <path d="M 52 24 Q 54 14 60 12" fill="none" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 54 18 Q 68 10 76 18 Q 66 26 54 18 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.2" />
        {/* Whole Fruit */}
        <circle cx="48" cy="60" r="28" fill={cfg.main} stroke={cfg.stroke} strokeWidth="2" />
        <ellipse cx="38" cy="48" rx="5" ry="9" transform="rotate(-25 38 48)" fill="#ffffff" opacity="0.4" />
        {/* Cut Half slice in front */}
        <circle cx="76" cy="72" r="22" fill={cfg.main} stroke={cfg.stroke} strokeWidth="2" />
        <circle cx="76" cy="72" r="18" fill={cfg.inner} />
        {cfg.seeds && (
          <g fill={cfg.seeds}>
            <circle cx="72" cy="68" r="2" />
            <circle cx="80" cy="68" r="2" />
            <circle cx="76" cy="74" r="2" />
            <circle cx="71" cy="77" r="2" />
            <circle cx="81" cy="77" r="2" />
          </g>
        )}
      </svg>
    );
  }

  if (key === 'raspberry' || key === 'blackberry') {
    const isBlack = key === 'blackberry';
    const col = isBlack ? '#312e81' : '#e11d48';
    const stroke = isBlack ? '#0f172a' : '#881337';
    const drupelets = [
      [48, 44], [60, 44], [72, 44],
      [42, 56], [54, 56], [66, 56], [78, 56],
      [46, 68], [58, 68], [70, 68],
      [52, 80], [64, 80], [58, 90],
    ];
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="105" rx="28" ry="5" fill="#cbd5e1" opacity="0.5" />
        <path d="M 60 34 L 46 20 L 56 28 L 60 16 L 64 28 L 74 20 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
        {drupelets.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="9" fill={col} stroke={stroke} strokeWidth="1.5" />
        ))}
      </svg>
    );
  }

  if (key === 'dragonfruit') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="104" rx="32" ry="6" fill="#cbd5e1" opacity="0.5" />
        <ellipse cx="60" cy="62" rx="28" ry="34" fill="#ec4899" stroke="#9d174d" strokeWidth="2" />
        <ellipse cx="60" cy="64" rx="21" ry="26" fill="#f8fafc" />
        {[
          [54, 52], [66, 52], [60, 60], [50, 64], [70, 64], [55, 74], [65, 74], [60, 82],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.8" fill="#0f172a" />
        ))}
      </svg>
    );
  }

  if (key === 'starfruit') {
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="104" rx="30" ry="5" fill="#cbd5e1" opacity="0.5" />
        <polygon
          points="60,18 71,44 98,46 77,64 84,92 60,76 36,92 43,64 22,46 49,44"
          fill="#facc15"
          stroke="#a16207"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="56" r="3" fill="#78350f" />
      </svg>
    );
  }

  if (key === 'cabbage' || key === 'cauliflower' || key === 'zucchini' || key === 'beetroot' || key === 'radish' || key === 'turnip' || key === 'artichoke' || key === 'asparagus' || key === 'celery' || key === 'leek' || key === 'spinach') {
    const isWhite = key === 'cauliflower' || key === 'turnip';
    const isPurple = key === 'beetroot';
    const isRed = key === 'radish';
    const mainCol = isPurple ? '#86198f' : isRed ? '#e11d48' : isWhite ? '#f8fafc' : '#22c55e';
    const strokeCol = isPurple ? '#4a044e' : isRed ? '#881337' : isWhite ? '#64748b' : '#14532d';
    return (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm select-none">
        <ellipse cx="60" cy="104" rx="30" ry="5" fill="#cbd5e1" opacity="0.5" />
        {/* Green leafy top */}
        <path d="M 60 36 Q 44 14 36 26 Q 46 38 60 36 Z" fill="#16a34a" stroke="#14532d" strokeWidth="1.5" />
        <path d="M 60 36 Q 60 10 68 18 Q 66 32 60 36 Z" fill="#22c55e" stroke="#14532d" strokeWidth="1.5" />
        <path d="M 60 36 Q 78 14 84 26 Q 74 38 60 36 Z" fill="#16a34a" stroke="#14532d" strokeWidth="1.5" />
        {/* Vegetable Body */}
        <ellipse cx="60" cy="66" rx={key === 'zucchini' || key === 'leek' || key === 'celery' || key === 'asparagus' ? 14 : 28} ry="28" fill={mainCol} stroke={strokeCol} strokeWidth="2" />
        <path d="M 48 56 Q 60 64 72 56" fill="none" stroke={strokeCol} strokeWidth="1.5" opacity="0.5" />
      </svg>
    );
  }

  // High-definition 3D container for all other items
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-indigo-50/70 border border-slate-200/80 shadow-inner flex items-center justify-center select-none">
      <span className="text-5xl sm:text-6xl filter drop-shadow-md leading-none">
        {emoji || '✨'}
      </span>
    </div>
  );
};
