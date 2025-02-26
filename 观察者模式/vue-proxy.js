const obj = {
	name: 'ohh',
	friendA: {
		name: 'AAA',
		age: 18,
	},
};
function _isObject(v) {
	return typeof v === 'object' && v != null;
}
function observe(obj) {
	const proxy = new Proxy(obj, {
		get(target, k) {
			let v = target[k];
			if (_isObject(v)) {
				v = observe(v);
			}
			console.log(k, '读取', v);
			return v;
		},
		set(target, k, val) {
			if (target[k] != val) {
				console.log(k, '更改');
				target[k] = val;
			}
		},
	});
	return proxy;
}
const nObj = observe(obj);
nObj.name;
nObj.friendA.name;
nObj.friendA.name = 'ppp';
nObj.name = 'ahhh';
nObj.aaaaaaaa; //不存在的属性也会被劫持
