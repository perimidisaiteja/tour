/**
 * Web Audio Engine for Traditional Indian Instruments
 * Provides authentic acoustic synthesis for Bansuri, Tabla, and Temple Bells
 */

class IndianInstrumentAudioEngine {
  private ctx: AudioContext | null = null;
  private bansuriOsc: OscillatorNode | null = null;
  private bansuriGain: GainNode | null = null;
  private bansuriFilter: BiquadFilterNode | null = null;
  private noiseGain: GainNode | null = null;
  private isBansuriPlaying = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Swara note frequencies (C4 base)
  public readonly swaras: Record<string, { note: string; freq: number; full: string }> = {
    Sa: { note: 'Sa', freq: 261.63, full: 'Shadja (Fundamental)' },
    Re: { note: 'Re', freq: 293.66, full: 'Rishabh' },
    Ga: { note: 'Ga', freq: 329.63, full: 'Gandhar' },
    Ma: { note: 'Ma', freq: 369.99, full: 'Madhyam (Teevra)' },
    Pa: { note: 'Pa', freq: 392.00, full: 'Pancham' },
    Dha: { note: 'Dha', freq: 440.00, full: 'Dhaivat' },
    Ni: { note: 'Ni', freq: 493.88, full: 'Nishad' },
    "Sa'": { note: "Sa'", freq: 523.25, full: 'Tar Shadja (High)' },
  };

  /**
   * Start sustained Bansuri flute tone with airflow breath modulation
   */
  public startBansuri(frequency = 261.63, breathIntensity = 0.5) {
    this.initContext();
    if (!this.ctx) return;

    if (this.isBansuriPlaying) {
      this.updateBansuriPitch(frequency, breathIntensity);
      return;
    }

    const t = this.ctx.currentTime;

    // Primary acoustic tone (warm triangle + subtle sine)
    this.bansuriOsc = this.ctx.createOscillator();
    this.bansuriOsc.type = 'triangle';
    this.bansuriOsc.frequency.setValueAtTime(frequency, t);

    // Filter to simulate bamboo resonance
    this.bansuriFilter = this.ctx.createBiquadFilter();
    this.bansuriFilter.type = 'lowpass';
    this.bansuriFilter.frequency.setValueAtTime(1400, t);
    this.bansuriFilter.Q.setValueAtTime(3, t);

    // Flute gain envelope
    this.bansuriGain = this.ctx.createGain();
    const targetVol = Math.max(0.01, Math.min(0.8, breathIntensity * 0.7));
    this.bansuriGain.gain.setValueAtTime(0.001, t);
    this.bansuriGain.gain.linearRampToValueAtTime(targetVol, t + 0.08);

    // Breath noise simulation (air rushing past embouchure)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(frequency * 2.2, t);
    noiseFilter.Q.setValueAtTime(5, t);

    this.noiseGain = this.ctx.createGain();
    const noiseVol = Math.max(0.005, breathIntensity * 0.08);
    this.noiseGain.gain.setValueAtTime(noiseVol, t);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(this.noiseGain);
    this.noiseGain.connect(this.ctx.destination);

    this.bansuriOsc.connect(this.bansuriFilter);
    this.bansuriFilter.connect(this.bansuriGain);
    this.bansuriGain.connect(this.ctx.destination);

    this.bansuriOsc.start();
    whiteNoise.start();
    this.isBansuriPlaying = true;
  }

  /**
   * Update Bansuri pitch smoothly (Meend / Portamento)
   */
  public updateBansuriPitch(frequency: number, breathIntensity = 0.5) {
    if (!this.ctx || !this.bansuriOsc || !this.bansuriGain) return;
    const t = this.ctx.currentTime;
    // Smooth glissando between swaras
    this.bansuriOsc.frequency.cancelScheduledValues(t);
    this.bansuriOsc.frequency.exponentialRampToValueAtTime(frequency, t + 0.06);

    const targetVol = Math.max(0.01, Math.min(0.8, breathIntensity * 0.7));
    this.bansuriGain.gain.cancelScheduledValues(t);
    this.bansuriGain.gain.linearRampToValueAtTime(targetVol, t + 0.04);
  }

  /**
   * Stop Bansuri playback
   */
  public stopBansuri() {
    if (!this.ctx || !this.bansuriGain) return;
    const t = this.ctx.currentTime;
    this.bansuriGain.gain.linearRampToValueAtTime(0.0001, t + 0.1);
    if (this.noiseGain) {
      this.noiseGain.gain.linearRampToValueAtTime(0.0001, t + 0.1);
    }
    setTimeout(() => {
      try {
        this.bansuriOsc?.stop();
        this.bansuriOsc?.disconnect();
        this.bansuriFilter?.disconnect();
        this.bansuriGain?.disconnect();
      } catch {}
      this.isBansuriPlaying = false;
      this.bansuriOsc = null;
      this.bansuriGain = null;
    }, 150);
  }

  /**
   * Play specific Tabla stroke / Bol
   */
  public playTablaStroke(stroke: 'Na' | 'Tin' | 'Ge' | 'Ke' | 'Dha' | 'Dhin') {
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    switch (stroke) {
      case 'Na': {
        // High harmonic bell-like ring on Dayan rim
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, t); // D5

        gain.gain.setValueAtTime(0.6, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.35);
        break;
      }
      case 'Tin': {
        // Softer open tone on Dayan
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, t); // A4

        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.25);
        break;
      }
      case 'Ge': {
        // Deep bass Bayan stroke with characteristic upward pitch bend slide
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(68, t);
        osc.frequency.exponentialRampToValueAtTime(110, t + 0.12);
        osc.frequency.exponentialRampToValueAtTime(75, t + 0.4);

        gain.gain.setValueAtTime(0.8, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.45);
        break;
      }
      case 'Ke': {
        // Muted slap on Bayan
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(90, t);

        gain.gain.setValueAtTime(0.5, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.08);
        break;
      }
      case 'Dha': {
        // Combined stroke: Na (Dayan) + Ge (Bayan)
        this.playTablaStroke('Na');
        this.playTablaStroke('Ge');
        break;
      }
      case 'Dhin': {
        // Combined stroke: Tin (Dayan) + Ge (Bayan)
        this.playTablaStroke('Tin');
        this.playTablaStroke('Ge');
        break;
      }
    }
  }

  /**
   * Play rich resonant Indian Temple Bell (Ghanta)
   */
  public playTempleBell() {
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const fundamental = 520;
    const partials = [1, 1.98, 2.76, 3.45, 5.12];
    const amplitudes = [0.6, 0.4, 0.25, 0.15, 0.08];

    partials.forEach((partial, i) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(fundamental * partial, t);

      const decayTime = 2.5 / (i * 0.4 + 1);
      gain.gain.setValueAtTime(amplitudes[i], t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + decayTime);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + decayTime);
    });
  }
}

export const audioEngine = new IndianInstrumentAudioEngine();
