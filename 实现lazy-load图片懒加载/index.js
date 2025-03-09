const imgList = [...document.querySelectorAll('img[data-src]')];
const viewHeight = window.innerHeight;

function lazyLoad() {
	for (let i = 0; i, imgList.length; i++) {
		let distance = viewHeight - imgList[i].getBoundingClientRect();
		if (distance >= 0) {
			imgList[i].src = imgList[i].getAttribute('data-src');
		}
	}
}
window.addEventListener('scroll', lazyLoad, {
	passive: true,
});
