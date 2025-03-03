<template>
	<div class="content" ref="contentRef" @scroll="handleScroll">
		<div class="placeholder" :style="{ height: listHeight + 'px' }"></div>
		<div class="list-wrapper" :style="{ transform: getTransform }">
			<div
				class="card-item"
				v-for="(item, i) in renderList"
				:key="i"
				:style="{
					height: itemSize + 'px',
					lineHeight: itemSize + 'px',
					backgroundColor: `rgba(0,0,0,${item / 100})`,
				}"
			>
				{{ item + 1 }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted } from 'vue';

	// 数据初始化
	const listData = ref([]);
	const itemSize = 100;
	const start = ref(0);
	const containerHeight = ref(0);
	const offset = ref(0);
	const contentRef = ref(null);

	// 计算总高度
	const listHeight = computed(() => listData.value.length * itemSize);

	// 计算可视区域元素数量
	const renderCount = computed(() =>
		Math.ceil(containerHeight.value / itemSize)
	);

	// 计算结束索引
	const end = computed(() => start.value + renderCount.value);

	// 计算需要渲染的列表
	const renderList = computed(() =>
		listData.value.slice(start.value, end.value + 1)
	);

	// 计算偏移量
	const getTransform = computed(() => `translate3d(0,${offset.value}px,0)`);

	// 滚动处理
	const handleScroll = (e) => {
		const scrollTop = e.target.scrollTop;
		start.value = Math.floor(scrollTop / itemSize);
		offset.value = scrollTop - (scrollTop % itemSize);
	};

	// 初始化
	onMounted(() => {
		containerHeight.value = contentRef.value.clientHeight;
		// 这里可以添加数据初始化
		listData.value = Array.from({ length: 1000 }, (_, i) => i);
	});
</script>

<style scoped lang="scss">
	.content {
		height: 100vh;
		overflow: auto;
		position: relative;
	}

	.placeholder {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		z-index: -1;
	}

	.list-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
	}

	.card-item {
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		padding: 0 20px;
	}
</style>
