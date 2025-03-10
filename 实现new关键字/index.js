function myNew() {
	let obj = null;
	const [constructor, ...args] = arguments;
	if (typeof constructor !== 'function') {
		throw new Error('必须是function');
	}
	obj = Object.create(constructor.prototype);
	const result = obj.apply(obj, arguments);
	return result && (typeof result === 'function' || typeof result === 'object')
		? result
		: obj;
}
