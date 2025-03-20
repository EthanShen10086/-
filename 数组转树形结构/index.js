function arrayToTree(list, root) {
	return list
		.filter((item) => item.parentId === root)
		.map((item) => {
			return {
				...item,
				children: arrayToTree(list, item.id),
			};
		});
}
