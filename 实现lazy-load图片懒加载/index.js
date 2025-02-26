const imgs = document.getElementsByTagName('img');
const viewHeight = window.innerHeight || document.documentElement.clientHeight;

let num = 0;

function lazyLoad() {
	for (let i = 0; i < imgs.length; i++) {
		// 计算图片距离视口顶部的距离
		// getBoundingClientRect().top 获取元素顶部相对于视口的位置
		// viewHeight - top 就是图片顶部距离视口底部的距离
		let distance = viewHeight - imgs[i].getBoundingClientRect().top;
		if (distance >= 0) {
			// 将真实图片地址从 data-src 属性替换到 src 属性
			imgs[i].src = imgs[i].getAttribute('data-src');
			num = i + 1;
		}
	}
}
window.addEventListener('scroll', lazyLoad, false);
/*
<img data-src="real-image-url.jpg" src="placeholder.jpg">
<img data-src="real-image-url2.jpg" src="placeholder.jpg">
*/
