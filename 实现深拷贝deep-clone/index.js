function deepClone(obj) {
	if (obj === null || obj === undefined) {
		return obj;
	}
	if (obj instanceof Date) {
		return new Date(obj.getTime());
	}
	if (Array.isArray(obj)) {
		return obj.map((item) => {
			return deepClone(item);
		});
	}
	if (typeof obj === 'object') {
		let newObj = {};
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] = deepClone(obj[key]);
			}
		}
		return newObj;
	}
	return obj;
}
