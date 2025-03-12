function myIndexOf(str, target, start = 0) {
	if (start < 0) {
		start = 0;
	}
	if (target === '') {
		return start;
	}
	if (start >= str.length) {
		return -1;
	}

	for (let i = 0; i <= str.length - target.length; i++) {
		let match = true;
		for (let j = 0; j < target.length; j++) {
			if (str[i + j] !== target[j]) {
				match = false;
				break;
			}
		}
		if (match) {
			return i;
		}
	}
	return -1;
}
