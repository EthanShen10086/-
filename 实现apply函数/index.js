Function.prototype.myApply = function (context, argList) {
	if (typeof this !== 'function') {
		throw new TypeError('必须是function调用');
	}
	context = context || window;
	const fn = Symbol('fn');
	context[fn] = this;
	// 在新的context 传入参数并执行
	const result = argList ? context[fn](...argList) : context[fn]();
	delete context[fn];
	return result;
};
