const BST = require('./bst');

const bst = new BST();
const input = [7, 4, 9, 1, 6, 8, 10];
input.forEach(v => bst.insert(v));

const validate = (node, min, max) => {
  if (!!!node) return true;

  return node.value > min
    && node.value < max
    && validate(node.leftNode, min, node.value--)
    && validate(node.rightNode, node.value++, max)
};

console.log(validate(bst.root,-Infinity,Infinity));