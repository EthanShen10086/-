<template>
	<div class="virtual-list" ref="listRef" @scroll="handleScroll">
		<div class="phantom" :style="{ height: totalHeight + 'px' }"></div>
		<div class="content" :style="{ transform: `translateY(${offset}px)` }">
			<div
				v-for="item in visibleData"
				:key="item.id"
				class="list-item"
				:ref="setItemRef"
			>
				{{ item.content }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted, nextTick } from 'vue';

	// Data and refs
	const listRef = ref(null);
	const itemRefs = ref([]);
	const offset = ref(0);
	const itemHeights = ref({});
	const visibleCount = ref(0);
	const startIndex = ref(0);
	const data = ref(
		Array.from({ length: 1000 }, (_, i) => ({
			id: i,
			content: `Item ${i}`,
			height: Math.random() * 50 + 50, // Random height between 50-100px
		}))
	);

	// Calculate visible items
	const visibleData = computed(() => {
		return data.value.slice(
			startIndex.value,
			startIndex.value + visibleCount.value
		);
	});

	// Calculate total height
	const totalHeight = computed(() => {
		return data.value.reduce((acc, item) => {
			return acc + (itemHeights.value[item.id] || 60); // Default height 60px
		}, 0);
	});

	// Set item ref for height measurement
	const setItemRef = (el) => {
		if (el) {
			itemRefs.value.push(el);
		}
	};

	// Handle scroll event
	const handleScroll = () => {
		if (!listRef.value) return;

		const scrollTop = listRef.value.scrollTop;
		let currentHeight = 0;
		let newStartIndex = 0;

		// Find start index based on scroll position
		for (let i = 0; i < data.value.length; i++) {
			const height = itemHeights.value[data.value[i].id] || 60;
			if (currentHeight + height > scrollTop) {
				newStartIndex = i;
				break;
			}
			currentHeight += height;
		}

		startIndex.value = newStartIndex;
		offset.value = currentHeight;
	};

	// Initialize
	onMounted(async () => {
		if (!listRef.value) return;

		// Calculate initial visible count
		const containerHeight = listRef.value.clientHeight;
		visibleCount.value = Math.ceil(containerHeight / 60) + 2; // Buffer items

		// Measure initial item heights
		await nextTick();
		itemRefs.value.forEach((item, index) => {
			const itemId = data.value[index].id;
			itemHeights.value[itemId] = item.offsetHeight;
		});
	});
</script>

<style scoped>
	.virtual-list {
		height: 400px;
		overflow-y: auto;
		position: relative;
	}

	.phantom {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		z-index: -1;
	}

	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.list-item {
		padding: 10px;
		border-bottom: 1px solid #eee;
	}
</style>
