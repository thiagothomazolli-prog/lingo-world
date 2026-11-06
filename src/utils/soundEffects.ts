// 🔊 Procedural Web Audio Engine (100% Native, Zero MP3 latency, Works Offline & In Mobile APK)

class SoundEffectsEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // 🟢 1. Som de Acerto (Duolingo Style: Acorde Maior Brilhante e Satisfatório)
  public playCorrect() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // D5 -> A5 -> D6 arpejo alegre
    const notes = [
      { freq: 587.33, start: 0.00, dur: 0.18, vol: 0.28 },
      { freq: 880.00, start: 0.08, dur: 0.22, vol: 0.32 },
      { freq: 1174.66, start: 0.16, dur: 0.35, vol: 0.36 },
    ];

    notes.forEach((note) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const startTime = now + note.start;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.freq, startTime);

      gain.gain.setValueAtTime(note.vol, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.dur);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime);
      osc.stop(startTime + note.dur + 0.02);
    });
  }

  // 🔴 2. Som de Erro (Grave, gentil e educativo - estilo Duolingo "boop")
  public playIncorrect() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Dois tons descendentes suaves
    const notes = [
      { freq: 240, start: 0.00, dur: 0.15, vol: 0.30 },
      { freq: 160, start: 0.12, dur: 0.25, vol: 0.35 },
    ];

    notes.forEach((note) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const startTime = now + note.start;

      osc.type = 'sawtooth';
      // Low pass filter para deixar o som macio e não irritante
      const filter = this.ctx!.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, startTime);

      osc.frequency.setValueAtTime(note.freq, startTime);
      osc.frequency.exponentialRampToValueAtTime(note.freq * 0.8, startTime + note.dur);

      gain.gain.setValueAtTime(note.vol, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime);
      osc.stop(startTime + note.dur + 0.02);
    });
  }

  // 🏆 3. Fanfarra de Sucesso (Conclusão de Fase ou Teste com Estrelas)
  public playSuccessFanfare() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // C Major Triad Fanfare: C5 -> E5 -> G5 -> C6 -> E6
    const fanfare = [
      { freq: 523.25, start: 0.00, dur: 0.14, vol: 0.25 },
      { freq: 659.25, start: 0.10, dur: 0.14, vol: 0.28 },
      { freq: 783.99, start: 0.20, dur: 0.16, vol: 0.30 },
      { freq: 1046.50, start: 0.32, dur: 0.40, vol: 0.35 },
      { freq: 1318.51, start: 0.45, dur: 0.60, vol: 0.38 },
    ];

    fanfare.forEach((n) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const startTime = now + n.start;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.freq, startTime);

      gain.gain.setValueAtTime(n.vol, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + n.dur);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime);
      osc.stop(startTime + n.dur + 0.02);
    });
  }

  // 🔘 4. Toque Tátil nos Botões e Opções (Pop suave imediato)
  public playTap() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.045);
  }

  // 💎 5. Recompensa / Ganho de Gemas e XP
  public playReward() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [659.25, 987.77, 1318.51].forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const startTime = now + idx * 0.07;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.20, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.23);
    });
  }
}

export const sfx = new SoundEffectsEngine();
