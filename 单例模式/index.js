function getSingleInstance(func) {
	let instance;
	let handler = {
		construct(target, args) {
			if (!instance) instance = Reflect.construct(func, args);
			return instance;
		},
	};
	return new Proxy(func, handler);
}
