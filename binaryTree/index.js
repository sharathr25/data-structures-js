const util = require('util')
const BinaryTree = require('./binaryTree')

const binaryTree = new BinaryTree()

binaryTree.insert(7)
binaryTree.insert(4)
binaryTree.insert(9)
binaryTree.insert(1)
binaryTree.insert(6)
binaryTree.insert(8)
binaryTree.insert(10)

console.log(
  util.inspect(binaryTree, { showHidden: false, depth: null, colors: true })
)

console.log(binaryTree.find(10))

console.log('pre order')
binaryTree.preOrder()
console.log('in order')
binaryTree.inOrder()
console.log('post order')
binaryTree.postOrder()
