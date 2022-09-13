const BST = require('./bst');

const bst = new BST();
const input = [10, 5, 15, 1, 6, 8, 15, 12, 18, 17];
input.forEach(v => bst.insert(v));

const val1 = 12;
const val2 = 18;

const siblings = (node) => {
  if (!!!node) return false;

  if (!!!node.leftNode || !!!node.rightNode) return false;

  return ([node.leftNode.value, node.rightNode.value].includes(val1)
    && [node.leftNode.value, node.rightNode.value].includes(val2))
    || siblings(node.leftNode) || siblings(node.rightNode);
};

console.log(siblings(bst.root));

