function myAwait(data) {
	if (data instanceof Promise) {
		return data.then(
			(res) => res,
			(err) => {
				throw err;
			}
		);
	}
	return Promise.resolve(data);
}
