class Node {
  leftNode;
  rightNode;

  constructor(value) {
    this.value = value;
  }
}

class BinarySearchTree {
  root = null;

  #getNextNode (current, value) {
    return value > current.value ? current.rightNode : current.leftNode;
  }

  #valueNotFound (current, value) {
    return !!current && current.value !== value;
  }

  idLeaf(node) {
    return !!!node.leftNode && !!!node.rightNode;
  }

  find (value) {
    let current = this.root;
    while (this.#valueNotFound(current, value)) {
      current = this.#getNextNode(current, value);
    }
    return !!current;
  }

  insert (value) {
    if (!!!this.root) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (this.#valueNotFound(current, value)) {
      let next = this.#getNextNode(current, value);
      if (!!!next) {
        next = new Node(value);
        value > current.value ? current.rightNode = next : current.leftNode = next;
        return;
      }
      current = next;
    }
  }

  preOrderTraversal (root) {
    if (arguments.length === 0)
      root = this.root;

    if (!!!root) return;

    console.log(root.value);
    this.preOrderTraversal(root.leftNode);
    this.preOrderTraversal(root.rightNode);
  }

  findMin (root) {
    if (arguments.length === 0)
      root = this.root;

    if (!!!root.leftNode) {
      return root.value;
    }

    return this.findMin(root.leftNode);
  }
}

// const bst = new BinarySearchTree();
// const input = [10, 5, 15, 6, 1, 8, 12, 18, 17];
// input.forEach(v => bst.insert(v))
// bst.preOrderTraversal();
// console.log(bst.findMin());

module.exports = BinarySearchTree;