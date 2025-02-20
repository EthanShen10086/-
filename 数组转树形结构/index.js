function arrayToTree(list, root) {
	return list
		.filter((item) => item.parent_id === root)
		.map((item) => ({ ...item, children: arrayToTree(list, item.id) }));
}
