function isPromise1(obj) {
	return obj instanceof Promise;
}
function isPromise2(obj) {
	return Object.prototype.slice.call(obj) === '[object, promise]';
}

function isPromise3(obj) {
	return (
		obj !== null &&
		(typeof obj === 'object' || typeof obj === 'function') &&
		typeof obj.then === 'function' &&
		typeof obj.catch === 'function'
	);
}
