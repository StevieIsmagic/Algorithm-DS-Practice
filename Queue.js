/* FIFO 1<2<3<4< */ 
class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

}