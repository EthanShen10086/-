function objectAssign(target, ...sourceList) {
	if (target === null || target === undefined) {
		throw new Error('不得为空');
	}
	const result = Object(target);
	sourceList.forEach((obj) => {
		if (obj !== null) {
			for (let key in obj) {
				if (obj.getOwnProperty(key)) {
					result[key] = obj[key];
				}
			}
		}
	});
	return result;
}
