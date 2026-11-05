export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type PlanType = 'free' | 'plus' | 'family';

export type LanguageCode = 'en' | 'es' | 'fr' | 'zh' | 'de';

export interface CompetencyScores {
  listening: number;
  speaking: number;
  reading: number;
  writing: number;
  grammar: number;
  vocabulary: number;
  pronunciation: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  age: number;
  isMinor: boolean;
  avatar: string;
  currentLanguage: LanguageCode;
  cefrLevel: CefrLevel;
  plan: PlanType;
  xp: number;
  gems: number;
  dailyStreak: number; // Daily streak count
  streakDays: number; // Maintained for backwards compatibility
  lastStudiedDate: string; // ISO date YYYY-MM-DD
  streakBonusClaimedDate?: string; // Date (YYYY-MM-DD) when streak bonus was last claimed
  dailyGoalMinutes: number;
  todayMinutesSpent: number;
  completedPhaseIds: string[];
  starsByPhase: Record<string, number>; // phaseId -> 1..3
  equippedMascotCostume?: string;
  inventory: string[];
  competencies: CompetencyScores;
  weakTopics: string[];
  soundEnabled: boolean;
  hapticEnabled: boolean;
  autoSpeak: boolean;
  speechSpeed: number; // 0.8 to 1.2
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'word-order' | 'listening' | 'speaking-repeat' | 'translate';
  prompt: string;
  contextSentence?: string;
  contextSentencePt?: string;
  audioPhrase?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  phoneticHint?: string;
  skillCategory: keyof CompetencyScores;
}

export interface Phase {
  id: string;
  worldId: number;
  phaseNumber: number;
  title: string;
  subtitle: string;
  pedagogicalObjective: string;
  type: 'lesson' | 'boss' | 'chest' | 'review';
  icon: string;
  cefrLevel: CefrLevel;
  theorySummary: string[];
  exercises: Exercise[];
  xpReward: number;
  gemsReward: number;
}

export interface World {
  id: number;
  title: string;
  themeColor: string;
  gradientFrom: string;
  gradientTo: string;
  description: string;
  levelBadge: string;
  phases: Phase[];
}

export interface Flashcard {
  id: string;
  english: string;
  portuguese: string;
  phonetic: string;
  category: string;
  exampleEn: string;
  examplePt: string;
  box: number; // 1 to 5 spaced repetition
  nextReviewDate: string;
}

export interface StoryChoice {
  text: string;
  translation: string;
  nextNodeId: string;
  feedback: string;
  isCorrect?: boolean;
}

export interface StoryNode {
  id: string;
  speaker: string;
  avatar: string;
  dialogueEn: string;
  dialoguePt: string;
  audioPhrase?: string;
  choices?: StoryChoice[];
  isEnding?: boolean;
}

export interface InteractiveStory {
  id: string;
  title: string;
  cefrLevel: CefrLevel;
  coverEmoji: string;
  description: string;
  xpReward: number;
  initialNodeId: string;
  nodes: Record<string, StoryNode>;
}

export interface TutorMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  translation?: string;
  timestamp: number;
  audioPlayed?: boolean;
  correction?: {
    originalPhrase: string;
    correctedPhrase: string;
    explanation: string;
  } | null;
  pronunciationTip?: {
    word: string;
    ipa: string;
    advice: string;
  } | null;
  followUpQuestion?: string;
}

export interface ArenaCompetitor {
  id: string;
  name: string;
  avatar: string;
  xpThisWeek: number;
  league: string;
  isUser?: boolean;
}

export type MissionCategory = 'flashcards' | 'pronunciation' | 'grammar' | 'phase' | 'speed_round' | 'story';

export interface DailyMission {
  id: string;
  title: string;
  description: string;
  category: MissionCategory;
  icon: string;
  currentProgress: number;
  targetProgress: number;
  rewardXp: number;
  rewardGems: number;
  isCompleted: boolean;
  isClaimed: boolean;
}

export interface DailyMissionsState {
  date: string; // YYYY-MM-DD
  missions: DailyMission[];
  bonusClaimed: boolean;
  bonusXp: number;
  bonusGems: number;
}
