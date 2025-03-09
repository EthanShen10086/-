function add(a, b){
// 获取最长小数长度
	const aLength = (String(a).split('.')[1] || '').length
	const bLength = (String(b).split('.')[1] || '' ).length
	const factor = Math.pow(10, Math.max(aLength, bLength))
	return (a* factor + b* factor) / factor
}