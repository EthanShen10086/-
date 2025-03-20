function Person(name) {
	if (!(this instanceof Person)) {
		throw new Error('必须用new创建');
	}
	this.name = name;
}
