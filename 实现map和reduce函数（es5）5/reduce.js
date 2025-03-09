Array.prototype.myReduce = function (callback, initValue) {
	const list = Array.prototype.slice.call(this);
	// 如果没有initValue取第一个 循环从第二个开始
	let acc = initValue ? initValue : list[0];
	let startIndex = initValue ? 0 : 1;
	for (let i = startIndex; i < list.length; i++) {
		acc = callback(acc, list[i], i, list);
	}
	return acc;
};
