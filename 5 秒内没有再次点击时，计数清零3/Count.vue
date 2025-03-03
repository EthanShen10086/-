<template>
	<div class="counter">
		<h2>计数器: {{ count }}</h2>
		<button @click="handleClick">点击 +1</button>
	</div>
</template>

<script setup>
	import { ref, onBeforeUnmount } from 'vue';

	const count = ref(0);
	let timer = null;

	function handleClick() {
		count.value++;

		// 清除之前的定时器
		if (timer) {
			clearTimeout(timer);
		}

		// 设置新的定时器
		timer = setTimeout(() => {
			count.value = 0;
		}, 5000);
	}

	// 组件销毁时清除定时器
	onBeforeUnmount(() => {
		if (timer) {
			clearTimeout(timer);
		}
	});
</script>
