// 串行：c函数依赖于b函数的返回值，b函数依赖于a函数的返回值，中间要注意处理rejected的情况，请用promise串行写。
function a() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('result form a');
		}, 1000);
	});
}
function b(aResult) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (aResult === 'result form a') {
				resolve('result form b');
			} else {
				reject('error form b');
			}
		}, 1000);
	});
}
function c(bResult) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (bResult === 'result form b') {
				resolve('result form c');
			} else {
				reject('error form c');
			}
		}, 1000);
	});
}
a()
	.then((aResult) => b(aResult))
	.then((bResult) => c(bResult))
	.then((finalResult) => console.log(finalResult))
	.catch((error) => console.log(error));
