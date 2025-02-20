function findIntersection(...list) {
	if (list.length === 0) {
		return [];
	}

	// 将第一个数组作为基准
	let intersectionList = new Set(list[0]);

	for (let i = 0; i < list.length; i++) {
		const currentSet = new Set(list[i]);
		intersectionList = new Set(
			[...intersectionList].filter((item) => currentSet.has(item))
		);
		if (intersectionList.size === 0) {
			return [];
		}
	}
	return [...intersectionList];
}
