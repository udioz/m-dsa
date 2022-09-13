class PriorityQueue {
  queue = [];

  empty() {
    return !!!this.queue.length
  }

  add(value) {
    if (this.empty()) {
      this.queue[0] = value;
      return;
    }

    for ( let i = this.queue.length; i >= 0 ; i-- ) {
      if (this.queue[i - 1] > value) {
        this.queue[i] = this.queue[i - 1]
      } else {
        this.queue[i] = value;
        break;
      }
    };
  }
}

const q = new PriorityQueue();
q.add(4);
q.add(1);
console.log();
