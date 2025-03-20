// 把字符串的字母转换成ascii码加n的字母
// 输入: 'ABC', 1
// 输出: 'BCD'

const ASCII_A = 65;
const ASCII_Z = 90;
const ASCII_a = 97;
const ASCII_z = 122;

function asciiAdd(str, n) {
	let result = '';
	n = n % 26;
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code >= ASCII_A && code <= ASCII_Z) {
			code = ((code - ASCII_A + n + 26) % 26) + ASCII_A;
		} else if (code >= ASCII_a && code <= ASCII_z) {
			code = ((code - ASCII_a + n + 26) % 26) + ASCII_a;
		}
		result += String.fromCharCode(code);
	}
	return result;
}
