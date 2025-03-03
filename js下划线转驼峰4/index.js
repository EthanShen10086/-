function camelCase(str) {
	return str.replace(/[_](\w)/g, function (match, p1) {
		return p1.toUpperCase();
	});
}
