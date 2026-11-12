/* Ambient soundscape for Aetheria — synthesized entirely with WebAudio.
   No external assets, no autoplay: started only by explicit user action. */

interface BellOpts {
  freq: number;
  when: number;
  vol: number;
}

class AmbientEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private padGain: GainNode | null = null;
  private nodes: AudioScheduledSourceNode[] = [];
  private bellTimer: number | null = null;

  start(volume: number) {
    const AC: typeof AudioContext | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;

    if (!this.ctx) {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0;
      this.master.connect(this.ctx.destination);
      this.buildPad();
      this.scheduleBells();
    }
    void this.ctx.resume();
    const t = this.ctx.currentTime;
    this.master!.gain.cancelScheduledValues(t);
    this.master!.gain.setValueAtTime(this.master!.gain.value, t);
    this.master!.gain.linearRampToValueAtTime(volume * 0.5, t + 1.8);
  }

  stop() {
    if (this.bellTimer !== null) {
      window.clearTimeout(this.bellTimer);
      this.bellTimer = null;
    }
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(0, t + 0.8);
    window.setTimeout(() => void this.ctx?.suspend(), 900);
  }

  setVolume(v: number) {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(v * 0.5, t, 0.15);
  }

  private buildPad() {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;

    /* warm low drones — detuned fifths through a soft low-pass */
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;
    filter.Q.value = 0.6;

    this.padGain = ctx.createGain();
    this.padGain.gain.value = 0.16;
    filter.connect(this.padGain);
    this.padGain.connect(this.master);

    const voices: [OscillatorType, number, number][] = [
      ["sine", 55, 0.5],
      ["triangle", 110, 0.32],
      ["sine", 110.8, 0.3],
      ["sine", 165, 0.16],
      ["triangle", 220.6, 0.1],
    ];
    voices.forEach(([type, freq, g]) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.value = g;
      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      this.nodes.push(osc);
    });

    /* slow breathing of the filter — like wind over the valley */
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 130;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
    this.nodes.push(lfo);
  }

  private bell({ freq, when, vol }: BellOpts) {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(vol, when + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + 4.2);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(when);
    osc.stop(when + 4.4);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  private scheduleBells() {
    if (!this.ctx || !this.master) return;
    /* a soft pentatonic chime — like wind-bells on the towers */
    const scale = [523.25, 587.33, 698.46, 783.99, 880, 1046.5];
    const next = () => {
      if (!this.ctx) return 9000;
      this.bell({
        freq: scale[Math.floor(Math.random() * scale.length)],
        when: this.ctx.currentTime + 0.05,
        vol: 0.05 + Math.random() * 0.035,
      });
      return 6500 + Math.random() * 9000;
    };
    const loop = () => {
      const delay = next();
      this.bellTimer = window.setTimeout(loop, delay);
    };
    this.bellTimer = window.setTimeout(loop, 2500);
  }
}

export const ambient = new AmbientEngine();
