function add(a, b) {
	const factor = Math.pow(
		10,
		Math.max(
			(String(a).split('.')[1] || '').length,
			(String(b).split('.')[1] || '').length
		)
	);
	return (a * factor + b * factor) / factor;
}
