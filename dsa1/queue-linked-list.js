const LinkedList = require('./linked-list');

class QueueLinkedList {
  queue = new LinkedList();

  // O(1)
  enqueue(value) {
    this.queue.addLast(value);
  }

  // O(1)
  dequeue() {
    const value = this.queue.getFirst();
    this.queue.deleteFirst();
    return value;
  }

  // O(1)
  peek() {
    return this.queue.getFirst();
  }

  // O(1)
  size() {
    return this.queue.getSize();
  }

  // O(1)
  isEmpty() {
    return this.queue.isEmpty();
  }
}

module.exports = QueueLinkedList;

// const q = new QueueLinkedList();
// input = [1,2,3,4];
// input.forEach(v => q.enqueue(v));
// console.log(q.peek());
// console.log(q.isEmpty());
// console.log(q.size());
// console.log(q.dequeue());
// console.log(q);
