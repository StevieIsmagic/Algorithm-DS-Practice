function Node(value){
  this.value = value;
  this.next = null;
}

function reverse(headOfList) {
  let current = headOfList;
  let previous = null;
  let nextNode = null;

  // until we have 'fallen off' the end of the list
  while (current) {
    // copy a pointer to the next element
    // before we overwrite current.next
    nextNode = current.next;

    // reverse the 'next' pointer
    current.next = previous

   // step forward in the list
     previous = current;
     current = nextNode;
  }
  // previous is the last node we visited, thus is was the old tail
  // it is now the head of our reversed list
  return previous;
}

let A = new Node('stevie');
let B = new Node('ewisa');
let C = new Node('kristen');
A.next = B;
B.next = C;
C.next = 'derp';
console.log(A);
console.log(B);
console.log(C);

console.log('Reverse', reverse(B));