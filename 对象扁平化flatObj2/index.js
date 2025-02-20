function flatObject(obj, prefix = '') {
	let result = {};
	for (let key in obj) {
		if (
			typeof obj[key] === 'object' &&
			!Array.isArray(obj[key]) &&
			obj[key] !== null
		) {
			const subObj = flatObject(obj[key], prefix + key + '.');
			result = { ...result, ...subObj };
		} else {
			result[prefix + key] = obj[key];
		}
	}
	return result;
}
// const obj = {
// 	a: 1,
// 	b: {
// 		c: 2,
// 		d: {
// 			e: 3,
// 		},
// 	},
// 	f: [1, 2, 3],
// 	g: null,
// };
/* 输出结果：
{
    'a': 1,
    'b.c': 2,
    'b.d.e': 3,
    'f': [1, 2, 3],
    'g': null
}
*/
