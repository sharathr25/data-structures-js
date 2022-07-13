const util = require('util')

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          break
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          break
        }
        current = current.right
      }
    }
  }

  find (value) {
    let current = this.root
    while (current !== null) {
      if (value < current.value) current = current.left
      else if (value > current.value) current = current.right
      else return true
    }
    return false
  }

  #preOrder (root) {
    if (root === null) return
    console.log(root.value)
    this.#preOrder(root.left)
    this.#preOrder(root.right)
  }

  preOrder () {
    this.#preOrder(this.root)
  }

  #postOrder (root) {
    if (root === null) return
    this.#postOrder(root.left)
    this.#postOrder(root.right)
    console.log(root.value)
  }

  postOrder () {
    this.#postOrder(this.root)
  }

  #inOrder (root) {
    if (root === null) return
    this.#inOrder(root.left)
    console.log(root.value)
    this.#inOrder(root.right)
  }

  inOrder () {
    this.#inOrder(this.root)
  }
}

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
