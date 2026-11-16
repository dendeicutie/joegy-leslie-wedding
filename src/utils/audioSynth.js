export class RomanticAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.interval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  playChord(freqs, duration = 4.0) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    });
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.isPlaying = true;
    const chords = [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [130.81, 196.00, 261.63, 329.63], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am9
      [196.00, 246.94, 293.66, 392.00], // G6
    ];
    let step = 0;
    this.playChord(chords[0]);
    this.interval = setInterval(() => {
      step = (step + 1) % chords.length;
      this.playChord(chords[step]);
    }, 4500);
  }

  stop() {
    this.isPlaying = false;
    if (this.interval) clearInterval(this.interval);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }
}

export const audioSynth = new RomanticAudioSynthesizer();
