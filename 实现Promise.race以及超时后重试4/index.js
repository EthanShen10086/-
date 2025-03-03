// 实现 Promise.race
Promise.myRace = function (promises) {
	return new Promise((resolve, reject) => {
		promises.forEach((promise) => {
			Promise.resolve(promise).then(resolve, reject);
		});
	});
};

// 实现带超时重试的 Promise.race
Promise.raceWithRetry = function (promiseFn, timeout = 3000, retries = 3) {
	// 创建超时 Promise
	const timeoutPromise = new Promise((_, reject) => {
		setTimeout(() => reject(new Error('Timeout')), timeout);
	});

	// 创建重试函数
	const attemptWithTimeout = async (attemptCount) => {
		try {
			// 执行 race
			const result = await Promise.race([promiseFn(), timeoutPromise]);
			return result;
		} catch (error) {
			if (error.message === 'Timeout' && attemptCount < retries) {
				console.log(`第 ${attemptCount + 1} 次超时，准备重试`);
				return attemptWithTimeout(attemptCount + 1);
			}
			throw error;
		}
	};

	return attemptWithTimeout(0);
};

// 测试用例
async function test() {
	// 测试 Promise.race
	const promise1 = new Promise((resolve) =>
		setTimeout(() => resolve('快'), 100)
	);
	const promise2 = new Promise((resolve) =>
		setTimeout(() => resolve('慢'), 200)
	);

	const result = await Promise.myRace([promise1, promise2]);
	console.log('Race 结果:', result); // 输出: '快'

	// 测试带超时重试的版本
	const mockRequest = () =>
		new Promise((resolve, reject) => {
			const delay = Math.random() * 5000; // 随机延迟 0-5 秒
			setTimeout(() => {
				if (delay < 4000) {
					resolve(`成功，耗时 ${delay.toFixed(0)}ms`);
				} else {
					reject(new Error('请求失败'));
				}
			}, delay);
		});

	try {
		const result = await Promise.raceWithRetry(mockRequest, 2000, 3);
		console.log('请求成功:', result);
	} catch (error) {
		console.log('最终失败:', error.message);
	}
}

test();
