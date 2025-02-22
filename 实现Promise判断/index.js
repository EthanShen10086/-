// 方法一：通过 instanceof 判断
function isPromise1(obj) {
	return obj instanceof Promise;
	//     - 优点：简单直接
	// - 缺点：无法识别其他实现的 Promise（如 bluebird）
}

// 方法二：通过对象特征判断（推荐）
function isPromise2(obj) {
	//     - 优点：更准确，可以识别类 Promise 对象
	// - 缺点：可能会有假阳性（有 then 方法但不是 Promise）
	return (
		obj !== null &&
		(typeof obj === 'object' || typeof obj === 'function') &&
		typeof obj.then === 'function' &&
		typeof obj.catch === 'function'
	);
}

// 方法三：通过 toString 判断
function isPromise3(obj) {
	//     - 优点：可以准确识别原生 Promise
	// - 缺点：无法识别自定义 Promise 实现
	return Object.prototype.toString.call(obj) === '[object Promise]';
}
function isPromiseLike(obj) {
	try {
		// 基础类型检查
		if (!obj) return false;

		// 类型检查
		if (typeof obj !== 'object' && typeof obj !== 'function') {
			return false;
		}

		// Promise 实例检查
		if (obj instanceof Promise) return true;

		// Thenable 对象检查
		if (typeof obj.then === 'function' && typeof obj.catch === 'function') {
			return true;
		}

		// 原生 Promise 检查
		if (Object.prototype.toString.call(obj) === '[object Promise]') {
			return true;
		}

		return false;
	} catch (e) {
		return false;
	}
}

// 使用示例
async function demo() {
	const cases = [
		Promise.resolve(123),
		new Promise((resolve) => resolve(1)),
		{ then: () => {}, catch: () => {} },
		{ then: 123 },
		null,
		undefined,
		123,
		'string',
		{ a: 1 },
	];

	cases.forEach((item) => {
		console.log(`${item} 是Promise吗？`, isPromiseLike(item));
	});
}
