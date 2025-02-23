// 1. 记录初始位置
const element = document.getElementById('target');
const first = element.getBoundingClientRect();

// 2. 触发布局变化（如插入新元素导致位置变动）
document.body.appendChild(newElement);

// 3. 记录最终位置
const last = element.getBoundingClientRect();

// 4. 计算反转变换
const deltaX = first.left - last.left;
const deltaY = first.top - last.top;

// 5. 应用反转并播放动画
element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
element.style.transition = 'transform 0s';
requestAnimationFrame(() => {
	element.style.transition = 'transform 0.5s ease';
	element.style.transform = 'none';
});
