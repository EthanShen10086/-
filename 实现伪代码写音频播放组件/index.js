class AudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.currentTime = 0;
    this.duration = 0;
    this.isPlaying = false;
    this.volume = 1;
  }

  // Load audio source
  load(url) {
    this.audio.src = url;
    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
    });
  }

  // Play audio
  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  // Pause audio
  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  // Seek to specific time
  seek(time) {
    this.audio.currentTime = time;
    this.currentTime = time;
  }

  // Set volume (0-1)
  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, value));
    this.audio.volume = this.volume;
  }

  // Get current playback state
  getState() {
    return {
      currentTime: this.audio.currentTime,
      duration: this.duration,
      isPlaying: this.isPlaying,
      volume: this.volume
    };
  }

  // Clean up
  destroy() {
    this.audio.pause();
    this.audio.src = '';
    this.audio = null;
  }
}

// Usage example:
/*
const player = new AudioPlayer();
player.load('audio.mp3');
player.play();
player.setVolume(0.5);
player.seek(30); // Seek to 30 seconds
player.pause();
player.destroy();
*/
