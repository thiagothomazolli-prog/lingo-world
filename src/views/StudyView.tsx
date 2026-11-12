import React, { useState } from 'react';
import { BookOpen, Volume2, Search, ArrowRight, RotateCw, CheckCircle2, XCircle, Sparkles, MessageSquare, Trophy, ChevronRight } from 'lucide-react';
import { DIDACTIC_LIBRARY, INTERACTIVE_STORIES } from '../data/courseData';
import { Flashcard, InteractiveStory, StoryNode, UserProfile, DailyMission, DailyMissionsState } from '../types';
import { speakText, updateCardSpacedRepetition } from '../utils/storage';
import { MascotLingo } from '../components/MascotLingo';
import { DailyMissionsCard } from '../components/DailyMissionsCard';
import { sfx } from '../utils/soundEffects';

interface StudyViewProps {
  user: UserProfile;
  flashcards: Flashcard[];
  onUpdateFlashcards: (updated: Flashcard[]) => void;
  onAwardXp: (xp: number, gems: number) => void;
  onRecordMissionActivity?: (category: 'flashcards' | 'story' | 'grammar') => void;
  missionsState?: DailyMissionsState;
  onClaimMissionReward?: (missionId: string) => void;
  onClaimAllBonus?: () => void;
  onNavigateToCategory?: (category: DailyMission['category']) => void;
  onOpenCefrTest?: () => void;
  onOpenLeaderboard?: () => void;
}

export const StudyView: React.FC<StudyViewProps> = ({
  user,
  flashcards,
  onUpdateFlashcards,
  onAwardXp,
  onRecordMissionActivity,
  missionsState,
  onClaimMissionReward,
  onClaimAllBonus,
  onNavigateToCategory,
  onOpenCefrTest,
  onOpenLeaderboard,
}) => {
  const [subTab, setSubTab] = useState<'missions' | 'library' | 'flashcards' | 'stories'>('missions');
  const [searchQuery, setSearchQuery] = useState('');

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  // Stories state
  const [activeStory, setActiveStory] = useState<InteractiveStory | null>(null);
  const [currentStoryNodeId, setCurrentStoryNodeId] = useState<string | null>(null);
  const [storyChoicesHistory, setStoryChoicesHistory] = useState<string[]>([]);
  const [isStoryComplete, setIsStoryComplete] = useState(false);

  // Filter library
  const filteredLibrary = DIDACTIC_LIBRARY.map((category) => ({
    ...category,
    topics: category.topics.filter(
      (t) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.fullText.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.topics.length > 0);

  // Flashcard review logic
  const currentCard = flashcards[currentCardIndex % flashcards.length];

  const handleFlashcardAnswer = (known: boolean) => {
    if (!currentCard) return;
    const updatedCard = updateCardSpacedRepetition(currentCard, known);
    const newCards = flashcards.map((c) => (c.id === currentCard.id ? updatedCard : c));
    onUpdateFlashcards(newCards);
    setIsFlipped(false);
    setCurrentCardIndex((prev) => prev + 1);
    setReviewedCount((prev) => prev + 1);

    if (known) {
      sfx.playCorrect();
      onAwardXp(10, 2);
    } else {
      sfx.playIncorrect();
    }
    if (onRecordMissionActivity) {
      onRecordMissionActivity('flashcards');
    }
  };

  // Interactive Story Handlers
  const handleStartStory = (story: InteractiveStory) => {
    sfx.playTap();
    setActiveStory(story);
    setCurrentStoryNodeId(story.initialNodeId);
    setStoryChoicesHistory([]);
    setIsStoryComplete(false);
  };

  const handleChooseStoryOption = (nextNodeId: string, choiceText: string) => {
    sfx.playTap();
    setStoryChoicesHistory((prev) => [...prev, choiceText]);
    if (activeStory?.nodes[nextNodeId]?.isEnding) {
      setIsStoryComplete(true);
      sfx.playSuccessFanfare();
      onAwardXp(activeStory.xpReward, 20);
      if (onRecordMissionActivity) {
        onRecordMissionActivity('story');
      }
    }
    setCurrentStoryNodeId(nextNodeId);
  };

  const currentStoryNode: StoryNode | null =
    activeStory && currentStoryNodeId ? activeStory.nodes[currentStoryNodeId] || null : null;

  return (
    <div className="space-y-6 pb-16">
      {/* Sub Tabs Selector */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl max-w-xl mx-auto text-xs font-bold">
        <button
          onClick={() => setSubTab('missions')}
          className={`flex-1 py-2 px-2 rounded-xl transition-all cursor-pointer ${
            subTab === 'missions' ? 'bg-white shadow-xs text-indigo-700 font-extrabold' : 'text-slate-600'
          }`}
        >
          Missões & Nível
        </button>
        <button
          onClick={() => setSubTab('library')}
          className={`flex-1 py-2 px-2 rounded-xl transition-all cursor-pointer ${
            subTab === 'library' ? 'bg-white shadow-xs text-indigo-700 font-extrabold' : 'text-slate-600'
          }`}
        >
          Biblioteca
        </button>
        <button
          onClick={() => setSubTab('flashcards')}
          className={`flex-1 py-2 px-2 rounded-xl transition-all cursor-pointer ${
            subTab === 'flashcards' ? 'bg-white shadow-xs text-indigo-700 font-extrabold' : 'text-slate-600'
          }`}
        >
          Revisão
        </button>
        <button
          onClick={() => setSubTab('stories')}
          className={`flex-1 py-2 px-2 rounded-xl transition-all cursor-pointer ${
            subTab === 'stories' ? 'bg-white shadow-xs text-indigo-700 font-extrabold' : 'text-slate-600'
          }`}
        >
          Histórias
        </button>
      </div>

      {/* 0. Missões Diárias, Baú de Ouro, Teste de Nivelamento & Ranking */}
      {subTab === 'missions' && (
        <div className="space-y-6">
          {/* Teste de Nivelamento CEFR Card */}
          <div className="p-5 bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 text-white rounded-3xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/15 rounded-full text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Nível Atual: {user.cefrLevel}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black tracking-tight">Teste de Nivelamento CEFR</h3>
              <p className="text-xs sm:text-sm text-indigo-100">
                Descubra seu nível oficial de inglês (A1 a C2) com questões adaptativas.
              </p>
            </div>
            {onOpenCefrTest && (
              <button
                onClick={onOpenCefrTest}
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-indigo-900 font-black text-xs rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Fazer Teste de Nivelamento</span>
              </button>
            )}
          </div>

          {/* Missões Diárias (Conquiste 1 Fase no Mapa, Baú de Ouro, etc.) */}
          {missionsState && onClaimMissionReward && onClaimAllBonus && (
            <DailyMissionsCard
              missionsState={missionsState}
              onClaimReward={onClaimMissionReward}
              onClaimAllBonus={onClaimAllBonus}
              onNavigateToCategory={onNavigateToCategory}
            />
          )}

          {/* Ranking Top 5 de XP */}
          {onOpenLeaderboard && (
            <div className="p-4 bg-white border border-slate-200/90 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-xs shrink-0">
                  <Trophy className="w-6 h-6 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="font-black text-sm text-slate-900">Ranking Top 5 de XP</span>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-black rounded-md uppercase">
                      Liga Ouro Ativa
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Você acumulou <strong className="text-indigo-600 font-mono">{user.xp} XP</strong>. Veja quem lidera o pódio de fluência!
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenLeaderboard}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
              >
                <span>Abrir Ranking Oficial</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 1. Biblioteca Didática */}
      {subTab === 'library' && (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquise por regras gramaticais, phrasal verbs, vocabulário..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
          </div>

          {/* Categories and Topics */}
          <div className="space-y-8">
            {filteredLibrary.map((cat, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-black text-slate-900 border-l-4 border-indigo-600 pl-3">
                  {cat.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-5 bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl shadow-xs transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-extrabold text-sm text-slate-900">{topic.title}</h4>
                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-mono font-bold rounded-md uppercase shrink-0">
                          {topic.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{topic.summary}</p>
                      <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 whitespace-pre-line border border-slate-100 font-normal leading-relaxed">
                        {topic.fullText}
                      </div>
                      <button
                        onClick={() => speakText(topic.title, 'en-US', user.speechSpeed)}
                        className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer pt-1"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Ouvir em inglês</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Spaced Repetition Flashcards */}
      {subTab === 'flashcards' && (
        <div className="max-w-md mx-auto space-y-6 text-center">
          <div>
            <h3 className="text-xl font-black text-slate-900">Revisão Espaçada Inteligente</h3>
            <p className="text-xs text-slate-500 mt-1">
              Consolide vocabulário na memória de longo prazo usando o algoritmo Leitner / SM-2.
            </p>
          </div>

          {currentCard ? (
            <div className="space-y-4">
              {/* Flashcard Box */}
              <div
                onClick={() => {
                  sfx.playTap();
                  setIsFlipped(!isFlipped);
                }}
                className="w-full min-h-[260px] p-6 bg-white border-2 border-indigo-200 hover:border-indigo-400 rounded-3xl shadow-lg flex flex-col items-center justify-between cursor-pointer transition-all transform hover:-translate-y-1 relative select-none"
              >
                <div className="w-full flex items-center justify-between text-xs text-slate-400 font-bold">
                  <span>Caixa {currentCard.box} / 5</span>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full font-mono text-[10px]">
                    {currentCard.category}
                  </span>
                </div>

                <div className="space-y-2 py-4">
                  {!isFlipped ? (
                    <>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900">{currentCard.english}</div>
                      <div className="text-xs text-indigo-600 font-mono">{currentCard.phonetic}</div>
                      <p className="text-xs text-slate-400 pt-2">Toque para ver a tradução e exemplos</p>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-xl font-bold text-emerald-700">{currentCard.portuguese}</div>
                      <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 text-left border border-slate-100">
                        <p className="font-semibold text-slate-900">{currentCard.exampleEn}</p>
                        <p className="text-slate-500 italic mt-0.5">{currentCard.examplePt}</p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    speakText(currentCard.english, 'en-US', user.speechSpeed);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Ouvir</span>
                </button>
              </div>

              {/* Action buttons */}
              {isFlipped && (
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => handleFlashcardAnswer(false)}
                    className="flex-1 py-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Preciso Revisar</span>
                  </button>
                  <button
                    onClick={() => handleFlashcardAnswer(true)}
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Já Dominei (+10 XP)</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 bg-white border border-slate-200 rounded-3xl">
              <p className="text-sm font-bold text-slate-700">Todas as revisões de hoje estão em dia!</p>
            </div>
          )}
        </div>
      )}

      {/* 3. Interactive Stories */}
      {subTab === 'stories' && (
        <div className="space-y-6">
          {!activeStory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INTERACTIVE_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{story.coverEmoji}</span>
                      <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 font-mono text-xs font-bold rounded-lg">
                        {story.cefrLevel}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">{story.title}</h4>
                    <p className="text-xs text-slate-600">{story.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-indigo-600">⚡ +{story.xpReward} XP</span>
                    <button
                      onClick={() => handleStartStory(story)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer"
                    >
                      Jogar História
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeStory.coverEmoji}</span>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">{activeStory.title}</h4>
                    <span className="text-[10px] text-slate-500 font-semibold">Decisões interativas em inglês</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveStory(null)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Sair
                </button>
              </div>

              {currentStoryNode && (
                <div className="space-y-5">
                  {/* Speaker card */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-3xl">{currentStoryNode.avatar}</span>
                    <div className="flex-1 space-y-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {currentStoryNode.speaker}
                      </span>
                      <p className="text-base font-extrabold text-slate-900">{currentStoryNode.dialogueEn}</p>
                      <p className="text-xs text-slate-500 italic">{currentStoryNode.dialoguePt}</p>
                    </div>
                    {currentStoryNode.dialogueEn && (
                      <button
                        onClick={() => speakText(currentStoryNode.dialogueEn, 'en-US', user.speechSpeed)}
                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Branching choices */}
                  {!isStoryComplete && currentStoryNode.choices && (
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Como você responde?
                      </p>
                      {currentStoryNode.choices.map((choice, i) => (
                        <button
                          key={i}
                          onClick={() => handleChooseStoryOption(choice.nextNodeId, choice.text)}
                          className="w-full text-left p-3.5 bg-white hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 transition-all cursor-pointer shadow-xs active:scale-98"
                        >
                          <div className="font-bold text-indigo-950">{choice.text}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{choice.translation}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Story ending */}
                  {isStoryComplete && (
                    <div className="text-center space-y-4 py-4">
                      <MascotLingo mood="cheering" size="md" message="História concluída!" />
                      <h4 className="text-lg font-black text-slate-900">Parabéns! Você resolveu a situação!</h4>
                      <p className="text-xs text-slate-600">
                        Você ganhou <span className="font-bold text-indigo-600">+{activeStory.xpReward} XP</span> e 20 Gemas!
                      </p>
                      <button
                        onClick={() => setActiveStory(null)}
                        className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
                      >
                        Voltar para a Lista de Histórias
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
