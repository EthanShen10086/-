// Function to format number with thousand separators
function formatNumber(num) {
	let str = String(num);
	let parts = str.split('.');
	let integerPart = parts[0];
	let decimalPart = parts[1];
	if (str.length <= 3) {
		return str;
	} else {
		let result = '';
		let count = 0;
		for (let i = integerPart.length - 1; i >= 0; i--) {
			if (count === 3) {
				result = ',' + result;
				count = 0;
			}
			result = integerPart[i] + result;
			count++;
		}
		// Add decimal part if it exists
		if (decimalPart) {
			result += '.' + decimalPart;
		}
	}
	return result;
}
