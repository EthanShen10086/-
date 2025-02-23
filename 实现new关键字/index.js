// 创建一个空对象
// 设置原型：将空白对象的原型设置为函数的prototype对象
// 让函数的this指向这个对象，执行构造函数的代码（为空白对象添加属性）
// 判断函数的返回值
// 1. 如果是引用类型，直接返回，比如构造函数主动返回了一个对象：function T(){return {x: 1}}
// 2. 如果不是引用类型，返回空白对象; 比如构造函数返回一个数字：function T(){return 1}

// let constructor = Array.prototype.shift.call(arguments);
function myNew(constructor, ...args) {
	const obj = Object.create(constructor.prototype);
	const result = constructor.apply(obj, args);
	return result instanceof Object ? result : obj;
}

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person = myNew(Person, "John", 25);

// 和实现原型链一起看

// 1. {}
// 2. {}.__proto__ = Tree.prototype
// 3. {}.__proto__.constructor()
// 4. return instance
