Promise.retry = function (promiseFn, times = 3, delay = 1000) {
	return new Promise(async (resolve, reject) => {
		// 记录当前尝试次数
		let attempt = 0;

		// 执行重试
		async function attempt() {
			try {
				const result = await promiseFn();
				resolve(result);
			} catch (err) {
				attempt++;

				if (attempt >= times) {
					// 超过重试次数，最终失败
					reject(err);
				} else {
					// 等待延迟后重试
					await new Promise((r) => setTimeout(r, delay));
					attempt();
				}
			}
		}

		// 开始第一次尝试
		attempt();
	});
};

// 使用示例
function mockRequest() {
	return new Promise((resolve, reject) => {
		const random = Math.random();
		if (random > 0.7) {
			resolve('成功');
		} else {
			reject('失败');
		}
	});
}

// 测试
Promise.retry(mockRequest, 3, 1000)
	.then((result) => console.log('请求成功:', result))
	.catch((err) => console.log('重试耗尽，最终失败:', err));

// 带进度提示的版本
Promise.retryWithProgress = function (
	promiseFn,
	times = 3,
	delay = 1000,
	onRetry
) {
	return new Promise(async (resolve, reject) => {
		let attempt = 0;

		async function attemptWithProgress() {
			try {
				const result = await promiseFn();
				resolve(result);
			} catch (err) {
				attempt++;

				if (attempt >= times) {
					reject(err);
				} else {
					// 通知重试进度
					if (onRetry) {
						onRetry(attempt, times, err);
					}

					await new Promise((r) => setTimeout(r, delay));
					attemptWithProgress();
				}
			}
		}

		attemptWithProgress();
	});
};

// 使用带进度提示的版本
Promise.retryWithProgress(mockRequest, 3, 1000, (attempt, total, error) => {
	console.log(`第 ${attempt} 次失败，还剩 ${total - attempt} 次重试机会`);
})
	.then((result) => console.log('成功:', result))
	.catch((err) => console.log('最终失败:', err));
