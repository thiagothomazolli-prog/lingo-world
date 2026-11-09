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

// Clean spoken text for phonetic questions, letters and English words
export function cleanSpokenText(text: string): string {
  if (!text) return '';
  // Check for letter pronunciations
  if (/êi|ei|\/eɪ\//i.test(text)) return 'A';
  if (/bi|\/biː\//i.test(text)) return 'B';
  if (/si|\/siː\//i.test(text)) return 'C';
  if (/di|\/diː\//i.test(text)) return 'D';
  if (/som de "i"|í|\/iː\//i.test(text)) return 'E';
  if (/ef|\/ɛf\//i.test(text)) return 'F';
  if (/dji|dgee|\/dʒiː\//i.test(text)) return 'G';
  if (/eitch|\/eɪtʃ\//i.test(text)) return 'H';
  if (/ai|\/aɪ\//i.test(text)) return 'I';
  if (/ou|\/oʊ\//i.test(text)) return 'O';
  if (/ju|\/juː\//i.test(text)) return 'U';

  // Strip phonetic brackets, e.g. "Cat (/kæt/)" -> "Cat"
  let clean = text
    .replace(/\*\*+/g, '')
    .replace(/\/[^/]+\//g, '')
    .replace(/\([^)]+\)/g, '')
    .trim();
  return clean || text;
}

// Deterministic varied voice gender ('male' | 'female') per exercise
export function getExerciseVoiceGender(exerciseId: string, exerciseIndex: number): 'male' | 'female' {
  let hash = exerciseIndex * 7;
  for (let i = 0; i < exerciseId.length; i++) {
    hash = (hash * 31 + exerciseId.charCodeAt(i)) >>> 0;
  }
  const pattern: Array<'male' | 'female'> = ['female', 'male', 'male', 'female', 'male', 'female', 'female', 'male'];
  return pattern[(hash + exerciseIndex) % pattern.length];
}

let cachedVoices: SpeechSynthesisVoice[] = [];
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    cachedVoices = window.speechSynthesis.getVoices() || [];
    window.speechSynthesis.onvoiceschanged = () => {
      try {
        cachedVoices = window.speechSynthesis.getVoices() || [];
      } catch {
        // ignore
      }
    };
  } catch {
    // ignore
  }
}

let activeAudioElement: HTMLAudioElement | null = null;

function playAudioFallback(textToSpeak: string, lang: string, rate: number, gender: 'male' | 'female'): void {
  try {
    if (activeAudioElement) {
      activeAudioElement.pause();
      activeAudioElement = null;
    }
    const langCode = lang.toLowerCase().startsWith('pt') ? 'pt-BR' : gender === 'male' ? 'en-GB' : 'en-US';
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(langCode)}&q=${encodeURIComponent(textToSpeak)}`;
    const audio = new Audio(url);
    audio.playbackRate = Math.max(0.5, Math.min(1.5, rate));
    activeAudioElement = audio;
    audio.play().catch((err) => {
      console.warn('Audio fallback play failed:', err);
    });
  } catch (err) {
    console.warn('Audio fallback error:', err);
  }
}

// Speech Synthesis Helper with Native Android TTS Bridge + Web Speech + Cloud Audio Fallback
export function speakText(
  text: string,
  lang = 'en-US',
  rate = 0.95,
  gender?: 'male' | 'female'
): void {
  if (typeof window === 'undefined') return;

  try {
    const textToSpeak = cleanSpokenText(text);
    if (!textToSpeak) return;

    const voiceGender: 'male' | 'female' =
      gender || (textToSpeak.length % 2 === 0 ? 'female' : 'male');

    // 1. Priority 1: Native Android TTS Bridge (MainActivity.java)
    const androidTTS = (window as any).AndroidTTS;
    if (androidTTS && typeof androidTTS.speak === 'function') {
      try {
        const spokenByAndroid = androidTTS.speak(textToSpeak, lang, rate, voiceGender);
        if (spokenByAndroid) {
          return;
        }
      } catch (e) {
        console.warn('AndroidTTS error, falling back:', e);
      }
    }

    // 2. Priority 2: Browser Web Speech API (synchronous to preserve user gesture!)
    if ('speechSynthesis' in window) {
      const voices =
        cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices() || [];

      if (voices.length > 0) {
        const langPrefix = lang.slice(0, 2).toLowerCase();
        const langVoices = voices.filter((v) => v.lang.toLowerCase().startsWith(langPrefix));
        const pool = langVoices.length > 0 ? langVoices : voices;

        const isMale = voiceGender === 'male';
        const maleKeywords = ['male', 'david', 'mark', 'guy', 'daniel', 'james', 'alex', 'christopher', 'eric', 'roger', 'steffan'];
        const femaleKeywords = ['female', 'zira', 'samantha', 'victoria', 'aria', 'jenny', 'michelle', 'ana', 'clara', 'susan', 'karen'];

        let selectedVoice = pool.find((v) => {
          const n = v.name.toLowerCase();
          if (isMale) {
            return maleKeywords.some((k) => n.includes(k)) && !n.includes('female');
          } else {
            return femaleKeywords.some((k) => n.includes(k));
          }
        });

        if (!selectedVoice && pool.length >= 2) {
          selectedVoice = pool[isMale ? 0 : 1];
        } else if (!selectedVoice && pool.length === 1) {
          selectedVoice = pool[0];
        }

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = lang;
        utterance.rate = Math.max(0.5, Math.min(1.5, rate));
        utterance.pitch = isMale ? 0.82 : 1.15;
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }

        utterance.onerror = () => {
          playAudioFallback(textToSpeak, lang, rate, voiceGender);
        };

        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);
        return;
      }
    }

    // 3. Priority 3: HTML5 Audio Stream Fallback if no local TTS voices exist
    playAudioFallback(textToSpeak, lang, rate, voiceGender);
  } catch (err) {
    console.warn('Speech synthesis error:', err);
  }
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
