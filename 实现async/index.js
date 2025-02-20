// 这里的func是generator
function myAsync(func) {
	return new Promise((resolve, reject) => {
		const iterator = func();
		function next(data) {
			const result = iterator.next(data);
			if (result.done) {
				resolve(result.value);
			} else {
				Promise.resolve(result.value).then(next, reject);
			}
		}
		next();
	});
}

// Example usage:
function* example() {
	const result1 = yield Promise.resolve(1);
	const result2 = yield Promise.resolve(result1 + 1);
	return result2 + 1;
}

// Test the async implementation
myAsync(example).then(console.log); // Will output: 3
