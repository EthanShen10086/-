function addLargeNumbers(num1, num2) {
	let str1 = String(num1);
	let str2 = String(num2);

	let result = '';
	let carry = 0;
	let i = str1.length - 1;
	let j = str2.length - 1;

	while (i >= 0 || j >= 0 || carry > 0) {
		const digit1 = i >= 0 ? Number(str1[i]) : 0;
		const digit2 = j >= 0 ? Number(str2[j]) : 0;
		const sum = digit1 + digit2 + carry;
		result = (sum % 10) + result;
		carry = Math.floor(sum / 10);
		i--;
		j--;
	}
	return result;
}
