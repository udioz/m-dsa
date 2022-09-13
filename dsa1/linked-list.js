
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next
  }
}

class LinkedList {
  first = null;
  last = null;
  size = 0;

  getFirst() {
    return !this.isEmpty() ? this.first.value : null;
  }

  getLast() {
    return !this.isEmpty() ? this.last.value : null;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  addFirst(value) {
    const currentFirst = this.first;
    this.first = new Node(value, currentFirst);
    this.first.next = currentFirst;

    if (!!!currentFirst) {
      this.last = this.first;
    }
    this.size++;
  }

  addLast(value) {
    if (!!!this.last) {
      return this.addFirst(value);
    }
    this.last = this.last.next = new Node(value, null);
    this.size++;
  }

  deleteFirst() {
    if (this.isEmpty()) return;

    this.first = this.first.next;
    this.size--;
    if (this.isEmpty()) {
      this.last = null
    }
  }

  deleteLast() {
    if (this.isEmpty()) return;

    if (this.first === this.last) {
      return this.deleteFirst();
    }

    let current = this.first;
    while (current.next !== this.last) {
      current = current.next
    }
    this.last = current;
    current.next = null;
    this.size--;
  }

  contains(value) {
    return this.indexOf(value) > -1
  }

  indexOf(value) {
    let current = this.first;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  reverse() {
    if (!!!this.first) return;

    let previous = this.first;
    let current = this.first.next;

    while (current !== null) {
      let n = current.next;
      current.next = previous;
      previous = current;
      current = n;
    }

    this.last = this.first;
    this.last.next = null;
    this.first = previous;

  }

  middle() {
    if (this.first === null) return;

    let current = this.first;
    let middle = this.first;
    let currentMiddle = 1, newMiddle;
    let count = 0;

    while (current != null) {
      count++;
      newMiddle = Math.ceil(count/2);
      if (newMiddle > currentMiddle) {
        // move middle pointer to new index
        for ( let i = 0; i < newMiddle - currentMiddle; i++ ) {
          middle = middle.next;
        }
        currentMiddle = newMiddle;
      }
      current = current.next;
    }

    if (count % 2 === 0)
      return [
        middle,
        middle.next
      ]
    else
      return middle;
  }

  kthfromEnd(k) {
    let kth = this.first;
    let current = this.first;
    for ( let i = 0; i < k-1; i++ ) {
      current = current.next;
    }
    let end = current;
    while (current.next != null) {
      kth = kth.next;
      end = current = current.next;
    }

    return kth;
  }

  kthfromEnd1(k) {
    let kth = this.first;
    let current = this.first;
    let end = this.first
    let i = 0;
    while (current !== null) {
      end = current = current.next;
      if (i++ >= k) {
        kth = kth.next;
      }
    }

    return kth;
  }

  hasLoop() {
    if (this.first === null) return;

    let slow = this.first;
    let fast = slow.next;

    while (slow.next !== null) {
      while (fast !== null) {
        if (fast.next === slow) {
          return [true, slow, fast];
        }
        if (fast === this.last) break;
        fast = fast.next;
      }
      slow = slow.next;
      fast = slow.next;
    }

    return [false, slow, fast];
  }

}

module.exports = LinkedList;