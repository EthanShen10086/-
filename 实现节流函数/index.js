function throttle(fn, delay) {
	let timer = null;
	return function () {
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			timer = null;
			return fn.apply(this, arguments);
		}, delay);
	};
}

