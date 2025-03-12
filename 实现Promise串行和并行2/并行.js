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
		}, 1000);
	});
}

function c() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(3);
		}, 1000);
	});
}

Promise.all([a(), b(), c()])
	.then((res) => {
		console.log(res.reduce((acc, curr) => acc + curr));
	})
	.catch((err) => {
		console.error(err);
	});
