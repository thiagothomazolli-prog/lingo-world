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

// Upgrade thumbnail URLs to 600x600 smart object-centered saliency crop (&w=600&h=600&c=7&rs=1&p=0)
// so subjects fill the card instead of having wide empty margins
function upgradeToLargeCropUrl(url: string): string {
  if (!url) return url;
  if (url.includes('&w=500&p=0') && !url.includes('&c=7')) {
    return url.replace('&w=500&p=0', '&w=600&h=600&c=7&rs=1&p=0');
  }
  return url;
}

// Build a normalized lookup table once so any casing/spacing matches its photo
const NORMALIZED_PHOTO_MAP: Record<string, string> = {};
for (const [k, url] of Object.entries(REAL_VOCAB_IMAGES)) {
  NORMALIZED_PHOTO_MAP[norm(k)] = upgradeToLargeCropUrl(url);
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
  if (REAL_VOCAB_IMAGES[trimmed]) return upgradeToLargeCropUrl(REAL_VOCAB_IMAGES[trimmed]);
  const primary = trimmed.split(/\s*\/\s*/)[0].trim();
  if (REAL_VOCAB_IMAGES[primary]) return upgradeToLargeCropUrl(REAL_VOCAB_IMAGES[primary]);

  const directMatch = NORMALIZED_PHOTO_MAP[norm(primary)] || NORMALIZED_PHOTO_MAP[norm(trimmed)];
  if (directMatch) return directMatch;

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
 * 1. Strips any bottom stock watermark banner if present.
 * 2. Detects the tight bounding box of the non-white object and crops out excess white margins
 *    so the subject fills 95%+ of the card in maximum spotlight.
 */
function autoZoomAndCleanImage(img: HTMLImageElement): string | null {
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

    // Step 1: Check bottom 12% for stock watermark bar
    const scanHeight = Math.max(8, Math.floor(h * 0.12));
    const startY = h - scanHeight;
    const bottomData = ctx.getImageData(0, startY, w, scanHeight).data;

    let bannerTopRow = -1;
    for (let r = scanHeight - 1; r >= 0; r--) {
      let darkOrColoredCount = 0;
      let leftEdgeNonWhite = 0;
      let rightEdgeNonWhite = 0;
      const leftLimit = Math.floor(w * 0.15);
      const rightStart = Math.floor(w * 0.85);

      for (let x = 0; x < w; x += 2) {
        const idx = (r * w + x) * 4;
        const red = bottomData[idx];
        const green = bottomData[idx + 1];
        const blue = bottomData[idx + 2];
        const alpha = bottomData[idx + 3];

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
        break;
      }
    }

    let modified = false;
    if (bannerTopRow !== -1) {
      const clearY = Math.max(Math.floor(h * 0.88), startY + bannerTopRow - 2);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, clearY, w, h - clearY);
      modified = true;
    }

    // Step 2: Detect bounding box of non-white object pixels to trim excess white margins
    const fullData = ctx.getImageData(0, 0, w, h).data;
    let minX = w;
    let minY = h;
    let maxX = 0;
    let maxY = 0;

    for (let y = 0; y < h; y += 2) {
      for (let x = 0; x < w; x += 2) {
        const idx = (y * w + x) * 4;
        const r = fullData[idx];
        const g = fullData[idx + 1];
        const b = fullData[idx + 2];
        const a = fullData[idx + 3];

        if (a > 25 && (r < 242 || g < 242 || b < 242)) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    const boxW = maxX - minX;
    const boxH = maxY - minY;

    if (boxW > w * 0.18 && boxH > h * 0.18 && (boxW < w * 0.90 || boxH < h * 0.90)) {
      const padX = Math.round(boxW * 0.03);
      const padY = Math.round(boxH * 0.03);
      const sx = Math.max(0, minX - padX);
      const sy = Math.max(0, minY - padY);
      const sw = Math.min(w - sx, boxW + padX * 2);
      const sh = Math.min(h - sy, boxH + padY * 2);

      const outCanvas = document.createElement('canvas');
      const side = Math.max(sw, sh);
      outCanvas.width = side;
      outCanvas.height = side;
      const outCtx = outCanvas.getContext('2d');
      if (outCtx) {
        outCtx.fillStyle = '#ffffff';
        outCtx.fillRect(0, 0, side, side);
        const dx = Math.round((side - sw) / 2);
        const dy = Math.round((side - sh) / 2);
        outCtx.drawImage(canvas, sx, sy, sw, sh, dx, dy, sw, sh);
        return outCanvas.toDataURL('image/jpeg', 0.94);
      }
    }

    if (modified) {
      return canvas.toDataURL('image/jpeg', 0.94);
    }
  } catch {
    // Ignore CORS taint if any
  }
  return null;
}

export const VocabIllustration: React.FC<VocabIllustrationProps> = ({ word, emoji }) => {
  const primaryUrl = getRealVocabPhotoUrl(word);
  const backupUrl = word
    ? `https://tse2.mm.bing.net/th?q=${encodeURIComponent('single whole ' + word + ' on white background')}&w=600&h=600&c=7&rs=1&p=0`
    : undefined;

  const [useBackup, setUseBackup] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [cleanedSrc, setCleanedSrc] = useState<string | null>(null);

  const activeUrl = useBackup ? backupUrl : primaryUrl || backupUrl;

  useEffect(() => {
    setUseBackup(false);
    setImgError(false);
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
      const processed = autoZoomAndCleanImage(probe);
      if (processed) {
        cleanedImageCache.set(activeUrl, processed);
        setCleanedSrc(processed);
      }
    };
    probe.src = activeUrl;

    return () => {
      cancelled = true;
    };
  }, [activeUrl]);

  if (activeUrl && !imgError) {
    return (
      <div className="relative w-full h-full min-h-[140px] overflow-hidden bg-white flex items-center justify-center select-none">
        <img
          src={cleanedSrc || activeUrl}
          alt={word}
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => {
            if (!useBackup && backupUrl && activeUrl !== backupUrl) {
              setUseBackup(true);
            } else {
              setImgError(true);
            }
          }}
          className={`block w-full h-full object-cover ${cleanedSrc ? 'scale-100' : 'scale-[1.12]'}`}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[140px] bg-white flex items-center justify-center select-none">
      <span className="text-6xl sm:text-7xl filter drop-shadow-sm leading-none">
        {emoji || '✨'}
      </span>
    </div>
  );
};
