// 把字符串的字母转换成ascii码加n的字母
// 输入: 'ABC', 1
// 输出: 'BCD'
function asciiAdd(str, n) {
	let res = '';
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code >= 65 && code <= 90) {
			code += n;
			if (code > 90) {
				code -= 26;
			}
		} else if (code >= 97 && code <= 122) {
			code += n;
			if (code > 122) {
				code -= 26;
			}
		}
		res += String.fromCharCode(code);
	}
	return res;
}
