function getType(obj) {
	if (obj === null) {
		return obj + '';
	}
	if (typeof obj === 'object') {
		return String.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	} else {
		return typeof obj;
	}
}
