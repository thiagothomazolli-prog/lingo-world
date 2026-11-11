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
let speakingSafetyTimeout: ReturnType<typeof setTimeout> | null = null;
const preloadedAudioCache = new Map<string, string>();

function setSpeakingState(speaking: boolean): void {
  if (typeof window === 'undefined') return;
  if (speakingSafetyTimeout) {
    clearTimeout(speakingSafetyTimeout);
    speakingSafetyTimeout = null;
  }
  window.dispatchEvent(new CustomEvent('lingo-tts-state', { detail: { speaking } }));
  if (speaking) {
    speakingSafetyTimeout = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('lingo-tts-state', { detail: { speaking: false } }));
    }, 6000);
  }
}

function getHumanUsAudioUrls(textToSpeak: string, gender: 'male' | 'female'): string[] {
  const encoded = encodeURIComponent(textToSpeak);
  // type=2 on dictvoice is strictly American English (en-US) studio pronunciation
  const youdaoUsUrl = `https://dict.youdao.com/dictvoice?audio=${encoded}&type=2`;
  // tl=en-US on Google TTS is strictly American English (en-US) Neural voice
  const googleUsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-US&q=${encoded}`;

  return gender === 'male' ? [youdaoUsUrl, googleUsUrl] : [googleUsUrl, youdaoUsUrl];
}

// Preload American English human audio for instant 0ms playback on click
export function preloadExerciseAudio(phrases: string[], gender: 'male' | 'female' = 'female'): void {
  if (typeof window === 'undefined') return;
  phrases.forEach((raw) => {
    const clean = cleanSpokenText(raw);
    if (!clean) return;
    const key = `${clean.toLowerCase()}__${gender}`;
    if (preloadedAudioCache.has(key)) return;
    const urls = getHumanUsAudioUrls(clean, gender);
    preloadedAudioCache.set(key, urls[0]);
    try {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = urls[0];
      audio.load();
    } catch {
      // ignore preload errors
    }
  });
}

function speakOfflineFallback(textToSpeak: string, rate: number, gender: 'male' | 'female'): void {
  const safeRate = rate < 0.75 ? 0.72 : 0.96;

  // 1. Native Android TTS (configured strictly for Locale.US and pitch 1.0f)
  const androidTTS = (window as any).AndroidTTS;
  if (androidTTS && typeof androidTTS.speak === 'function') {
    try {
      const ok = androidTTS.speak(textToSpeak, 'en-US', safeRate, gender);
      if (ok) return;
    } catch {
      // ignore
    }
  }

  // 2. Browser Web Speech API (strictly en-US voices only, pitch = 1.0)
  if ('speechSynthesis' in window) {
    try {
      const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices() || [];
      // Filter strictly for American English (en-US / en_US)
      const usVoices = voices.filter((v) => /^en[-_]us/i.test(v.lang.trim()));
      const isMale = gender === 'male';

      const naturalUsVoices = usVoices.filter((v) => {
        const n = v.name.toLowerCase();
        return n.includes('natural') || n.includes('neural') || n.includes('online') || n.includes('google') || n.includes('samantha') || n.includes('alex');
      });
      const pool = naturalUsVoices.length > 0 ? naturalUsVoices : usVoices;

      const maleKeywords = ['guy', 'christopher', 'eric', 'roger', 'steffan', 'andrew', 'brian', 'david', 'mark', 'alex', 'male'];
      const femaleKeywords = ['aria', 'jenny', 'michelle', 'ana', 'emma', 'ava', 'samantha', 'zira', 'victoria', 'female'];

      let selectedVoice = pool.find((v) => {
        const n = v.name.toLowerCase();
        return isMale
          ? maleKeywords.some((k) => n.includes(k)) && !n.includes('female')
          : femaleKeywords.some((k) => n.includes(k));
      });

      if (!selectedVoice && pool.length > 0) {
        selectedVoice = pool[0];
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      utterance.rate = safeRate;
      utterance.pitch = 1.0; // Natural human pitch — never warp pitch!
      utterance.volume = 1.0;
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => setSpeakingState(true);
      utterance.onend = () => setSpeakingState(false);
      utterance.onerror = () => setSpeakingState(false);

      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
      setSpeakingState(true);
      window.speechSynthesis.speak(utterance);
    } catch {
      setSpeakingState(false);
    }
  } else {
    setSpeakingState(false);
  }
}

// Primary Speech Function: Prioritizes Natural Human American English (en-US) Audio
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

    if (activeAudioElement) {
      try {
        activeAudioElement.pause();
        activeAudioElement.src = '';
      } catch {
        // ignore
      }
      activeAudioElement = null;
    }

    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }

    const urls = getHumanUsAudioUrls(textToSpeak, voiceGender);
    const playbackRate = rate < 0.75 ? 0.72 : 1.0;

    const tryPlayUrl = (urlIndex: number) => {
      if (urlIndex >= urls.length) {
        speakOfflineFallback(textToSpeak, rate, voiceGender);
        return;
      }

      try {
        const audio = new Audio(urls[urlIndex]);
        audio.volume = 1.0;
        audio.playbackRate = playbackRate;
        if ('preservesPitch' in audio) {
          (audio as any).preservesPitch = true;
        }
        activeAudioElement = audio;

        audio.onplaying = () => setSpeakingState(true);
        audio.onended = () => setSpeakingState(false);
        audio.onerror = () => {
          tryPlayUrl(urlIndex + 1);
        };

        setSpeakingState(true);
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            tryPlayUrl(urlIndex + 1);
          });
        }
      } catch {
        tryPlayUrl(urlIndex + 1);
      }
    };

    tryPlayUrl(0);
  } catch (err) {
    setSpeakingState(false);
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
