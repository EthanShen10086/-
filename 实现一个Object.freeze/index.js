function myFreeze(obj) {
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}
	const keyList = Object.keys(obj);
	keyList.forEach((key) => {
		Object.defineProperty(obj, key, {
			// 不能删除
			configurable: false,
			// 不能修改
			writable: false,
		});
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			myFreeze(obj[key]);
		}
	});
	return obj;
}
