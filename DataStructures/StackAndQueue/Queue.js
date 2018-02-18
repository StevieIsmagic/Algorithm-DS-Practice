/* FIFO add (unshift) onto end 4>3>2>1 remove (pop) from front */ 
class Queue {
  constructor() {
    this.data = [];
  }
  // add record onto end of array 
  add(record) {
    this.data.unshift(record);
  }
  // remove from front
  remove() {
    return this.data.pop();

  }
  // return first record in queue without removing it
  peek() {
    return this.data[this.data.length -1];
  }
}

