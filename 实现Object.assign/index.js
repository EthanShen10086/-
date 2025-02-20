function objectAssign(target, ...sourceList) {
	if (target === null || target === undefined) {
		throw new TypeError('必须非null undefined');
	}
	const to = Object(target);
	sourceList.forEach((item) => {
		if (item != null) {
			for (let key of Object.keys(item)) {
				to[key] = item[key];
			}
		}
	});
	return to;
}
