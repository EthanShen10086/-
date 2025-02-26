// 这里ctor就是constructor
function myInstanceOf(obj, ctor) {
	// 获取对象原型
	let proto = Object.getPrototypeOf(obj);
	// 获取构造函数的prototype对象
	let prototype = ctor.prototype;
	// 判断构造函数的prototype对象是否在对象原型链上
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
