function createReactive(obj) {
	return new Proxy(obj, {
		get(target, key) {
			console.log(`获取属性 ${key}，值为：${target[key]}`);
			return target[key];
		},
		set(target, key, value) {
			console.log(`修改属性 ${key}，新值为：${value}`);
			target[key] = value;
			return true;
		},
	});
}

// 示例对象
let data = { name: 'Vue', version: 3 };

// 使用 Proxy 劫持
let reactiveData = createReactive(data);

console.log(reactiveData.name); // 触发 getter
reactiveData.name = 'Vue 3'; // 触发 setter
