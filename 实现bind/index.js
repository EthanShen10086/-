Function.prototype.myBind = function (context, argList) {
	if (typeof this !== 'function') {
		throw new TypeError('必须是function调用');
	}
	let _this = this;
	// 返回一个没有执行的function
	return function F(...arg) {
		// 如果是构造函数
		if (this instanceof F) {
			return new _this(...argList, ...arg);
		}
		// 如果是普通函数 使用传入的context
		return _this.apply(context, argList.concat(arg));
	};
};
