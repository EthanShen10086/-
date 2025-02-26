function ajax({ url, method = 'GET', data = null, headers = {} }) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		method = method.toUpperCase();
		if (method === 'GET' && data) {
			const queryString = Object.keys(data)
				.map(
					(key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
				)
				.join('&');
			url = `${url}${url.includes('?') ? '&' : '?'}${queryString}`;
		}
		xhr.open(method, url, true);
		Object.keys(headers).forEach((key) => {
			xhr.setRequestHeader(key, headers[key]);
		});
		if (method === 'POST' && !headers['Content-Type']) {
			xhr.setRequestHeader('Content-Type', 'application/json');
		}
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						const response = JSON.parse(xhr.responseText);
						resolve(response);
					} catch (e) {
						resolve(xhr.responseText);
					}
				} else {
					reject(new Error(`请求失败：${xhr.status}`));
				}
			}
		};
		xhr.onerror = () => reject(new Error('网络错误'));
		xhr.ontimeout = () => reject(new Error('请求超时'));
		if (method === 'POST' && data) {
			xhr.send(JSON.stringify(data));
		} else {
			xhr.send();
		}
	});
}

// 似乎有更简单的方式
// promise 封装实现：
function easyAjaxPromise(url) {
	// 创建一个 promise 对象
	let promise = new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		// 新建一个 http 请求
		xhr.open('GET', url, true);
		// 设置状态的监听函数
		xhr.onreadystatechange = function () {
			if (this.readyState !== 4) return;
			// 当请求成功或失败时，改变 promise 的状态
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
		// 设置错误监听函数
		xhr.onerror = function () {
			reject(new Error(this.statusText));
		};
		// 设置响应的数据类型
		xhr.responseType = 'json';
		// 设置请求头信息
		xhr.setRequestHeader('Accept', 'application/json');
		// 发送 http 请求
		xhr.send(null);
	});
	return promise;
}

// 使用示例
// GET 请求
ajax({
	url: 'https://api.example.com/data',
	method: 'GET',
	data: { id: 1 },
})
	.then((response) => {
		console.log('成功：', response);
	})
	.catch((error) => {
		console.error('失败：', error);
	});

// POST 请求
ajax({
	url: 'https://api.example.com/create',
	method: 'POST',
	data: { name: '张三', age: 20 },
	headers: {
		Authorization: 'Bearer token',
	},
})
	.then((response) => {
		console.log('成功：', response);
	})
	.catch((error) => {
		console.error('失败：', error);
	});
