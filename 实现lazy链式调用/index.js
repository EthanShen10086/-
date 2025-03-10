class Shopee {
	constructor() {
		this.queue = [];
		this.running = false;
	}
	execute() {
		const item = () => {
			new Promise((resolve, reject) => {
				console.log('execute');
				resolve();
			});
		};
		this.queue.push(item);
		return this;
	}

	sleep(time) {
		const item = new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(`延迟${time}秒`);
			}, time * 1000);
		});
		this.queue.push(item);
		return this;
	}
	async run() {
		if (this.running) {
			return;
		}
		this.running = true;
		while (this.queue.length > 0) {
			const task = this.queue.shift();
			await task();
		}
		this.running = false;
	}
}

const shopee = new Shopee();
shopee.execute().sleep(1).execute().sleep(3).execute().run();

shopee.sleep(3).sleep(2).execute().run();
