import { UserProfile, Flashcard, CompetencyScores } from '../types';
import { INITIAL_FLASHCARDS } from '../data/courseData';

const STORAGE_KEY_PROFILE = 'lingo_world_user_profile_v1';
const STORAGE_KEY_FLASHCARDS = 'lingo_world_flashcards_v1';

export const DEFAULT_USER_PROFILE: UserProfile = {
  id: 'user_default_1',
  name: 'Thiago Explorador',
  email: 'thiagothomazolli@gmail.com',
  age: 26,
  isMinor: false,
  avatar: '🚀',
  currentLanguage: 'en',
  cefrLevel: 'A1',
  plan: 'free',
  xp: 140,
  gems: 75,
  dailyStreak: 3,
  streakDays: 3,
  lastStudiedDate: new Date().toISOString().split('T')[0],
  streakBonusClaimedDate: '',
  dailyGoalMinutes: 15,
  todayMinutesSpent: 8,
  completedPhaseIds: ['w1-p1'],
  starsByPhase: { 'w1-p1': 3 },
  equippedMascotCostume: 'classic-astro',
  inventory: ['classic-astro', 'freeze-potion'],
  competencies: {
    listening: 65,
    speaking: 55,
    reading: 70,
    writing: 60,
    grammar: 58,
    vocabulary: 68,
    pronunciation: 54,
  },
  weakTopics: ['Verbo To Be (Idade)', 'Preposições (In/On/At)', 'Verbos Irregulares'],
  soundEnabled: true,
  hapticEnabled: true,
  autoSpeak: true,
  speechSpeed: 1.0,
};

export function loadUserProfile(): UserProfile {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (!data) return DEFAULT_USER_PROFILE;
    const parsed = JSON.parse(data);
    const streak = parsed.dailyStreak ?? parsed.streakDays ?? 1;
    return {
      ...DEFAULT_USER_PROFILE,
      ...parsed,
      dailyStreak: streak,
      streakDays: streak,
    };
  } catch (e) {
    console.error('Failed to load profile from localStorage', e);
    return DEFAULT_USER_PROFILE;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile to localStorage', e);
  }
}

export function loadFlashcards(): Flashcard[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_FLASHCARDS);
    if (!data) return INITIAL_FLASHCARDS;
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_FLASHCARDS;
  }
}

export function saveFlashcards(cards: Flashcard[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_FLASHCARDS, JSON.stringify(cards));
  } catch (e) {
    console.error('Failed to save flashcards', e);
  }
}

// Speech Synthesis Helper
export function speakText(text: string, lang = 'en-US', rate = 0.95): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  utterance.pitch = 1.0;

  // Prefer natural English voices if available
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(v => v.lang.startsWith(lang.slice(0, 2)) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
  if (naturalVoice) {
    utterance.voice = naturalVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// Spaced Repetition (SM-2 variant update)
export function updateCardSpacedRepetition(card: Flashcard, known: boolean): Flashcard {
  const newBox = known ? Math.min(5, card.box + 1) : 1;
  const daysToAdd = known ? Math.pow(2, newBox) : 1;
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + daysToAdd);

  return {
    ...card,
    box: newBox,
    nextReviewDate: nextDate.toISOString(),
  };
}

// Calculate CEFR level automatically based on competency average
export function calculateSuggestedCefr(scores: CompetencyScores): UserProfile['cefrLevel'] {
  const vals = Object.values(scores);
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;

  if (avg >= 88) return 'C2';
  if (avg >= 78) return 'C1';
  if (avg >= 65) return 'B2';
  if (avg >= 50) return 'B1';
  if (avg >= 35) return 'A2';
  return 'A1';
}
