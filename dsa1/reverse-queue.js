const Queue = function() {
  this.queue = [];
};

Queue.prototype.add = function (value) {
  this.queue.push(value);
}

Queue.prototype.remove = function () {
  return this.queue.shift();
}

Queue.prototype.isEmpty = function () {
  return !!!this.queue.length;
}

Queue.prototype.reverse = function (k = null) {
  const stack = [];
  while (!this.isEmpty()) {
    stack.push(this.remove());
  }
  while (!!stack.length) {
    this.add(stack.pop());
  }
}

const input = [1, 2, 3, 4, 5];
const q = new Queue();
input.forEach(value => q.add(value));
console.log(q);
q.reverse();
console.log(q);
