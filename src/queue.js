/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.q = [];
  }
  get size() {
    return this.q.length;
  }
  enqueue(element) {
    this.q.push(element);
  }
  dequeue() {
    return this.q.shift();
  }
}

module.exports = Queue;
