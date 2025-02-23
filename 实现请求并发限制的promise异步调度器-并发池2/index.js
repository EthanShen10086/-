class TaskPool {
	constructor(maxConcurrent = 2) {
		this.tasks = []; // 等待执行的任务队列
		this.running = []; // 正在执行的任务
		this.maxConcurrent = maxConcurrent; // 最大并发数
	}

	// 添加任务
	addTask(task) {
		this.tasks.push(task);
		this.runNext(); // 尝试执行任务
	}

	// 执行下一个任务
	runNext() {
		// 如果没有等待的任务，直接返回
		if (this.tasks.length === 0) return;

		// 计算可以执行多少个新任务
		const availableSlots = this.maxConcurrent - this.running.length;
		const tasksToRun = Math.min(availableSlots, this.tasks.length);

		// 执行新任务
		for (let i = 0; i < tasksToRun; i++) {
			const task = this.tasks.shift();
			this.running.push(task);

			// 任务完成后的处理
			task().finally(() => {
				// 从运行队列中移除任务
				this.running = this.running.filter((t) => t !== task);
				// 尝试执行更多任务
				this.runNext();
			});
		}
	}
}

// 使用示例
const pool = new TaskPool(2); // 最多同时执行2个任务

// 模拟异步任务
function createTask(id) {
	return () =>
		new Promise((resolve) => {
			console.log(`任务${id}开始`);
			setTimeout(() => {
				console.log(`任务${id}完成`);
				resolve();
			}, 1000);
		});
}

// 添加多个任务
pool.addTask(createTask(1));
pool.addTask(createTask(2));
pool.addTask(createTask(3));
pool.addTask(createTask(4));

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
	const restTaskList = this.max - this.pool.length;

	const readyTaskNumber = Math.min(restTaskList, this.taskList.length);
	for (let i = 0; i < readyTaskNumber; i++) {
		const task = this.taskList.shift();
		this.pool.push(task);
		task().finally(() => {
			this.pool = this.pool.filter((item) => item !== task);
			this.runNext();
		});
	}
};
