function bigNumberMultiply(str1, str2) {
	const str1Length = str1.length;
	const str2Length = str2.length;
	const result = Array.from(
		{
			length: str1Length + str2Length,
		},
		() => 0
	);
	for (let i = str1Length - 1; i >= 0; i--) {
		for (let j = str2Length - 1; j >= 0; j--) {
			let mul = Number(str1[i]) * Number(str2[j]);
			let sum = mul + result[i + j + 1];
			// 存个位
			result[i + j + 1] = sum % 10;
			// 进位存到后一位 最后要去掉的
			result[i + j] += Math.floor(sum / 10);
		}
	}
	// for循环是逆着来的 所以其实是从前往后存的 所以要去掉前面的0
	while (result.length > 1 && result[0] === 0) {
		result.shift();
	}
	return result.join('');
}
