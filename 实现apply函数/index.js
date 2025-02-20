Function.prototype.myApply = function (context, args) {
	if (typeof this !== 'function') {
		throw new TypeError('Caller must be a function');
	}
	context = context || window;
	const fn = Symbol();
	context[fn] = this;
	const result = args ? context[fn](...args) : context[fn]();
	delete context[fn];
	return result;
};
