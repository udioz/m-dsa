const LinkedList = require('./linked-list');

class Entry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor(size = 10) {
    this.hashTable = new Array(10);
    this.hashTable.fill(undefined);
    Object.seal(this.hashTable);
    this.size = size;
  }

  #hash(k) {
    return k % this.size;
  }

  put(k,v) {
    const index = this.#hash(k);

    if (!!!this.hashTable[index]) {
      this.hashTable[index] = new LinkedList();
    }

    let current = this.hashTable[index].first;

    while (current !== null) {
      if (current.value.key === k) {
        current.value.value = v;
        return;
      }
      current = current.next;
    }

    this.hashTable[index].addLast(new Entry(k,v));
  }

  get(k) {
    const index = this.#hash(k);

    if (!!!this.hashTable[index] || this.hashTable[index]?.isEmpty()) return;

    let current = this.hashTable[index].first;
    while (current.value.key !== k) {
      current = current.next;
    }
    return !!current ? current.value.value : undefined;
  }

  remove(k) {
    const index = this.#hash(k);

    if (!!!this.hashTable[index] || this.hashTable[index]?.isEmpty()) return;

    let current = this.hashTable[index].first;

    if (current.value.key === k)
      return this.hashTable[index].deleteFirst();

    while (!!current && current?.next?.value.key !== k) {
      current = current.next;
    }

    if (!!current?.next) {
      current.next = current.next.next;
      if (current.next === null) this.hashTable[index].last = this.hashTable[index].first;
      this.hashTable[index].size--;
    }
  }
}

const h = new HashTable();
h.put(6,'A');
h.put(2,'B');
h.put(1,'C');
h.put(9,'D');
h.put(222, '222');
h.remove(222);
h.remove(222)

console.log(h);
