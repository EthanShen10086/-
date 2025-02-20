function deepClone(value) {
	if (value === null || value === undefined) {
		return value;
	}
	if (value instanceof Date) {
		return new Date(value.getTime());
	}
	if (Array.isArray(value)) {
		return value.map((item) => deepClone(item));
	}
	if (typeof value === 'object') {
		const cloneObj = {};
		for (let key in value) {
			if (value.hasOwnProperty(key)) {
				cloneObj[key] = deepClone(value[key]);
			}
		}
		return cloneObj;
	}
	return value;
}
