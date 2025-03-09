Function.prototype.myCall = function (context, argList) {
	if (typeof this !== 'function') {
		throw new TypeError('必须是function调用');
	}
	context = context || window;
	const fn = Symbol('fn');
	context[fn] = this;
	const result = context[fn](...argList);
	delete context[fn];
	return result;
};
