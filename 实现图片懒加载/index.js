// Get all images that have data-src attribute
const images = document.querySelectorAll('img[data-src]');

// Create IntersectionObserver instance
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // When image enters viewport
    if (entry.isIntersecting) {
      const img = entry.target;
      // Replace src with data-src
      img.src = img.dataset.src;
      // Remove data-src after loading
      img.removeAttribute('data-src');
      // Stop observing this image
      observer.unobserve(img);
    }
  });
}, {
  // Start loading when image is 50px away from viewport
  rootMargin: '50px 0px',
  threshold: 0.01
});

// Start observing each image
images.forEach(image => {
  imageObserver.observe(image);
});

