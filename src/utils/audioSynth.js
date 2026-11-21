export class RomanticAudioSynthesizer {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio('/tahanan.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.65;
    }
  }

  start() {
    this.init();
    if (!this.audio) return;

    this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
      })
      .catch((err) => {
        console.warn('Audio playback blocked until user interacts:', err);
        this.isPlaying = false;
      });
    this.isPlaying = true;
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
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