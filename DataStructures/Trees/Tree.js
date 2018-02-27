class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChildren(value) {
    this.children.push(new Tree(value));
  }
}
const myTree = new Tree('Parent');
myTree.addChildren('first child'); //  myTree.children[0]
myTree.addChildren('second child'); // myTree.children[1]
myTree.addChildren('third child'); //  myTree.children[2]

myTree.children[0].addChildren('child of first child'); // myTree.children[0].children[0]

console.log(myTree);
