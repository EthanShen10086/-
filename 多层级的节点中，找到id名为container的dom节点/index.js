// 多层级的节点中，找到id名为container的dom节点，并且找出嵌套层级≥4的img节点，并为之添加class名'.abc'。
// 这一题本质上在考察递归查找dom节点

function addClassToDeepImgNodes(node, level) {
	if (node.nodeName === 'IMG' && level >= 4) {
		node.classList.add('abc');
	} else {
		for (let i = 0; i < node.children.length; i++) {
			addClassToDeepImgNodes(node.children[i], level + 1);
		}
	}
}
addClassToDeepImgNodes(document.getElementById('container'), 0);
