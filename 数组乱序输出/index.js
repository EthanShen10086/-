function shuffleList(list) {
	const shuffled = [...list];
	for (let i = list.length - 1; i > 0; i--) {
		// 从尾部开始保证 0-i区间 random -> [0, i) ，+ 1保证了[0, i]
		const j = Math.floor(Math.random() * (1 + i));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
