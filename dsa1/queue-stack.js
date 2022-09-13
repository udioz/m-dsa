class QueueStack {
  stack1 = [];
  stack2 = [];

  add(value) {
    this.stack1.push(value);
  }

  remove() {
    if (!!!this.stack2.length) {
      while (!!this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  isEmpty() {
    
  }
}

const q = new QueueStack();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
let y = q.remove()
y = q.remove()
y = q.remove()
y = q.remove()
y = q.remove()
y=y;