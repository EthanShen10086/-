function fetchWithTimeoutRetry(url, option = {}, timeout = 5000, retry = 3) {
	const controller = new AbortController();
	// 设置超时
	let timer = setTimeout(() => controller.abort(), timeout);
	const finalOption = {
		...option,
		signal: controller.signal,
	};
	const fetchRetry = async (leftRetry) => {
		try {
			const res = await fetch(url, finalOption);
			clearTimeout(timer);
			return res;
		} catch (error) {
			if (
				leftRetry > 1 &&
				(error.name === 'AbortError' || error.message === 'timeout')
			) {
				return fetchRetry(leftRetry - 1);
			}
			throw error;
		}
	};
	return fetchRetry(retry);
}
