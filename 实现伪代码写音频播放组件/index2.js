// 音频播放器组件伪代码
class AudioPlayer {
	// 初始化
	constructor(selector, url) {
		this.container = document.querySelector(selector);
		this.audio = new Audio(url);
		this.isPlaying = false;
		this.volume = 1.0;

		// 初始化UI
		this.render();
		this.bindEvents();
	}

	// 渲染UI结构
	render() {
		this.container.innerHTML = `
        <div class="player">
          <button class="play-btn">▶</button>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <span class="time">0:00</span>
          <input type="range" class="volume" min="0" max="1" step="0.1">
        </div>
      `;

		// 缓存DOM引用
		this.playBtn = this.container.querySelector('.play-btn');
		this.progressBar = this.container.querySelector('.progress-bar');
		this.timeDisplay = this.container.querySelector('.time');
		this.volumeControl = this.container.querySelector('.volume');
	}

	// 事件绑定
	bindEvents() {
		// 播放/暂停按钮
		this.playBtn.addEventListener('click', () => this.togglePlay());

		// 进度条点击（需计算点击位置百分比）
		this.container.querySelector('.progress').addEventListener('click', (e) => {
			const rect = e.target.getBoundingClientRect();
			const percent = (e.clientX - rect.left) / rect.width;
			this.audio.currentTime = percent * this.audio.duration;
		});

		// 音量控制
		this.volumeControl.addEventListener('input', (e) => {
			this.audio.volume = e.target.value;
		});

		// 音频元数据加载完成
		this.audio.addEventListener('loadedmetadata', () => {
			this.updateDurationDisplay();
		});

		// 播放时间更新
		this.audio.addEventListener('timeupdate', () => {
			this.updateProgress();
			this.updateTimeDisplay();
		});
	}

	// 播放控制
	togglePlay() {
		if (this.isPlaying) {
			this.audio.pause();
		} else {
			this.audio.play();
		}
		this.isPlaying = !this.isPlaying;
		this.playBtn.textContent = this.isPlaying ? '⏸' : '▶';
	}

	// 更新进度条
	updateProgress() {
		const percent = (this.audio.currentTime / this.audio.duration) * 100;
		this.progressBar.style.width = `${percent}%`;
	}

	// 时间显示格式化
	formatTime(seconds) {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}

	// 更新时间显示
	updateTimeDisplay() {
		this.timeDisplay.textContent = `${this.formatTime(
			this.audio.currentTime
		)} / 
         ${this.formatTime(this.audio.duration)}`;
	}
}

// 使用示例
const player = new AudioPlayer('#player-container', 'audio/sample.mp3');
