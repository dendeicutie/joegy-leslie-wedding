export class RomanticAudioSynthesizer {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.onStateChange = null;

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const forceStop = () => {
        if (this.isPlaying || (this.audio && !this.audio.paused)) {
          this.stop();
        }
      };

      // Fires when switching apps, going to home screen, or locking the phone
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') {
          forceStop();
        }
      });

      // Fires when closing the tab or swiping Chrome away
      window.addEventListener('pagehide', forceStop);
      window.addEventListener('beforeunload', forceStop);
      window.addEventListener('freeze', forceStop);
    }
  }

  init() {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio('/tahanan.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.65;
      this.audio.preload = 'auto';
    }
  }

  setOnStateChange(callback) {
    this.onStateChange = callback;
  }

  notifyState() {
    if (this.onStateChange) {
      this.onStateChange(this.isPlaying);
    }
  }

  start() {
    this.init();
    if (!this.audio) return;

    this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
        this.notifyState();
      })
      .catch((err) => {
        console.warn('Audio playback blocked until user interacts:', err);
        this.isPlaying = false;
        this.notifyState();
      });
    this.isPlaying = true;
    this.notifyState();
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      // Resetting and clearing MediaSession forces Android/iOS to kill background audio immediately
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'none';
      }
    }
    this.isPlaying = false;
    this.notifyState();
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