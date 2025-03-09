const imgList = [...document.querySelectorAll('img[data-src]')];

const observer = new IntersectionObserver(
	(entryList) => {
		entryList.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src;
				observer.unobserve(img);
			}
		});
	},
	{
		rootMargin: '200px 0',
	}
);

imgList.forEach((img) => {
	observer.observe(img);
});
