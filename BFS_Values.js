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
	// pull keys / values from tree + create QUEUE
	const queue = Object.keys(tree).map((key) => {
		return tree[key] // this gives us each value
	});

	while (queue.length > 0) {
		// shift queue + to create current term
		// being compared to searchTerm

		let item = queue.shift(); // shift return the first item in array

		// if item matches searchTerm, return TRUE
		if (item === searchTerm) { 
			return true;
		}
		if (typeof(item) === 'object' && item !== null && !Array.isArray(item)) {
			let itemChildren = Object.keys(item).map((item) => {
				queue.push(itemChildren);
			});
		}
		return false;

		// if item is itself an object/not null/ not an Array
		// pull its key/values + push them onto end of queue

		// else if no terms match searchTerm, return false

	}


}

console.log(BFS(exampleTree, 'H'));
console.log(BFS(exampleTree, 'A'));