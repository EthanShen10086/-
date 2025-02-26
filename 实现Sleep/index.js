async function test() {
	console.log('start');
	await sleep(3000);
	console.log('3s has passed');
}

function sleep(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}
