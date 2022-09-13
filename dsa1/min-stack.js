function MinStack () {
  this.stack = [];
  this.minStack = []
}

MinStack.prototype.pick = function(stack) {
  return stack[stack.length -1];
}

MinStack.prototype.empty = function(stack) {
  return !!!stack[stack.length -1];
}

MinStack.prototype.push = function (value) {
  this.stack.push(value);

  const helperStack = [];
  while (!this.empty(this.minStack) && value > this.pick(this.minStack)) {
    helperStack.push(this.minStack.pop());
  }
  this.minStack.push(value);
  while (!this.empty(helperStack)) {
    this.minStack.push(helperStack.pop());
  }
}

MinStack.prototype.pop = function () {
  const popped = this.stack.pop();

  const helperStack = [];
  while (popped !== this.pick(this.minStack)) {
    helperStack.push(this.minStack.pop());
  }
  this.minStack.pop();
  while (!this.empty(helperStack)) {
    this.minStack.push(helperStack.pop());
  }

  return popped;
}

MinStack.prototype.min = function () {
  return this.pick(this.minStack);
}

const input = [3,7,1,2,-1];
const minStack = new MinStack();
input.forEach(value => minStack.push(value));
console.log(minStack.min());
console.log(minStack.pop());
