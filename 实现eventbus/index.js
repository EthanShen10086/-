class EventBus {
	constructor() {
		this.event = {};
	}
	on(eventName, callback) {
		if (!this.event[eventName]) {
			this.event[eventName] = [];
		}
		this.event[eventName].push(callback);
	}
	emit(eventName, ...args) {
		// 必须要加 如果使用过delete可能会是undefined this.event[eventName]
		if (!this.event[eventName]) {
			return;
		}
		this.event[eventName].forEach((callback) => callback(...args));
	}
	off(eventName, callback) {
		if (!this.event[eventName]) {
			return;
		}
		if (this.event[eventName]) {
			this.event[eventName] = this.event[eventName].filter(
				(item) => item !== callback
			);
		}
	}
	once(eventName, callback) {
		const wrapper = (...args) => {
			callback(...args);
			this.off(eventName, wrapper);
		};
		this.on(eventName, wrapper);
	}
}
