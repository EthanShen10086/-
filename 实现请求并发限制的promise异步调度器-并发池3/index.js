function TaskPool() {
	this.taskList = [];
	this.pool = [];
	this.max = 2;
}
TaskPool.prototype.addTask = function (task) {
	this.taskList.push(task);
	this.runNext();
};
TaskPool.prototype.runNext = function () {
	if (this.taskList.length === 0) {
		return;
	}
	const restListLength = this.max - this.pool.length;
	const readyListLength = Math.min(restListLength, this.taskList.length);
	for (let i = 0; i < readyListLength; i++) {
		const task = this.taskList.shift();
		this.pool.push(task);
		task().finally((this.pool = this.pool.filter((item) => item !== task)));
		this.runNext();
	}
};
