const BST = require('./bst');

const bst1 = new BST();
const bst2 = new BST();

const input = [7, 4, 9, 1, 6, 8, 10];
const input2 = [7, 4, 9, 1, 6, 8, 10];
input.forEach(v => {
  bst1.insert(v);
});

input2.forEach(v => {
  bst2.insert(v);
});

const isLeaf = node => !!!node.leftNode && !!!node.rightNode;

const equality = (root1, root2) => {
  if (!!!root1 || !!!root2) return false;
  if (root1.value !== root2.value) return false;
  if (isLeaf(root1) && isLeaf(root2)) {
    return true;
  }
  return equality(root1.leftNode, root2.leftNode) &&
    equality(root1.rightNode, root2.rightNode);
};

console.log(equality(bst1.root, bst2.root));