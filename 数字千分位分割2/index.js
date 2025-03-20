function thousandNumber(num) {
	const str = String(num);
	let isNegative = false;
	if (str[0] === '-') {
		str = str.slice(1, -1);
		isNegative = true;
	}
	const [inter, decimal] = str.split('.');
	let result = '';
	let count = 0;
	for (let i = 0; i < inter.length; i++) {
		if (count === 3) {
			result = ',' + result;
			count = 0;
		}
		result = inter[i] + result;
		count++;
	}
	if (decimal) {
		result = result + '.' + decimal;
	}
	if (isNegative) {
		result = '-' + result;
	}
	return result;
}
