function defineReactive(obj, key, val) {
	Object.defineProperty(obj, key, {
		get() {
			console.log(`获取属性 ${key}，值为：${val}`);
			return val;
		},
		set(newVal) {
			console.log(`修改属性 ${key}，新值为：${newVal}`);
			val = newVal; // 更新值
			// 触发更新逻辑，比如通知视图更新
		},
	});
}

function observe(obj) {
	Object.keys(obj).forEach((key) => {
		defineReactive(obj, key, obj[key]);
	});
}

// 示例对象
let data = { name: 'Tom', age: 25 };

// 劫持属性
defineReactive(data, 'name', data.name);
defineReactive(data, 'age', data.age);

// 访问 & 修改属性
console.log(data.name); // 触发 getter
data.name = 'Jerry'; // 触发 setter
