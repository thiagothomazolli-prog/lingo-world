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

// Build a normalized lookup table once so any casing/spacing matches its photo
const NORMALIZED_PHOTO_MAP: Record<string, string> = {};
for (const [k, url] of Object.entries(REAL_VOCAB_IMAGES)) {
  NORMALIZED_PHOTO_MAP[norm(k)] = url;
}

const PLURAL_ALIASES: Record<string, string> = {
  teeth: 'tooth',
  hands: 'hand',
  feet: 'foot',
  apples: 'apple',
  bananas: 'banana',
  strawberries: 'strawberry',
  oranges: 'orange',
  carrots: 'carrot',
  tomatoes: 'tomato',
  dogs: 'dog',
  cats: 'cat',
  birds: 'bird',
  horses: 'horse',
  lions: 'lion',
  giraffes: 'giraffe',
  whales: 'whale',
  dolphins: 'dolphin',
  owls: 'owl',
  chairs: 'chair',
  beds: 'bed',
  plates: 'plate',
  knives: 'knife',
  books: 'book',
  pens: 'pen',
  phones: 'phone',
  cars: 'car',
  buses: 'bus',
  bicycles: 'bicycle',
  airplanes: 'airplane',
  trees: 'tree',
};

export function getRealVocabPhotoUrl(word: string): string | undefined {
  if (!word) return undefined;
  const trimmed = word.trim();
  if (REAL_VOCAB_IMAGES[trimmed]) return REAL_VOCAB_IMAGES[trimmed];
  const primary = trimmed.split(/\s*\/\s*/)[0].trim();
  if (REAL_VOCAB_IMAGES[primary]) return REAL_VOCAB_IMAGES[primary];

  const directMatch = NORMALIZED_PHOTO_MAP[norm(primary)] || NORMALIZED_PHOTO_MAP[norm(trimmed)];
  if (directMatch) return directMatch;

  // Support 2-word associative practice phrases (e.g. "Red apple" -> "Apple", "White teeth" -> "Tooth")
  const tokens = primary
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);

  if (tokens.length >= 2) {
    const lastTwo = tokens.slice(-2).join('');
    if (NORMALIZED_PHOTO_MAP[lastTwo]) return NORMALIZED_PHOTO_MAP[lastTwo];

    const lastWord = tokens[tokens.length - 1];
    if (NORMALIZED_PHOTO_MAP[lastWord]) return NORMALIZED_PHOTO_MAP[lastWord];

    const alias = PLURAL_ALIASES[lastWord];
    if (alias && NORMALIZED_PHOTO_MAP[alias]) return NORMALIZED_PHOTO_MAP[alias];

    if (lastWord.endsWith('s') && NORMALIZED_PHOTO_MAP[lastWord.slice(0, -1)]) {
      return NORMALIZED_PHOTO_MAP[lastWord.slice(0, -1)];
    }
  }

  return undefined;
}

const preloadedImageUrls = new Set<string>();
const cleanedImageCache = new Map<string, string>();

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

/**
 * Inspects the bottom 11% of an image on an offscreen canvas.
 * If a stock watermark banner ("tarja na parte de baixo") spans across the bottom corners,
 * paints only that bottom banner pure white while keeping 100% of the item uncropped.
 */
function stripBottomBannerIfPresent(img: HTMLImageElement): string | null {
  try {
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h || w < 60 || h < 60) return null;

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.drawImage(img, 0, 0);
    const scanHeight = Math.max(8, Math.floor(h * 0.12));
    const startY = h - scanHeight;
    const imageData = ctx.getImageData(0, startY, w, scanHeight);
    const data = imageData.data;

    let bannerTopRow = -1;
    for (let r = scanHeight - 1; r >= 0; r--) {
      let darkOrColoredCount = 0;
      let leftEdgeNonWhite = 0;
      let rightEdgeNonWhite = 0;
      const leftLimit = Math.floor(w * 0.15);
      const rightStart = Math.floor(w * 0.85);

      for (let x = 0; x < w; x += 2) {
        const idx = (r * w + x) * 4;
        const red = data[idx];
        const green = data[idx + 1];
        const blue = data[idx + 2];
        const alpha = data[idx + 3];

        const isWhite = alpha < 20 || (red > 235 && green > 235 && blue > 235);
        if (!isWhite) {
          darkOrColoredCount++;
          if (x < leftLimit) leftEdgeNonWhite++;
          if (x > rightStart) rightEdgeNonWhite++;
        }
      }

      const sampledCols = Math.ceil(w / 2);
      const rowFillRatio = darkOrColoredCount / sampledCols;
      const edgesHaveBar = leftEdgeNonWhite > 3 && rightEdgeNonWhite > 3;

      if (rowFillRatio > 0.55 || edgesHaveBar) {
        bannerTopRow = r;
      } else if (bannerTopRow !== -1 && rowFillRatio < 0.15) {
        // Reached the clean white gap above the bottom watermark bar
        break;
      }
    }

    if (bannerTopRow !== -1) {
      const clearY = Math.max(Math.floor(h * 0.88), startY + bannerTopRow - 2);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, clearY, w, h - clearY);
      return canvas.toDataURL('image/jpeg', 0.94);
    }
  } catch {
    // Ignore CORS taint if any
  }
  return null;
}

export const VocabIllustration: React.FC<VocabIllustrationProps> = ({ word, emoji }) => {
  const primaryUrl = getRealVocabPhotoUrl(word);
  // Note: No &h=500&c=7 so backup images are never square-cropped either
  const backupUrl = word
    ? `https://tse2.mm.bing.net/th?q=${encodeURIComponent('single whole ' + word + ' on white background')}&w=500&p=0`
    : undefined;

  const [useBackup, setUseBackup] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [cleanedSrc, setCleanedSrc] = useState<string | null>(null);

  const activeUrl = useBackup ? backupUrl : primaryUrl || backupUrl;

  useEffect(() => {
    setUseBackup(false);
    setImgError(false);
    setImgLoaded(false);
    setCleanedSrc(null);
  }, [primaryUrl, word]);

  useEffect(() => {
    if (!activeUrl) return;
    if (cleanedImageCache.has(activeUrl)) {
      setCleanedSrc(cleanedImageCache.get(activeUrl) || null);
      return;
    }

    let cancelled = false;
    const probe = new Image();
    probe.crossOrigin = 'anonymous';
    (probe as any).referrerPolicy = 'no-referrer';
    probe.onload = () => {
      if (cancelled) return;
      const stripped = stripBottomBannerIfPresent(probe);
      if (stripped) {
        cleanedImageCache.set(activeUrl, stripped);
        setCleanedSrc(stripped);
      }
    };
    probe.src = activeUrl;

    return () => {
      cancelled = true;
    };
  }, [activeUrl]);

  if (activeUrl && !imgError) {
    return (
      <div className="relative w-full h-36 sm:h-44 rounded-xl bg-white flex items-center justify-center select-none p-2">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-white animate-pulse flex items-center justify-center rounded-xl">
            <span className="text-3xl opacity-25">{emoji || '🖼️'}</span>
          </div>
        )}
        <img
          src={cleanedSrc || activeUrl}
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
          className={`max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-150 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-36 sm:h-44 rounded-xl bg-white flex items-center justify-center select-none p-2">
      <span className="text-5xl sm:text-6xl filter drop-shadow-sm leading-none">
        {emoji || '✨'}
      </span>
    </div>
  );
};
