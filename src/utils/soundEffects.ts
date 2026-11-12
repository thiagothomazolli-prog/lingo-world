// 🔊 Warm Acoustic Web Audio Engine (Soft Marimba/Chime Tones, Zero Harshness)

class SoundEffectsEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initContext() {
    try {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch {
      // Gracefully ignore audio context limitations
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  private playWarmTone(freq: number, startOffset: number, duration: number, peakVolume: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const startTime = now + startOffset;

    // Fundamental pure sine wave (warm acoustic body)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, startTime);

    // Smooth 14ms attack to eliminate any robotic click/pop, followed by natural wooden decay
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakVolume, startTime + 0.014);
    gain.gain.exponentialRampToValueAtTime(0.0008, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);

    // Subtle soft harmonic overtone for wooden marimba warmth
    const overtone = this.ctx.createOscillator();
    const overtoneGain = this.ctx.createGain();
    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2, startTime);

    overtoneGain.gain.setValueAtTime(0.0001, startTime);
    overtoneGain.gain.linearRampToValueAtTime(peakVolume * 0.12, startTime + 0.01);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + Math.min(0.09, duration * 0.5));

    overtone.connect(filter);
    overtone.start(startTime);
    overtone.stop(startTime + Math.min(0.1, duration * 0.5) + 0.01);
  }

  // 🟢 1. Som de Acerto (Confortável, orgânico e estimulante — dois tons suaves de marimba/chime)
  public playCorrect() {
    try {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      // Intervalo acolhedor e suave (F5 -> C6 suave / E5 -> A5)
      this.playWarmTone(587.33, 0.0, 0.16, 0.14);   // D5
      this.playWarmTone(880.0, 0.085, 0.32, 0.16);  // A5
    } catch {
      // Audio playback failsafe
    }
  }

  // 🔴 2. Som de Erro (Suave, acolhedor e sem estridência)
  public playIncorrect() {
    try {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      this.playWarmTone(349.23, 0.0, 0.15, 0.12);   // F4
      this.playWarmTone(293.66, 0.10, 0.26, 0.13);  // D4
    } catch {
      // Audio playback failsafe
    }
  }

  // 🏆 3. Fanfarra de Sucesso (Conclusão de Fase com acordes suaves e confortáveis)
  public playSuccessFanfare() {
    try {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const notes = [
        { freq: 523.25, start: 0.0, dur: 0.16, vol: 0.13 },
        { freq: 659.25, start: 0.10, dur: 0.16, vol: 0.14 },
        { freq: 783.99, start: 0.20, dur: 0.18, vol: 0.15 },
        { freq: 1046.5, start: 0.31, dur: 0.48, vol: 0.17 },
      ];

      notes.forEach((n) => this.playWarmTone(n.freq, n.start, n.dur, n.vol));
    } catch {
      // Audio playback failsafe
    }
  }

  // 🔘 4. Toque Tátil nos Botões e Opções (Toque de madeira super discreto)
  public playTap() {
    try {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.03);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.032);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch {
      // Audio playback failsafe
    }
  }

  // 💎 5. Recompensa / Ganho de Gemas e XP
  public playReward() {
    try {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      this.playWarmTone(587.33, 0.0, 0.16, 0.12);
      this.playWarmTone(740.0, 0.08, 0.18, 0.13);
      this.playWarmTone(880.0, 0.16, 0.28, 0.15);
    } catch {
      // Audio playback failsafe
    }
  }
}

export const sfx = new SoundEffectsEngine();
