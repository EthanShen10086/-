// 防抖是n秒内会重新计时; 
function debounce(fn, wait) {
	let timer = null;
	return function () {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, wait);
	};
}
