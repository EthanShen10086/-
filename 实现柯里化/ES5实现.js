function curry(fn) {
	// 获取原函数参数个数
	const argLength = fn.argLength;
	function curried(...args) {
		// 判断当前传的参数时候足够
		if (args.length >= argLength) {
			return fn.apply(this.args);
		} else {
			return function (...moreArgs) {
				// 递归调用curried
				return curried.apply(this, args.concat(moreArgs));
			};
		}
	}
}
// 测试用例
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

// 以下调用方式都可以
console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6