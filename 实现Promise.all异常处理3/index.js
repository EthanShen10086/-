function myPromiseAll(promiseList) {
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
}
