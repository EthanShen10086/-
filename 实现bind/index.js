// 先判断调用者是否为函数
// 缓存当前需要bind的函数，就是上面的调用者，也是是bind函数的上下文
// 返回一个函数，利用闭包原理实现对this的保存
// 函数内部用apply函数来处理函数调用
// 需要判断函数作为构造函数的情况，这个时候的this就是当前调用这个闭包函数的this
// 作为普通函数，直接使用传入的上下文就好了
Function.prototype.myBind = function (context, ...args) {
	if (typeof this !== 'function') {
		throw new TypeError('Error');
	}
	let _this = this;
	// 返回新函数
	return function F(...arg) {
		// 如果是构造函数 使用bind的上下文
		if (this instanceof F) {
			return new _this(...args, ...arg);
		}
		// 如果是普通函数 使用传入的上下文
		return _this.apply(context, args.concat(arg));
	};
};
// // 场景1：普通函数调用
// function greet(msg) {
//     console.log(`${this.name}: ${msg}`);
// }
// const person = { name: '张三' };
// const boundGreet = greet.myBind(person);
// boundGreet('你好'); // 输出：张三: 你好

// // 场景2：构造函数调用
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const BoundUser = User.myBind(null, '张三');
// const user = new BoundUser(20);
// console.log(user); // { name: '张三', age: 20 }
