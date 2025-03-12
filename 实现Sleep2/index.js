function sleep(s) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`sleep ${s}s`);
			resolve();
		}, s * 1000);
	});
}
