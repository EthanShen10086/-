Array.prototype.myMap = function (callback) {
	// const arr = this;
	// 创建数组的浅拷贝
	const arr = Array.prototype.slice.call(this);
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i], i, arr));
	}
	return result;
};
