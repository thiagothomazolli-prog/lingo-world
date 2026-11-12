import React, { useState, useEffect } from 'react';
import { REAL_VOCAB_IMAGES } from '../data/realVocabImages';

interface VocabIllustrationProps {
  word: string;
  emoji?: string;
  className?: string;
}

function norm(word: string): string {
  return word.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Build a normalized lookup table once so any casing/spacing matches its studio photo
const NORMALIZED_PHOTO_MAP: Record<string, string> = {};
for (const [k, url] of Object.entries(REAL_VOCAB_IMAGES)) {
  NORMALIZED_PHOTO_MAP[norm(k)] = url;
}

export function getRealVocabPhotoUrl(word: string): string | undefined {
  if (!word) return undefined;
  const trimmed = word.trim();
  if (REAL_VOCAB_IMAGES[trimmed]) return REAL_VOCAB_IMAGES[trimmed];
  const primary = trimmed.split(/\s*\/\s*/)[0].trim();
  if (REAL_VOCAB_IMAGES[primary]) return REAL_VOCAB_IMAGES[primary];
  return NORMALIZED_PHOTO_MAP[norm(primary)] || NORMALIZED_PHOTO_MAP[norm(trimmed)];
}

const preloadedImageUrls = new Set<string>();

export function preloadVocabImages(words: string[]): void {
  if (typeof window === 'undefined') return;
  words.forEach((w) => {
    const url = getRealVocabPhotoUrl(w);
    if (!url || preloadedImageUrls.has(url)) return;
    preloadedImageUrls.add(url);
    try {
      const img = new Image();
      (img as any).referrerPolicy = 'no-referrer';
      img.src = url;
    } catch {
      // ignore
    }
  });
}

export const VocabIllustration: React.FC<VocabIllustrationProps> = ({ word, emoji }) => {
  const primaryUrl = getRealVocabPhotoUrl(word);
  const backupUrl = word
    ? `https://tse2.mm.bing.net/th?q=${encodeURIComponent(word + ' single isolated on white background photo')}&w=500&h=500&c=7&rs=1&p=0`
    : undefined;

  const [useBackup, setUseBackup] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setUseBackup(false);
    setImgError(false);
    setImgLoaded(false);
  }, [primaryUrl, word]);

  const activeUrl = useBackup ? backupUrl : primaryUrl || backupUrl;

  if (activeUrl && !imgError) {
    return (
      <div className="relative w-34 h-32 sm:w-44 sm:h-40 rounded-2xl overflow-hidden bg-white flex items-center justify-center select-none p-1">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-white animate-pulse flex items-center justify-center">
            <span className="text-3xl opacity-25">{emoji || '🖼️'}</span>
          </div>
        )}
        <img
          src={activeUrl}
          alt=""
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            if (!useBackup && backupUrl && activeUrl !== backupUrl) {
              setUseBackup(true);
              setImgLoaded(false);
            } else {
              setImgError(true);
            }
          }}
          className={`w-full h-full object-contain transition-opacity duration-150 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    );
  }

  return (
    <div className="relative w-34 h-32 sm:w-44 sm:h-40 rounded-2xl bg-white flex items-center justify-center select-none">
      <span className="text-5xl sm:text-6xl filter drop-shadow-sm leading-none">
        {emoji || '✨'}
      </span>
    </div>
  );
};
