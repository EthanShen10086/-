function vdomToReal(vnode) {
	// 处理文本节点
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return document.createTextNode(vnode);
	}

	// 创建元素节点
	const element = document.createElement(vnode.tag);

	// 处理属性
	if (vnode.attrs) {
		Object.keys(vnode.attrs).forEach((key) => {
			if (key.startsWith('on')) {
				// 事件处理
				const eventName = key.slice(2).toLowerCase();
				element.addEventListener(eventName, vnode.attrs[key]);
			} else {
				// 普通属性
				element.setAttribute(key, vnode.attrs[key]);
			}
		});
	}

	// 处理子节点
	if (vnode.children) {
		vnode.children.forEach((child) => {
			element.appendChild(vdomToReal(child));
		});
	}

	return element;
}

// 使用示例
const vdom = {
	tag: 'div',
	attrs: {
		class: 'container',
		onClick: () => alert('点击了！'),
	},
	children: [
		{
			tag: 'h1',
			attrs: {
				style: 'color: blue',
			},
			children: ['标题'],
		},
		{
			tag: 'p',
			children: ['这是一段文本'],
		},
	],
};

// 转换并插入到页面
document.body.appendChild(vdomToReal(vdom));

// 更复杂的示例
const complexVdom = {
	tag: 'div',
	attrs: {
		class: 'wrapper',
		style: 'padding: 20px',
	},
	children: [
		{
			tag: 'button',
			attrs: {
				onClick: () => console.log('按钮点击'),
			},
			children: ['点击我'],
		},
		{
			tag: 'ul',
			children: [
				{
					tag: 'li',
					children: ['列表项 1'],
				},
				{
					tag: 'li',
					children: ['列表项 2'],
				},
			],
		},
	],
};

const realDOM = vdomToReal(complexVdom);
document.body.appendChild(realDOM);

function selectSort(list) {
	for (let i = 0; i < list.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < list.length; j++) {
			if (list[j] < list[minIndex]) {
				minIndex = j;
			}
		}
		if (i !== minIndex) {
			let temp = list[i];
			list[i] = list[minIndex];
			list[minIndex] = temp;
		}
	}
}
