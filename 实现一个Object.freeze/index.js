function myFreeze(obj) {
	const keyList = Object.keys(obj);
	keyList.forEach((key) => {
		if (typeof obj[key] === 'object') {
			myFreeze(obj[key]);
		}
	});
	return Object.freeze(obj);
}
