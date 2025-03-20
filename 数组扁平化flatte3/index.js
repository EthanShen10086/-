function flatArray(list) {
	return list.flat(Infinity);
}

function flaArray2(list) {
	while (list.some((item) => Array.isArray(item))) {
		list = [].concat(...list);
	}
	return list;
}

function flatArray3(list) {
	const result = [];
	for (let i = 0; i < list.length; i++) {
		if (Array.isArray(list[i])) {
			result = result.concat(flatArray3(list[i]));
		} else {
			result.push(list[i]);
		}
	}
	return result;
}
