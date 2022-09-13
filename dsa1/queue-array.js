class QueueArray {
  constructor() {
    this.queue = []
    this.size = 5;
    this.front = 0;
    this.rare = -1;
  }

  isEmpty() {
    return this.front > this.rare;
  }

  isFull() {
    return this.rare - this.front === this.size - 1
  }

  add(value) {
    if (!this.isFull())
      this.queue[++this.rare] = value;
  }

  remove() {
    if (!this.isEmpty())
      return this.queue[this.front++];
  }
}

const q = new QueueArray();

q.add(1);
q.remove();
q.remove();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.add(5);
q.add(5);
q.add(5);
q.add(5);
console.log(q.isFull());
q.remove()
q.remove()