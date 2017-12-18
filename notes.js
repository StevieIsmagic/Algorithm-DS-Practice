function factorial(n){
if(n < 0 || n > 12) {
throw new RangeError('Parameter must be between ' + '0' + ' and ' + '12');
} if(n === 0) {
return 1;
} 
  return n * factorial(n -1);
}

********************************

function factorial(n)
{
    if(n < 0 || n > 12) throw new RangeError('Ошибка');
    return n ? n * factorial(n-1) : 1;
}

***************** LINKED LIST ******************
(1) Node
	- data
	- next

(2) Linked List
	- length
	- head
	
(3) Methods
	- add()
	- searchNodeAt()
	- remove()

function node(data) {
	this.data = data;
	this.next = null;
}

function linkedList() {
	this.length = 0;
	this.head = null;
}

// ADD NODE TO LIST
linkedList.prototype.add = function(value) {
	var node = new node(value);
	currentNode = this.head;

	if (!currentNode) {  // Empty List
		this.head = node;
		this.length++;
		return node;
	}

	while (currentNode.next) {  //  Non-Empty List 
		currentNode = currentNode.next;
	}
	currentNode.next = node;
	this.length++;
	return node;
}