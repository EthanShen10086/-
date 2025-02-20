// Method 1: Using flat()
const flatten1 = (arr) => {
	return arr.flat(Infinity);
};

// Method 2: Using reduce and recursion
const flatten2 = (arr) => {
	return arr.reduce((prev, curr) => {
		return prev.concat(Array.isArray(curr) ? flatten2(curr) : curr);
	}, []);
};

// Method 3: Using toString and split
const flatten3 = (arr) => {
	return arr
		.toString()
		.split(',')
		.map((item) => Number(item));
};

// Method 4: Using while loop and some
const flatten4 = (arr) => {
	while (arr.some((item) => Array.isArray(item))) {
		arr = [].concat(...arr);
	}
	return arr;
};

// Method 5: Using recursive function
// ✨
const flatten5 = (arr) => {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten5(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
};
