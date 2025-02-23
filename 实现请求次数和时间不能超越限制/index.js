const asyncFn = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve('success');
			} else {
				reject('fail');
			}
		}, Math.random() * 1000);
	});
};
const controlFn = async (fn, maxCount, maxTime) => {
	let currentCount = 0;
	let isTimeout = false;
	let isSuccess = false;
	setTimeout(() => {
		isTimeout = true;
	}, maxTime);

	while (!isTimeout && !isSuccess) {
		if (currentCount >= maxCount) {
			// 当达到最大并发数时，暂停1秒
			// 完整版本
			// await new Promise((resolve) => {
			// 	setTimeout(() => {
			// 		resolve();
			// 	}, 1000);
			// });
			await new Promise((resolve) => setTimeout(resolve, 1000));
		} else {
			// 增加当前请求数
			currentCount++;
			fn()
				.then(() => {
					isSuccess = true;
				})
				.catch(() => {
					// 失败后减少请求数，允许新的请求
					currentCount--;
				});
		}
	}
};
controlFn(asyncFn, 3, 5000);
