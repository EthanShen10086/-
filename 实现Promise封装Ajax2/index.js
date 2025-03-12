function promiseAjax(method = 'GET', url, data = null) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url, data);
		xhr.onreadystatechange = function () {
			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
		xhr.onerror = function () {
			reject(new Error(this.statusText));
		};
		xhr.responseType = 'json';
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send(null);
	});
}
