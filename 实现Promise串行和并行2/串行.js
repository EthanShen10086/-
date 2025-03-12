function a() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('result from a');
		}, 1000);
	});
}
function b(aResult) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (aResult === 'result from a') {
				resolve('result from b');
			} else {
				reject('error from b');
			}
		}, 1000);
	});
}
function c(bResult) {
	return new Promise((resolve, reject) => {
		if (bResult === 'result from b') {
			resolve('result from c');
		} else {
			reject('error from c');
		}
	}, 1000);
}
a()
	.then((aResult) => b(aResult))
	.then((bResult) => c(bResult))
	.then((finalResult) => {
		console.log(finalResult);
	})
	.catch((error) => {
		console.error(error);
	});
