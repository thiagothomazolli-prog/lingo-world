import { DailyMission, DailyMissionsState, MissionCategory } from '../types';

const STORAGE_KEY_MISSIONS = 'lingo_world_daily_missions_v1';

// Preset pool of short, engaging daily tasks
const MISSIONS_POOL: Omit<DailyMission, 'currentProgress' | 'isCompleted' | 'isClaimed'>[] = [
  {
    id: 'm-flashcards',
    title: 'Pratique 5 Flashcards',
    description: 'Revise 5 cartões na seção de Vocabulário Espaçado',
    category: 'flashcards',
    icon: '🗂️',
    targetProgress: 5,
    rewardXp: 30,
    rewardGems: 5,
  },
  {
    id: 'm-pronunciation',
    title: 'Treine Exercício de Pronúncia',
    description: 'Pratique sua fala e pronúncia em voz alta nas fases ou lições',
    category: 'pronunciation',
    icon: '🎙️',
    targetProgress: 2,
    rewardXp: 35,
    rewardGems: 8,
  },
  {
    id: 'm-grammar',
    title: 'Revise Regras de Gramática',
    description: 'Complete ao menos 1 fase ou exercício focado em gramática',
    category: 'grammar',
    icon: '📖',
    targetProgress: 1,
    rewardXp: 25,
    rewardGems: 5,
  },
  {
    id: 'm-phase',
    title: 'Conquiste 1 Fase no Mapa',
    description: 'Avance no território galáctico completando uma lição completa',
    category: 'phase',
    icon: '🚀',
    targetProgress: 1,
    rewardXp: 40,
    rewardGems: 10,
  },
  {
    id: 'm-story',
    title: 'Explore 1 Diálogo Interativo',
    description: 'Participe de uma conversa guiada na seção de Histórias',
    category: 'story',
    icon: '💬',
    targetProgress: 1,
    rewardXp: 30,
    rewardGems: 6,
  },
  {
    id: 'm-speed',
    title: 'Desafio na Arena da Liga',
    description: 'Participe de um round de velocidade ou desafio no Lingo Brain',
    category: 'speed_round',
    icon: '⚡',
    targetProgress: 1,
    rewardXp: 35,
    rewardGems: 7,
  },
];

export function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

// Generate 3 deterministic daily missions for a given date
export function generateDailyMissionsForDate(dateStr: string): DailyMissionsState {
  // Use date string as seed to pick 3 distinct missions
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = (seed * 31 + dateStr.charCodeAt(i)) % 10000;
  }

  // Shuffle pool using pseudo-random seed
  const pool = [...MISSIONS_POOL];
  const selected: DailyMission[] = [];

  // Guarantee flashcards, pronunciation, and grammar/phase are featured prominently
  const defaultSet = [
    pool.find((m) => m.category === 'flashcards') || pool[0],
    pool.find((m) => m.category === 'pronunciation') || pool[1],
    pool.find((m) => m.category === 'grammar') || pool[2],
  ];

  // Rotate based on seed
  const offset = seed % 3;
  const rotated = [
    defaultSet[(0 + offset) % 3],
    defaultSet[(1 + offset) % 3],
    pool[(3 + (seed % (pool.length - 3))) % pool.length] || defaultSet[2],
  ];

  // Ensure 3 unique missions
  const uniqueMissions = new Map<string, typeof pool[0]>();
  rotated.forEach((m) => uniqueMissions.set(m.id, m));

  // If duplicate, fill from pool
  for (const item of pool) {
    if (uniqueMissions.size >= 3) break;
    uniqueMissions.set(item.id, item);
  }

  const missions: DailyMission[] = Array.from(uniqueMissions.values()).slice(0, 3).map((item) => ({
    ...item,
    currentProgress: 0,
    isCompleted: false,
    isClaimed: false,
  }));

  return {
    date: dateStr,
    missions,
    bonusClaimed: false,
    bonusXp: 50,
    bonusGems: 15,
  };
}

export function loadDailyMissions(): DailyMissionsState {
  const today = getTodayDateString();
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MISSIONS);
    if (raw) {
      const parsed: DailyMissionsState = JSON.parse(raw);
      // Check if missions are from today (within 24h cycle)
      if (parsed.date === today && Array.isArray(parsed.missions) && parsed.missions.length >= 3) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading daily missions from localStorage', e);
  }

  // Generate new missions for today
  const fresh = generateDailyMissionsForDate(today);
  saveDailyMissions(fresh);
  return fresh;
}

export function saveDailyMissions(state: DailyMissionsState): void {
  try {
    localStorage.setItem(STORAGE_KEY_MISSIONS, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving daily missions to localStorage', e);
  }
}

// Update progress for missions matching the given category
export function recordMissionActivity(
  currentState: DailyMissionsState,
  category: MissionCategory,
  increment = 1
): { updatedState: DailyMissionsState; newlyCompleted: DailyMission[] } {
  const today = getTodayDateString();
  // If state is stale, reload
  let state = currentState.date === today ? currentState : generateDailyMissionsForDate(today);

  const newlyCompleted: DailyMission[] = [];

  const updatedMissions = state.missions.map((mission) => {
    if (mission.category !== category || mission.isClaimed) {
      return mission;
    }

    const nextProgress = Math.min(mission.targetProgress, mission.currentProgress + increment);
    const becameCompleted = nextProgress >= mission.targetProgress && !mission.isCompleted;

    const updated = {
      ...mission,
      currentProgress: nextProgress,
      isCompleted: nextProgress >= mission.targetProgress,
    };

    if (becameCompleted) {
      newlyCompleted.push(updated);
    }

    return updated;
  });

  const nextState: DailyMissionsState = {
    ...state,
    missions: updatedMissions,
  };

  saveDailyMissions(nextState);
  return { updatedState: nextState, newlyCompleted };
}

// Calculate remaining hours and minutes until midnight reset
export function getTimeUntilNextReset(): { hours: number; minutes: number; text: string } {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);

  const diffMs = midnight.getTime() - now.getTime();
  const totalMinutes = Math.max(0, Math.floor(diffMs / (1000 * 60)));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    hours,
    minutes,
    text: `${hours}h ${minutes.toString().padStart(2, '0')}m`,
  };
}
