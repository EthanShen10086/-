// 主要就是同步改异步
function sendAsyncRequest(urlList, max = 3) {
	let currentIndex = max;

	function sendRequest(index) {
		console.log('开始请求', index);
		fetch(urlList[index]).then(() => {
			console.log('完成请求', index);
			if (currentIndex < urlList.length) {
				sendRequest(currentIndex++);
			}
		});
	}

	for (let i = 0; i < max; i++) {
		sendRequest(i);
	}
}

// 一个选手跑完就让下一个选手上
const urlList = ['url1', 'url2', 'url3', 'url4', 'url5'];
sendAsyncRequest(urlList);
