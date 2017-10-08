const exampleTree = {
	1 : 'A',
	2 : 'B',
	3 : 'C',
	4 : {
		5 : 'D',
		6 : 'E',
		7 : {
			8 : 'F',
			9 : 'G'
		}
	}
};

const BFS = (tree, searchTerm) => {
	let queue = Object.values(tree);

	while(queue.length > 0) {
		let item = queue.shift();

		if (item === searchTerm) {
			return true;
		}

		if (typeof(item) === 'object' && item !== null && !Array.isArray(item)) {
			queue = Object.values(item);
		};
	}
	return false;
};

console.log(BFS(exampleTree, 'H'));
console.log(BFS(exampleTree, 'A'));