class HashRouter {
	constructor() {
		this.route = {};
		window.addEventListener('hashchange', this.load.bind(this));
	}
	register(path, callback) {
		this.route[path] = callback;
	}
	load() {
		const path = location.hash.slice(1) || '/';
		if (this.route[path]) {
			this.route[path]();
		}
	}
}
class HistoryRouter {
	constructor() {
		this.route = {};
		window.addEventListener('popstate', this.load.bind(this));
	}
	register(path, callback) {
		this.route[path] = callback;
	}
	load() {
		const path = location.pathname || '/';
		if (this.route[path]) {
			this.route[path]();
		}
	}
	navigate(path) {
		history.pushState({}, '', path);
		this.load();
	}
}
