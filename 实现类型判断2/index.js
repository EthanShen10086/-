function getType(value) {
	if (value === null) {
		return value + '';
	}
	if (typeof value === 'object') {
		return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
	} else {
		return typeof value;
	}
}
