const map = new Map();
const observeFn = (key, fn) => {
	if (!map.has(key)) {
		map.set(key, new Set());
	}
	map.get(key).add(fn);
};
const observeObj = (obj) => {
	new Proxy(obj, {
		set(target, key, value, receiver) {
			const result = Reflect.set(target.key, value, receiver);
			if (map.has(key)) {
				map.get(key).forEach((func) => func());
			}
			return result;
		},
	});
};

const obj = observeObj({ name: 'yyh' });
observeFn(() => console.log(`new Name:${obj.name}`));
obj.name = 'new yyh';
