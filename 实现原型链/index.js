function Tree(height) {
	this.height = height;
}
Tree.prototype.getHeight = () => this.height;

const treeObj = new Tree(100);

treeObj.__proto__.getHeight() === Tree.prototype;

Tree.__proto__ === Function.prototype;
treeObj.__proto__.__proto__ === Function.prototype;
