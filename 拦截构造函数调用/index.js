function Person(name) {
	if (new.target !== undefined) {
		this.name = name;
	} else {
		throw new Error('必须使用new来调用Person');
	}
}
