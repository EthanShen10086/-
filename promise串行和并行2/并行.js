// 并行：各个函数并不互相干扰，写出如何计算各个函数的返回值的和，如果有rejected的情况，则当做异常处理

function a() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1);
		}, 1000);
	});
}

function b() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		}, 500);
	});
}

function c() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(3);
		}, 1500);
	});
}

Promise.all([a(), b(), c()])
	.then((res) => {
		console.log(res.reduce((acc, curr) => a + b));
	})
	.catch((err) => {
		console.log(err);
	});
