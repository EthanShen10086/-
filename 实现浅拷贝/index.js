function shallowCopy1(obj) {
	return Array.isArray(obj) ? [...obj] : { ...obj };
}

function shallowCopy2(obj) {
	return Object.assign({}, obj);
}

function shallowCopy3(target, source1, source2) {
	return Object.assign(target, source1, source2);
}

function shallowCopy4(obj) {
	const newObj = {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
function shallowCopy5(obj) {
	return JSON.parse(JSON.stringify(obj));
}
