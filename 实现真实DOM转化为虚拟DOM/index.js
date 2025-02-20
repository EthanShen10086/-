// 定义数据结构
function Element({ tagName, props, children }) {
	// 判断必须使用构造函数
	// 这行代码确保即使不使用 new 关键字也能正确创建实例
	if (!(this instanceof Element)) {
		return new Element({ tagName, props, children });
	}
	this.tagName = tagName;
	this.props = props || {};
	this.children = children || [];
}
Element.prototype.render = function () {
	var el = document.createElement(this.tagName);
	// 处理节点属性
	for (var propName in this.props) {
		el.setAttribute(propName, this.props[propName]);
	}
	// 处理子节点
	this.children.forEach(function (child) {
		var childEL = null;
		if (child instanceof Element) {
			childEL = child.render();
		} else {
			// 如果是文本节点，直接创建文本节点
			childEL = document.createTextNode(child);
		}
		el.appendChild(childEL);
	});
	return el;
};

// 样例数据
let virtualDOM = new Element({
	tagName: 'ul',
	props: { class: 'list' },
	children: [
		{ tagName: 'li', children: ['douyin'] },
		{ tagName: 'li', children: ['toutiao'] },
	],
});
document.body.appendChild(virtualDOM.render());

<ul class="list">
	<li>douyin</li>
	<li>toutiao</li>
</ul>;
