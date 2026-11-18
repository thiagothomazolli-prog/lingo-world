import React, { useState } from 'react';
import { Star, Lock, Check, Gift, Swords, ChevronRight, ArrowLeft, BookOpen, Play, Volume2 } from 'lucide-react';
import { Phase, UserProfile, DailyMission, DailyMissionsState } from '../types';
import { WORLDS_DATA } from '../data/courseData';
import { sfx } from '../utils/soundEffects';
import { speakText } from '../utils/storage';

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

interface ThemeMeta {
  id: string;
  title: string;
  emoji: string;
  description: string;
  gradient: string;
  badgeColor: string;
}

const THEMES_LIST: ThemeMeta[] = [
  {
    id: 'home',
    title: '1. A Casa (Home)',
    emoji: '🏠',
    description: 'Das palavras mais essenciais (door, window, room, floor, kitchen) às menos comuns (attic, basement, chimney, doorknob).',
    gradient: 'from-amber-500 to-orange-600',
    badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-200',
  },
  {
    id: 'food',
    title: '2. Comida (Food)',
    emoji: '🍎',
    description: 'Alimentos essenciais do dia a dia (bread, rice, beans, meat, milk, apple) até ingredientes específicos.',
    gradient: 'from-emerald-500 to-teal-600',
    badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-200',
  },
  {
    id: 'body',
    title: '3. Corpo Humano (Human Body)',
    emoji: '✋',
    description: 'Partes essenciais do corpo (head, hand, foot, eye, ear, mouth) até detalhes anatômicos específicos.',
    gradient: 'from-rose-500 to-pink-600',
    badgeColor: 'bg-rose-100 text-rose-900 dark:bg-rose-900/50 dark:text-rose-200',
  },
  {
    id: 'transport',
    title: '4. Transporte (Transport)',
    emoji: '🚗',
    description: 'Meios de transporte mais usados (car, bus, street, bicycle, train, airplane) até componentes específicos.',
    gradient: 'from-sky-500 to-indigo-600',
    badgeColor: 'bg-sky-100 text-sky-900 dark:bg-sky-900/50 dark:text-sky-200',
  },
  {
    id: 'clothes',
    title: '5. Roupas (Clothes)',
    emoji: '👕',
    description: 'Vestuário essencial (shirt, pants, shoes, dress, shorts, jacket) até acessórios e detalhes das peças.',
    gradient: 'from-purple-500 to-indigo-600',
    badgeColor: 'bg-purple-100 text-purple-900 dark:bg-purple-900/50 dark:text-purple-200',
  },
  {
    id: 'pronouns',
    title: '6. Pronomes (Pronouns)',
    emoji: '👩‍🏫',
    description: 'Pessoais, Tratamento, Possessivos, Demonstrativos, Reflexivos, Interrogativos, Indefinidos e Relativos com a voz humana da professora.',
    gradient: 'from-indigo-600 to-violet-700',
    badgeColor: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-200',
  },
];

export const MapView: React.FC<MapViewProps> = ({
  user,
  onSelectPhase,
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);
  const [unlockAllForTest, setUnlockAllForTest] = useState(true);
  const [showOtherWorlds, setShowOtherWorlds] = useState(false);

  const world0 = WORLDS_DATA.find((w) => w.id === 0);
  const world0Phases = world0?.phases || [];

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
    return false;
  };

  const selectedThemeMeta = THEMES_LIST.find((t) => t.id === selectedThemeId);
  const selectedThemeModules = world0Phases.filter((p) => p.themeId === selectedThemeId);

  // ============================================================================
  // TELA 2: LISTA DE MÓDULOS DE CADA TEMA (Separados por nível de frequência 1 a 4)
  // ============================================================================
  if (selectedThemeId && selectedThemeMeta) {
    return (
      <div className="space-y-4 pb-16">
        {/* Botão Voltar aos Temas */}
        <button
          type="button"
          onClick={() => {
            sfx.playTap();
            setSelectedThemeId(null);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-black text-xs sm:text-sm shadow-2xs active:scale-95 transition-transform cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Lista de Temas</span>
        </button>

        {/* Cabeçalho do Tema Selecionado */}
        <div className={`p-5 rounded-3xl text-white shadow-md bg-gradient-to-r ${selectedThemeMeta.gradient}`}>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{selectedThemeMeta.emoji}</span>
            <div>
              <span className="px-2.5 py-0.5 bg-black/25 text-white text-[11px] font-black rounded-lg uppercase tracking-wider">
                4 Módulos por Frequência de Uso • 12 Palavras por Módulo
              </span>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
                {selectedThemeMeta.title}
              </h1>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                {selectedThemeMeta.description}
              </p>
            </div>
          </div>
        </div>

        {/* Lista dos 4 Módulos do Tema */}
        <div className="space-y-4">
          {selectedThemeModules.map((mod, mIdx) => {
            const unlocked = isPhaseUnlocked(mod);
            const isCompleted = user.completedPhaseIds.includes(mod.id);
            const stars = user.starsByPhase[mod.id] || 0;
            const vocabList = mod.vocabItems || [];

            const freqColors = [
              'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-200 dark:border-emerald-700',
              'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/70 dark:text-sky-200 dark:border-sky-700',
              'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/70 dark:text-amber-200 dark:border-amber-700',
              'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950/70 dark:text-purple-200 dark:border-purple-700',
            ];

            return (
              <div
                key={mod.id}
                className={`p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800 border-2 transition-all shadow-xs ${
                  isCompleted
                    ? 'border-emerald-400 dark:border-emerald-600'
                    : unlocked
                    ? 'border-slate-200 dark:border-slate-700'
                    : 'border-slate-200 dark:border-slate-800 opacity-70'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black border ${
                      freqColors[mIdx % freqColors.length]
                    }`}
                  >
                    {mod.frequencyLevel || `Módulo ${mIdx + 1}`} • {vocabList.length} palavras
                  </span>

                  {isCompleted && (
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-full">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
                      <span className="text-xs font-black text-emerald-800 dark:text-emerald-300">Concluído</span>
                      <div className="flex items-center ml-1">
                        {[1, 2, 3].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= stars ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  {mod.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {mod.pedagogicalObjective}
                </p>

                {/* Chips das 12 palavras do módulo com toque para ouvir */}
                {vocabList.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/70">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-2">
                      Palavras deste módulo (toque para ouvir 🔊):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {vocabList.map((vItem, vIdx) => (
                        <button
                          key={vIdx}
                          type="button"
                          onClick={() => speakText(vItem.word, 'en-US', user.speechSpeed)}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-50 hover:bg-indigo-50 dark:bg-slate-700/70 dark:hover:bg-indigo-950/60 border border-slate-200 dark:border-slate-600 text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
                        >
                          <span>{vItem.emoji}</span>
                          <span className="font-black">{vItem.word}</span>
                          <span className="text-[11px] text-indigo-600 dark:text-indigo-300 font-semibold">
                            ("{vItem.simplePronunciation}")
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-300">
                            • {vItem.pt}
                          </span>
                          <Volume2 className="w-3 h-3 text-indigo-500 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Botão para abrir Tela da Lição (Flashcard) & Exercícios */}
                <div className="mt-4 pt-2">
                  <button
                    type="button"
                    disabled={!unlocked}
                    onClick={() => {
                      sfx.playTap();
                      onSelectPhase(mod);
                    }}
                    className={`w-full py-3.5 px-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${
                      unlocked
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white border-b-4 border-b-indigo-800 active:translate-y-0.5'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {unlocked ? (
                      <>
                        <BookOpen className="w-4 h-4" />
                        <span>Abrir Lição (Flashcards) & Exercícios</span>
                        <Play className="w-4 h-4 fill-current" />
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>Conclua o módulo anterior com nota ≥ 70</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ============================================================================
  // TELA 1: LISTA DE TEMAS PRINCIPAIS (Casa, Comida, Corpo Humano, Transporte, Roupas + Pronomes)
  // ============================================================================
  return (
    <div className="space-y-5 pb-16">
      {/* Cabeçalho Simples, Limpo e Amigável */}
      <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 px-4 py-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
            Olá, {user.name}! Escolha um Tema para estudar:
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Aprenda primeiro as palavras mais usadas no dia a dia e avance até as mais específicas.
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
                ? 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/70 dark:text-amber-200 dark:border-amber-700'
                : 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-200 dark:border-emerald-700'
            }`}
          >
            {unlockAllForTest ? '🔓 Todos os Módulos Abertos' : '🎓 Modo Prova (≥ 70 pts)'}
          </button>
        </div>
      </div>

      {/* Grid de Temas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {THEMES_LIST.map((theme) => {
          const themeModules = world0Phases.filter((p) => p.themeId === theme.id);
          const completedCount = themeModules.filter((p) =>
            user.completedPhaseIds.includes(p.id)
          ).length;
          const totalModules = themeModules.length || 4;
          const sampleWords =
            themeModules[0]?.vocabItems?.slice(0, 6).map((v) => v.word) || [];

          return (
            <div
              key={theme.id}
              onClick={() => {
                sfx.playTap();
                setSelectedThemeId(theme.id);
              }}
              role="button"
              tabIndex={0}
              className="group rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between gap-3 active:scale-[0.99]"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-3xl shadow-sm shrink-0`}
                    >
                      {theme.emoji}
                    </div>
                    <div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${theme.badgeColor}`}>
                        4 Módulos • 48 Palavras
                      </span>
                      <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight mt-0.5">
                        {theme.title}
                      </h2>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {theme.description}
                </p>

                {/* Amostra das palavras iniciais (Módulo 1 - Essenciais) */}
                {sampleWords.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {sampleWords.map((w, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-200"
                      >
                        {w}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-[11px] font-black text-indigo-600 dark:text-indigo-300">
                      +42 palavras
                    </span>
                  </div>
                )}
              </div>

              {/* Barra de Progresso dos 4 Módulos do Tema */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700/70 flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[11px] font-black text-slate-500 dark:text-slate-400 mb-1">
                    <span>Progresso nos 4 níveis</span>
                    <span>
                      {completedCount}/{totalModules} módulos
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${theme.gradient} rounded-full transition-all`}
                      style={{ width: `${(completedCount / totalModules) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-black text-xs shrink-0">
                  Estudar →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mundos Extras (Gramática e Conversação CEFR A1-C2) */}
      <div className="pt-4">
        <button
          type="button"
          onClick={() => setShowOtherWorlds((prev) => !prev)}
          className="w-full py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{showOtherWorlds ? 'Ocultar Mundos Avançados (A1 a C2)' : 'Ver Também: Mundos de Frases & Gramática (A1 a C2)'}</span>
        </button>

        {showOtherWorlds && (
          <div className="space-y-8 mt-6">
            {WORLDS_DATA.filter((w) => w.id > 0).map((world) => (
              <div key={world.id} className="p-4 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className={`p-4 rounded-2xl text-white bg-gradient-to-r ${world.gradientFrom} ${world.gradientTo}`}>
                  <span className="text-[11px] font-black uppercase">{world.levelBadge}</span>
                  <h3 className="text-lg font-black">{world.title}</h3>
                  <p className="text-xs text-white/90">{world.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {world.phases.map((phase) => (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => {
                        sfx.playTap();
                        onSelectPhase(phase);
                      }}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50 dark:bg-slate-700/60 dark:hover:bg-indigo-950/50 border border-slate-200 dark:border-slate-600 text-left flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <div>
                        <span className="text-xs font-black text-slate-900 dark:text-white block">{phase.title}</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-300 block">{phase.subtitle}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
