import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navbar, NavTab } from './components/Navbar';
import { MapView } from './views/MapView';
import { StudyView } from './views/StudyView';
import { TutorView } from './views/TutorView';
import { ChallengesView } from './views/ChallengesView';
import { ProfileView } from './views/ProfileView';

import { PhaseModal } from './components/PhaseModal';
import { CefrLevelTestModal } from './components/CefrLevelTestModal';
import { PlanUpgradeModal } from './components/PlanUpgradeModal';
import { CertificateModal } from './components/CertificateModal';
import { AdminModal } from './components/AdminModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { DailyMissionsModal } from './components/DailyMissionsModal';
import { LingoGameView } from './game/LingoGameView';
import { AiStudioHubModal } from './components/AiStudioHubModal';
import { ShopModal } from './components/ShopModal';

import {
  UserProfile,
  Phase,
  Flashcard,
  CefrLevel,
  PlanType,
  LanguageCode,
  DailyMissionsState,
  MissionCategory,
} from './types';
import {
  loadUserProfile,
  saveUserProfile,
  loadFlashcards,
  saveFlashcards,
  DEFAULT_USER_PROFILE,
} from './utils/storage';
import {
  loadDailyMissions,
  saveDailyMissions,
  recordMissionActivity,
} from './utils/missions';
import { Sparkles, X, Flame, Gem, Target, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [user, setUser] = useState<UserProfile>(loadUserProfile);
  const [flashcards, setFlashcards] = useState<Flashcard[]>(loadFlashcards);
  const [currentTab, setCurrentTab] = useState<NavTab>('map');

  // Daily Missions state (24h renewal)
  const [missionsState, setMissionsState] = useState<DailyMissionsState>(loadDailyMissions);
  const [showMissionsModal, setShowMissionsModal] = useState(false);
  const [missionCompleteToast, setMissionCompleteToast] = useState<{
    title: string;
    xp: number;
    gems: number;
  } | null>(null);

  // Modals state
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const [showCefrModal, setShowCefrModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [showAiStudioModal, setShowAiStudioModal] = useState(false);
  const [showShopModal, setShowShopModal] = useState(false);
  const [showDiscreteAd, setShowDiscreteAd] = useState(true);
  const [show3DGame, setShow3DGame] = useState(false);
  const [streakAwardNotification, setStreakAwardNotification] = useState<{
    streak: number;
    bonusGems: number;
  } | null>(null);

  // Check and maintain daily streak, awarding small bonus gems
  const verifyAndMaintainStreak = (currentUser: UserProfile) => {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = currentUser.lastStudiedDate || '';
    const currentStreak = currentUser.dailyStreak ?? currentUser.streakDays ?? 1;

    // If streak bonus was already claimed today, do not award again
    if (currentUser.streakBonusClaimedDate === today) {
      return;
    }

    let newStreak = currentStreak;
    let bonusGems = 0;
    let updatedInventory = [...currentUser.inventory];

    if (!lastDate) {
      newStreak = 1;
      bonusGems = 5;
    } else {
      const lastTime = new Date(lastDate + 'T00:00:00').getTime();
      const todayTime = new Date(today + 'T00:00:00').getTime();
      const diffDays = Math.round((todayTime - lastTime) / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        // Studied today: claim today's bonus gems
        bonusGems = Math.min(15, 5 + Math.floor(currentStreak / 3));
      } else if (diffDays === 1) {
        // Consecutive day! Streak maintained
        newStreak = currentStreak + 1;
        bonusGems = Math.min(15, 5 + Math.floor(newStreak / 3));
      } else {
        // Missed more than 1 day: check for Streak Freeze potion
        const freezeIdx = updatedInventory.indexOf('freeze-potion');
        if (freezeIdx !== -1) {
          updatedInventory.splice(freezeIdx, 1);
          newStreak = currentStreak; // Preserved by potion!
          bonusGems = 5;
        } else {
          // Reset streak to 1
          newStreak = 1;
          bonusGems = 5;
        }
      }
    }

    if (bonusGems > 0) {
      setUser((prev) => ({
        ...prev,
        dailyStreak: newStreak,
        streakDays: newStreak,
        gems: prev.gems + bonusGems,
        lastStudiedDate: today,
        streakBonusClaimedDate: today,
        inventory: updatedInventory,
      }));

      setStreakAwardNotification({
        streak: newStreak,
        bonusGems,
      });

      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.2 },
      });
    }
  };

  // Run initial daily streak check on mount
  useEffect(() => {
    verifyAndMaintainStreak(user);
  }, []);

  // Auto persist profile on state change
  useEffect(() => {
    saveUserProfile(user);
  }, [user]);

  // Auto persist flashcards
  useEffect(() => {
    saveFlashcards(flashcards);
  }, [flashcards]);

  const handleUpdateUser = (partial: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...partial }));
  };

  const handleAwardXp = (earnedXp: number, earnedGems: number) => {
    // Award XP, Gems, and verify streak
    setUser((prev) => {
      const today = new Date().toISOString().split('T')[0];
      const isNewClaim = prev.streakBonusClaimedDate !== today;
      const bonusGems = isNewClaim ? Math.min(15, 5 + Math.floor((prev.dailyStreak ?? prev.streakDays ?? 1) / 3)) : 0;
      const currentStreak = prev.dailyStreak ?? prev.streakDays ?? 1;

      if (isNewClaim) {
        setStreakAwardNotification({
          streak: currentStreak,
          bonusGems,
        });
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.25 },
        });
      }

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        gems: prev.gems + earnedGems + bonusGems,
        todayMinutesSpent: prev.todayMinutesSpent + 2,
        lastStudiedDate: today,
        streakBonusClaimedDate: today,
      };
    });
  };

  const handleCompletePhase = (
    phaseId: string,
    earnedXp: number,
    earnedGems: number,
    stars: number
  ) => {
    setUser((prev) => {
      const isFirstTime = !prev.completedPhaseIds.includes(phaseId);
      const newCompleted = isFirstTime ? [...prev.completedPhaseIds, phaseId] : prev.completedPhaseIds;
      const bestStars = Math.max(prev.starsByPhase[phaseId] || 0, stars);

      const today = new Date().toISOString().split('T')[0];
      const isNewClaim = prev.streakBonusClaimedDate !== today;
      const currentStreak = prev.dailyStreak ?? prev.streakDays ?? 1;
      const streakBonusGems = isNewClaim ? Math.min(15, 5 + Math.floor(currentStreak / 3)) : 0;

      if (isNewClaim) {
        setStreakAwardNotification({
          streak: currentStreak,
          bonusGems: streakBonusGems,
        });
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.25 },
        });
      }

      // Boost user competencies slightly on success
      const newCompetencies = { ...prev.competencies };
      newCompetencies.listening = Math.min(100, newCompetencies.listening + 2);
      newCompetencies.reading = Math.min(100, newCompetencies.reading + 2);
      newCompetencies.grammar = Math.min(100, newCompetencies.grammar + 1);

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        gems: prev.gems + earnedGems + streakBonusGems,
        todayMinutesSpent: prev.todayMinutesSpent + 3,
        lastStudiedDate: today,
        streakBonusClaimedDate: today,
        completedPhaseIds: newCompleted,
        starsByPhase: { ...prev.starsByPhase, [phaseId]: bestStars },
        competencies: newCompetencies,
      };
    });

    // Record progress for daily missions (Phase and Grammar)
    handleRecordMissionActivity('phase', 1);
    handleRecordMissionActivity('grammar', 1);
  };

  const handleRecordMissionActivity = (category: MissionCategory, amount = 1) => {
    setMissionsState((prev) => {
      const { updatedState, newlyCompleted } = recordMissionActivity(prev, category, amount);
      if (newlyCompleted.length > 0) {
        setMissionCompleteToast({
          title: newlyCompleted[0].title,
          xp: newlyCompleted[0].rewardXp,
          gems: newlyCompleted[0].rewardGems,
        });
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.3 },
        });
        setTimeout(() => setMissionCompleteToast(null), 4500);
      }
      return updatedState;
    });
  };

  const handleClaimMissionReward = (missionId: string) => {
    setMissionsState((prev) => {
      const mission = prev.missions.find((m) => m.id === missionId);
      if (!mission || mission.isClaimed || !mission.isCompleted) return prev;

      handleAwardXp(mission.rewardXp, mission.rewardGems);

      const nextMissions = prev.missions.map((m) =>
        m.id === missionId ? { ...m, isClaimed: true } : m
      );

      const nextState = {
        ...prev,
        missions: nextMissions,
      };
      saveDailyMissions(nextState);
      return nextState;
    });
  };

  const handleClaimAllDailyBonus = () => {
    setMissionsState((prev) => {
      if (prev.bonusClaimed) return prev;
      const allCompleted = prev.missions.every((m) => m.isCompleted);
      if (!allCompleted) return prev;

      handleAwardXp(prev.bonusXp, prev.bonusGems);

      const nextState = {
        ...prev,
        bonusClaimed: true,
      };
      saveDailyMissions(nextState);
      return nextState;
    });
  };

  const handleNavigateFromMission = (category: MissionCategory) => {
    if (category === 'flashcards' || category === 'story') {
      setCurrentTab('study');
    } else if (category === 'phase' || category === 'grammar') {
      setCurrentTab('map');
    } else if (category === 'speed_round') {
      setCurrentTab('challenges');
    } else if (category === 'pronunciation') {
      setCurrentTab('tutor');
    }
  };

  const handleApplyCefrLevel = (level: CefrLevel) => {
    handleUpdateUser({ cefrLevel: level });
    setShowCefrModal(false);
  };

  const handleSelectPlan = (plan: PlanType) => {
    handleUpdateUser({ plan });
  };

  const handleSelectLanguage = (lang: LanguageCode) => {
    if (lang !== 'en') {
      alert(`O idioma ${lang.toUpperCase()} está sendo preparado para a próxima expansão global! O curso de Inglês completo continua ativo.`);
      return;
    }
    handleUpdateUser({ currentLanguage: lang });
  };

  const handleResetUserProgress = () => {
    localStorage.clear();
    setUser(DEFAULT_USER_PROFILE);
    setShowAdminModal(false);
  };

  // Auto dismiss streak notification after 7 seconds
  useEffect(() => {
    if (streakAwardNotification) {
      const timer = setTimeout(() => {
        setStreakAwardNotification(null);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [streakAwardNotification]);

  if (show3DGame) {
    return (
      <LingoGameView
        onClose={() => setShow3DGame(false)}
        onAwardGameRewards={(xp, gems) => {
          handleAwardXp(xp, gems);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/60 font-sans text-slate-800 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        user={user}
        onOpenUpgradeModal={() => setShowUpgradeModal(true)}
        onOpenCefrTest={() => setShowCefrModal(true)}
        onOpenAdmin={() => setShowAdminModal(true)}
        onOpen3DGame={() => setShow3DGame(true)}
        onOpenLeaderboard={() => setShowLeaderboardModal(true)}
        onOpenMissions={() => setShowMissionsModal(true)}
        onOpenAiStudio={() => setShowAiStudioModal(true)}
        onOpenShop={() => setShowShopModal(true)}
        unclaimedMissionsCount={
          missionsState.missions.filter((m) => m.isCompleted && !m.isClaimed).length
        }
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Streak Bonus Celebration Floating Toast */}
      {streakAwardNotification && (
        <div className="fixed top-18 left-1/2 -translate-x-1/2 z-50 animate-bounce duration-500 max-w-md w-[92%] sm:w-auto">
          <div className="px-5 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl border border-amber-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-xl shrink-0">
                🔥
              </div>
              <div>
                <div className="font-black text-sm tracking-tight flex items-center gap-1.5">
                  <span>Ofensiva Diária: {streakAwardNotification.streak} Dias!</span>
                  <span className="px-2 py-0.5 bg-white text-amber-800 font-black text-[11px] rounded-full shadow-xs">
                    +{streakAwardNotification.bonusGems} 💎
                  </span>
                </div>
                <p className="text-xs text-amber-100 font-medium mt-0.5">
                  Você manteve sua sequência e ganhou bônus de {streakAwardNotification.bonusGems} Gemas!
                </p>
              </div>
            </div>
            <button
              onClick={() => setStreakAwardNotification(null)}
              className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mission Complete Celebration Toast */}
      {missionCompleteToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce duration-500 max-w-md w-[92%] sm:w-auto">
          <div className="px-5 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white rounded-2xl shadow-2xl border border-emerald-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-xl shrink-0">
                🎯
              </div>
              <div>
                <div className="font-black text-sm tracking-tight flex items-center gap-1.5">
                  <span>Missão Concluída!</span>
                  <span className="px-2 py-0.5 bg-white text-emerald-800 font-black text-[11px] rounded-full shadow-xs">
                    +{missionCompleteToast.xp} XP • +{missionCompleteToast.gems} 💎
                  </span>
                </div>
                <p className="text-xs text-emerald-100 font-medium mt-0.5">
                  {missionCompleteToast.title} pronta para resgate!
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setMissionCompleteToast(null);
                setShowMissionsModal(true);
              }}
              className="px-2.5 py-1 bg-white text-emerald-800 font-extrabold text-xs rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer shrink-0"
            >
              Ver
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-4 py-4 pb-24 overflow-x-hidden">
        {currentTab === 'map' && (
          <MapView
            user={user}
            missionsState={missionsState}
            onClaimMissionReward={handleClaimMissionReward}
            onClaimAllBonus={handleClaimAllDailyBonus}
            onNavigateToCategory={handleNavigateFromMission}
            onSelectPhase={(phase) => setSelectedPhase(phase)}
            onOpenCefrTest={() => setShowCefrModal(true)}
            onOpen3DGame={() => setShow3DGame(true)}
            onOpenLeaderboard={() => setShowLeaderboardModal(true)}
            onOpenAiStudio={() => setShowAiStudioModal(true)}
            onOpenShop={() => setShowShopModal(true)}
          />
        )}

        {currentTab === 'study' && (
          <StudyView
            user={user}
            flashcards={flashcards}
            onUpdateFlashcards={setFlashcards}
            onAwardXp={handleAwardXp}
            onRecordMissionActivity={(cat) => handleRecordMissionActivity(cat, 1)}
          />
        )}

        {currentTab === 'tutor' && (
          <TutorView user={user} onAwardXp={handleAwardXp} />
        )}

        {currentTab === 'challenges' && (
          <ChallengesView
            user={user}
            onAwardXp={handleAwardXp}
            onOpen3DGame={() => setShow3DGame(true)}
            onOpenLeaderboard={() => setShowLeaderboardModal(true)}
            onRecordMissionActivity={(cat) => handleRecordMissionActivity(cat, 1)}
          />
        )}

        {currentTab === 'profile' && (
          <ProfileView
            user={user}
            onUpdateUser={handleUpdateUser}
            onOpenCertificate={() => setShowCertificateModal(true)}
            onOpenCefrTest={() => setShowCefrModal(true)}
            onOpenUpgradeModal={() => setShowUpgradeModal(true)}
            onOpenShopModal={() => setShowShopModal(true)}
          />
        )}

        {/* Discrete Ad Banner for Free tier in secondary non-intrusive area */}
        {user.plan === 'free' && showDiscreteAd && (
          <div className="mt-8 p-3.5 bg-white border border-slate-200/80 rounded-2xl shadow-xs flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-slate-100 text-slate-400 font-bold text-[10px] rounded uppercase">Anúncio</span>
              <span>Apoie o Lingo World gratuito ou assine o <strong>Plano Plus</strong> para experiência 100% livre de anúncios.</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="text-indigo-600 font-extrabold hover:underline"
              >
                Conhecer Plus
              </button>
              <button
                onClick={() => setShowDiscreteAd(false)}
                className="p-1 hover:bg-slate-100 rounded-lg text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom / Mobile Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        pendingReviewsCount={flashcards.filter((f) => f.box < 3).length}
      />

      {/* Modals */}
      {selectedPhase && (
        <PhaseModal
          phase={selectedPhase}
          user={user}
          onClose={() => setSelectedPhase(null)}
          onCompletePhase={handleCompletePhase}
          onRecordMissionActivity={(cat) => handleRecordMissionActivity(cat, 1)}
        />
      )}

      {showCefrModal && (
        <CefrLevelTestModal
          onClose={() => setShowCefrModal(false)}
          onApplyLevel={handleApplyCefrLevel}
        />
      )}

      {showUpgradeModal && (
        <PlanUpgradeModal
          currentPlan={user.plan}
          onClose={() => setShowUpgradeModal(false)}
          onSelectPlan={handleSelectPlan}
        />
      )}

      {showCertificateModal && (
        <CertificateModal
          user={user}
          onClose={() => setShowCertificateModal(false)}
        />
      )}

      {showAdminModal && (
        <AdminModal
          user={user}
          onClose={() => setShowAdminModal(false)}
          onResetUserProgress={handleResetUserProgress}
        />
      )}

      {showLeaderboardModal && (
        <LeaderboardModal
          isOpen={showLeaderboardModal}
          onClose={() => setShowLeaderboardModal(false)}
          user={user}
          onExploreMap={() => {
            setShowLeaderboardModal(false);
            setCurrentTab('map');
          }}
        />
      )}

      {showMissionsModal && (
        <DailyMissionsModal
          isOpen={showMissionsModal}
          onClose={() => setShowMissionsModal(false)}
          missionsState={missionsState}
          onClaimReward={handleClaimMissionReward}
          onClaimAllBonus={handleClaimAllDailyBonus}
          onNavigateToCategory={handleNavigateFromMission}
        />
      )}

      {showAiStudioModal && (
        <AiStudioHubModal
          isOpen={showAiStudioModal}
          onClose={() => setShowAiStudioModal(false)}
        />
      )}

      {showShopModal && (
        <ShopModal
          isOpen={showShopModal}
          onClose={() => setShowShopModal(false)}
          user={user}
          onUpdateUser={handleUpdateUser}
        />
      )}
    </div>
  );
}
