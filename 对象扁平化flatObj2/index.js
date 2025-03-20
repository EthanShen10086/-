function flatObject(obj, prefix = '') {
	let result = {};
	for (let key in obj) {
		if (
			typeof obj[key] === 'object' &&
			!Array.isArray(obj[key]) &&
			obj[key] !== null
		) {
			const subObj = flatObject(obj[key], prefix + key + '.');
			result = { ...result, ...subObj };
		} else {
			result[prefix + key] = obj[key];
		}
	}
	return result;
}
