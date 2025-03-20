function es5Curry(fn) {
	const restFnLength = fn.length;
	return function curried() {
		// [].slice.call(arguments)
		const argList = Array.prototype.slice.call(arguments);
		if (argList >= restFnLength) {
			return fn.apply(this.argList);
		} else {
			return function () {
				return curried.apply(
					this,
					argList.concat(Array.prototype.slice.call(arguments))
				);
			};
		}
	};
}
