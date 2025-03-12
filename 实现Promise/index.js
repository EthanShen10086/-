const PENDING = 'pending';
const RESOLVE = 'resolve';
const REJECT = 'rejected';

function MyPromise(fn) {
	const self = this;
	this.state = PENDING;
	this.value = null;
	this.reason = null;
	this.resolveCallbackList = [];
	this.rejectCallbackList = [];
	function resolve(value) {
		if (value instanceof MyPromise) {
			value.then(resolve, reject);
		}
		// 确保代码执行顺序为本轮事件循环末尾
		setTimeout(() => {
			if (self.state === PENDING) {
				self.state = RESOLVE;
				self.value = value;
				self.rejectCallbackList.forEach((cb) => {
					cb(value);
				});
			}
		}, 0);
	}
	function reject(reason) {
		setTimeout(() => {
			if (self.state === PENDING) {
				self.state = REJECT;
				self.reason = reason;
				self.resolveCallbackList.forEach((cb) => {
					cb(reason);
				});
			}
		}, 0);
	}
	try {
		fn(resolve, reject);
	} catch (e) {
		reject(e);
	}
}
MyPromise.then = function (onFulfilled, onReject) {
	const self = this;
	return new MyPromise((resolve, reject) => {
		let fulfilled = () => {
			try {
				const result = onFulfilled(self.value);
				return result instanceof MyPromise
					? result.then(result)
					: resolve(result);
			} catch (e) {
				reject(e);
			}
		};
		let rejected = () => {
			try {
				const result = onReject(self.reason);
				return result instanceof MyPromise
					? result.then(resolve, reject)
					: reject(result);
			} catch (e) {
				reject(e);
			}
		};

		switch (self.state) {
			case PENDING:
			case RESOLVE:
			case REJECT:
		}
	});
};
MyPromise.all = function (promiseList) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promiseList)) {
			throw new Error('必须是可遍历的');
		}
		const result = [];
		let count = 0;
		let total = promiseList.length;
		if (total === 0) {
			resolve([]);
			return;
		}
		promiseList.forEach((promise, index) => {
			Promise.resolve(promise)
				.then((value) => {
					result[index] = value;
					count++;
					if (count === total) {
						resolve(result);
					}
				})
				.catch((error) => {
					reject(error);
				});
		});
	});
};

MyPromise.race = function (promiseList) {
	return new MyPromise((resolve, reject) => {
		promiseList.forEach((promise) => {
			Promise.resolve(promise).then(resolve, reject);
		});
	});
};

MyPromise.raceWithRetry = function (promiseFn, timeout = 3000, retry = 3) {
	// 创建超时 Promise
	const timeoutPromise = new MyPromise((_, reject) => {
		setTimeout(() => reject(new Error('timeout'), timeout));
	});
	// 创建重试函数
	const attemptWithTimeout = async (attemptCount) => {
		try {
			const result = await Promise.race([promiseFn(), timeoutPromise]);
			return result;
		} catch (error) {
			if (error.message === 'timeout' && attemptCount < retry) {
				console.log(`第${attemptCount + 1}次超时`);
				return attemptWithTimeout(attemptCount + 1);
			}
			throw error;
		}
	};
	return attemptWithTimeout(0);
};
