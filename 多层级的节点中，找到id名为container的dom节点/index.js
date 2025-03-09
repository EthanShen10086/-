// 判断当前节点nodeName
// 遍历当前节点children
function traversal(root, level){
	if(root.nodeName === 'IMG' && level >=4){
		root.classList.add('abc')
	}else{
		for(let i = 0; i < root.children.length; i++){
			traversal(root.children[i], level+1)
		}
	}
}
const target = document.getElementById('container')
traversal(target, 1)