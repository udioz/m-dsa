const QueueLinkedList = require('./queue-linked-list');

class Stack2Queues {
  stack = new QueueLinkedList();

  push(value) {
    this.stack.enqueue(value);
    const helperQ = new QueueLinkedList();
    while (this.stack.size() > 1) {
      helperQ.enqueue(this.stack.dequeue());
    }
    while (!helperQ.isEmpty()) {
      this.stack.enqueue(helperQ.dequeue());
    }
  }

  pop() {
    return this.stack.dequeue();
  }

  peek() {
    return this.stack.peek();
  }

  size() {
    return this.stack.size();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }
}

s = new Stack2Queues();
input = [1,2,3,4];
input.forEach(v => s.push(v));
while (!s.isEmpty()) {
  console.log(s.pop());
}
