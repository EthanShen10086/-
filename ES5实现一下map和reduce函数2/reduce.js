Array.prototype.myReduce = function (callback, initialValue) {
	// const arr = this;
	// 创建数组的浅拷贝
	let arr = Array.prototype.slice.call(this);
	let len = arr.length;
	// 处理reduce不传的情况
	let acc = initialValue ? initialValue : arr[0];
	for (let i = 0; i < len; i++) {
		if (!acc && i === 0) {
			acc = arr[0];
		} else {
			acc = callback(acc, arr[i], i, this);
		}
	}
	return acc;
};

// 实现Array.prototype.reduce: reduce() 方法对数组中的每个元素按序执行一个提供的 reducer 函数，
// 每一次运行 reducer 会将先前元素的计算结果作为参数传入，
// 最后将其结果汇总为单个返回值。 第一次执行回调函数时，不存在“上一次的计算结果”。
// 如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。
// 否则，数组索引为 0 的元素将被用作初始值，迭代器将从第二个元素开始执行（即从索引为 1 而不是 0 的位置开始）。

// 类数组对象
// const arrayLike = {
// 	0: 'a',
// 	1: 'b',
// 	2: 'c',
// 	length: 3,
// };

// // 转换为真正的数组
// const realArray = Array.prototype.slice.call(arrayLike);
// console.log(realArray); // ['a', 'b', 'c']
