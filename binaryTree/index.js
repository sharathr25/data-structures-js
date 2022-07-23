const BinarySearchTree = require('./BinarySearchTree')

const binaryTree = new BinarySearchTree()

binaryTree
  .insert(7)
  .insert(4)
  .insert(9)
  .insert(1)
  .insert(6)
  .insert(8)
  .insert(10)

console.log(binaryTree.contains(10))
console.log('pre order', binaryTree.preOrder())
console.log('in order', binaryTree.inOrder())
console.log('post order', binaryTree.postOrder())
