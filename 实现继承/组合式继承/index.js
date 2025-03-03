//1. 父类 实例属性放在构造函数中
function Father(name, age) {
	this.name = name;
	this.age = age;
	this.hobby = ['敲代码', '解Bug', '睡觉'];
}

//2. 子类
function Child(name, age) {
	Father.call(this, name, age); // 调用父类的构造函数 (继承父类的属性)
	this.a = 1;
}
// 设置原型链
Child.prototype = Object.create(Father.prototype);
// 修复constructor指向
Child.prototype.constructor = Father;

//2. 另一种写法
function Super(foo) {
	this.foo = foo;
}
Super.prototype.printFoo = function () {
	console.log(this.foo);
};
function Sub(bar) {
	this.bar = bar;
	Super.call(this);
}
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;


// 或者可以使用
let person = { name: null, age: null };
let man = Object.assign({}, person, { name: 'John', age: 23 });
console.log(man);  // => { name: 'John', age: 23 }