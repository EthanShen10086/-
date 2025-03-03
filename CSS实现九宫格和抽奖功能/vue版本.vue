<template>
	<div class="lottery-container">
		<div class="lottery-grid">
			<div
				v-for="(item, index) in prizes"
				:key="index"
				:class="['lottery-item', { active: index === currentIndex }]"
			>
				{{ item }}
			</div>
		</div>
		<button @click="startLottery" :disabled="isAnimating">抽奖</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				prizes: ['🍎', '🍊', '🍌', '🍉', '🎁', '🍇', '🥑', '🍓', '🍍'], // 奖品
				currentIndex: 0, // 当前位置
				isAnimating: false, // 是否正在抽奖
			};
		},
		methods: {
			startLottery() {
				if (this.isAnimating) return;
				this.isAnimating = true;

				let rounds = 3; // 旋转圈数
				let targetIndex = Math.floor(Math.random() * 9); // 随机中奖位置
				let totalSteps = rounds * 9 + targetIndex; // 总步数
				let speed = 100; // 初始速度（ms）

				const animate = (step) => {
					if (step <= totalSteps) {
						setTimeout(() => {
							this.currentIndex = (this.currentIndex + 1) % 9;
							speed += 5; // 逐步减速
							animate(step + 1);
						}, speed);
					} else {
						this.isAnimating = false;
						alert(`🎉 恭喜你获得 ${this.prizes[targetIndex]}!`);
					}
				};

				animate(0);
			},
		},
	};
</script>

<style scoped>
	.lottery-container {
		text-align: center;
	}
	.lottery-grid {
		display: grid;
		grid-template-columns: repeat(3, 80px);
		gap: 10px;
		justify-content: center;
		margin-bottom: 20px;
	}
	.lottery-item {
		width: 80px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #eee;
		border-radius: 10px;
		font-size: 20px;
	}
	.lottery-item.active {
		background: gold;
	}
	button {
		padding: 10px 20px;
		font-size: 18px;
	}
</style>
