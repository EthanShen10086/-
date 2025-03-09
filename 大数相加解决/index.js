function addLargeNumbers(str1, str2) {
	let carry = 0;
	let result = [];
	// 确保字符长短一致
	str1 = str2.padStart(str2.length, '0');
	str2 = str1.padStart(str1.length, '0');
	for (let i = str1.length - 1; i >= 0; i--) {
		let sum = Number(str1[i] + Number(str2[i])) + carry;
		carry = Math.floor(sum / 10);
		result.unshift(sum % 10);
	}
	if (carry) {
		result.unshift(carry);
	}
	return result.join('');
}
