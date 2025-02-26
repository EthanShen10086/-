// 判断call的调用者是否为函数，不是函数需要抛出错误，call调用者就是上下文this，也就是需要被调用的函数
// 判断需要被调用的函数的的上下文对象是否传入，不存在就设置为window
// 处理传入的参数，截取第一个参数后的所有参数，作为被调用函数
// 将需要被调用的函数，绑在传入的上下文上，作为一个属性
// 使用传入的上下文调用这个函数，并返回结果
// 删除绑定的属性
// 返回结果

// 这里的context其实就是指传入的对象的this指向 所以 context可以理解为this[XXX]
Function.prototype.myCall = function (context, ...args) {
	if (typeof this !== 'function') {
		throw new TypeError('Caller must be a function');
	}
	context = context || window;
	const fn = Symbol('fn');
	context[fn] = this;
	const result = context[fn](...args);
	delete context[fn];
	return result;
};

// let args =  arguments.slice(1)
