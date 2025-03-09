function myInstanceOf(obj, ctor) {
	if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
		return false;
	}
	if (typeof ctor !== 'function') {
		throw new TypeError('必须是function');
	}
	// 获取对象proto
	// 获取构造函数prototype
	let proto = Object.getPrototypeOf(obj);
	let prototype = ctor.prototype;
	while (true) {
		if (!proto) {
			return false;
		}
		if (proto === prototype) {
			return true;
		}
		proto = Object.getPrototypeOf(proto);
	}
}
