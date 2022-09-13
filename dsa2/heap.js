class Heap {
  heap = [];

  insert(v) {
    this.heap.push(v);
    this.#bubbleUp(this.heap.length - 1);
  }

  remove() {
    const removed = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.#bubbleDown( 0 );
    }
    return removed;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  #bubbleUp(from) {
    const to = this.#getParent(from);

    if ([from, to].some(v => v < 0)) return;
    if (this.heap[to] > this.heap[from]) return;

    this.#swap(from, to);
    return this.#bubbleUp(to, this.#getParent(to));
  }

  #bubbleDown(from) {
    const left = this.heap[this.#getLeft(from)];
    if (left === undefined) return;

    const right = this.heap[this.#getRight(from)];
    const to = left > right
      ? this.#getLeft(from)
      : this.#getRight(from);

    if (this.heap[to] === undefined) return;
    if (this.heap[to] < this.heap[from]) return;

    this.#swap(from, to);
    return this.#bubbleDown(to);
  }

  #swap(from, to) {
    const temp = this.heap[to];
    this.heap[to] = this.heap[from];
    this.heap[from] = temp;
  }

  #getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  #getLeft(index) {
    return index * 2 + 1;
  }

  #getRight(index) {
    return index * 2 + 2;
  }

}

const input = [15,10,3,8,12,9,4,1,24];

const h = new Heap();
input.forEach(v => h.insert(v));
console.log(h.heap);
while (!h.isEmpty()) {
  const x = h.remove();
  console.log(x);
}
console.log(h.heap);
