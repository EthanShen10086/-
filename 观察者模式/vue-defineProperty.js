const obj = {
	name: 'ohh',
	friendA: {
		name: 'AAA',
		age: 18,
		friends: {
			name: 'BBB',
			age: 20,
		},
	},
};
function _isObject(v) {
	return typeof v === 'object' && v != null;
}
function observe(obj) {
	for (const k in obj) {
		let v = obj[k];
		if (_isObject(v)) {
			observe(v);
		}
		Object.defineProperty(obj, k, {
			get() {
				console.log(k, '读取');
				return k;
			},
			set(val) {
				if (val != v) {
					console.log(k, '更改');
					v = val;
				}
			},
		});
	}
}
// 观察者模式
observe(obj);
obj.name;
obj.name = 'ahhh';
