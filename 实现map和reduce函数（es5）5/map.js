Array.prototype.myMap = function (callback) {
	const list = Array.prototype.slice.call(this);
	const result = [];
	for (let i = 0; i < list.length; i++) {
		result.push(callback(list[i], i, list));
	}
	return result;
};
