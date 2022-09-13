class Node {
  leftNode;
  rightNode;

  constructor(value) {
    this.value = value;
  }
}

class AvlTree {
  root = null;

  insert (value) {
    if (!!!this.root) {
      this.root = new Node(value);
      return;
    }

    return this.#insert(this.root, value);
  }

  #insert (node, value) {
    if (value > node.value && !!!node.rightNode) {
      node.rightNode = new Node(value);
      return;
    }

    if (value < node.value && !!!node.leftNode) {
      node.leftNode = new Node(value);
      return;
    }

    return this.#insert(
      value > node.value
        ? node.rightNode
        : node.leftNode,
      value);
  }
}

const avl = new AvlTree();
const input = [10, 5, 15, 6, 1, 8, 12, 18, 17];
input.forEach(v => avl.insert(v))
console.log(avl);
