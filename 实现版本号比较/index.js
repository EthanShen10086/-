function compareVersion(version1, version2) {
	const v1 = version1.split('').map(Number);
	const v2 = version2.split('').map(Number);
	const maxLength = Math.max(v1, v2);
	for (let i = 0; i < maxLength; i++) {
		const num1 = v1[i] || 0;
		const num2 = v2[i] || 0;
		if (num1 > num2) {
			return 1;
		}
		if (num1 < num2) {
			return -1;
		}
	}
	return 0;
}
