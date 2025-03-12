function Tree(height) {
	this.height = height;
}
Tree.prototype.getHeight = function () {
	return this.height;
};
const tree = new Tree(100);
tree.__proto__ === Tree.prototype;
tree.__proto__.__proto__ === Object.prototype;
Tree.__proto__ === Function.prototype;
