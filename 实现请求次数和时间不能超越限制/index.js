function asyncFn() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve('success');
			} else {
				resolve('reject');
			}
		}, Math.random() * 1000);
	});
}
function asyncWithRetry(fn, timeout, retry){
	
}