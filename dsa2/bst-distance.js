const BST = require('./bst');

const bst = new BST();
const input = [7, 4, 9, 1, 6, 8, 10];
input.forEach(v => bst.insert(v));
const nodes = [];

const distance = (node, gap) => {
  if (!!!node) return;

  if (gap === 0) {
    nodes.push(node.value);
    return;
  }

  distance(node.leftNode, gap - 1);
  distance(node.rightNode, gap - 1);
};

distance(bst.root,2);
console.log(nodes);