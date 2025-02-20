function multiplyLargeNumbers(num1, num2) {
	const n1 = num1.split('').reverse();
	const n2 = num2.split('').reverse();
	const result = new Array(n1.length + n2.length).fill(0);
	for (let i = 0; i < n1.length; i++) {
		for (let j = 0; j < n2.length; j++) {
			result[i + j] += parseInt(n1[i]) * parseInt(n2[j]);
		}
	}
	for (let i = 0; i < result.length - 1; i++) {
		if (result[i] >= 10) {
			result[i + 1] += Math.floor(result[i] / 10);
			result[i] = result[i] % 10;
		}
	}
	while (result.length > 1 && result[result.length - 1] === 0) {
		result.pop();
	}
	return result.reverse().join('');
}
