function es6Curry(fn, ...args) {
	return fn.length <= args.length
		? fn(...args)
		: es6Curry.bind(null, fn, ...args);
}
