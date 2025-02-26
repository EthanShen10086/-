// 使用 IntersectionObserver
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const img = entry.target;
			img.src = img.dataset.src;
			observer.unobserve(img);
		}
	});
});

// 观察所有图片
imgs.forEach((img) => observer.observe(img));
