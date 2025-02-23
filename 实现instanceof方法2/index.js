// 这里ctor就是constructor
function myInstanceOf(obj, ctor) {
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
