const BinaryTreeNode = require('./BinaryTreeNode')

class BinaryTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const newNode = new BinaryTreeNode(value)

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

  preOrder () {
    const _preOrder = root => {
      if (root === null) return
      console.log(root.value)
      _preOrder(root.left)
      _preOrder(root.right)
    }
    _preOrder(this.root)
  }

  postOrder () {
    const _postOrder = root => {
      if (root === null) return
      _postOrder(root.left)
      _postOrder(root.right)
      console.log(root.value)
    }
    _postOrder(this.root)
  }

  inOrder () {
    const _inOrder = root => {
      if (root === null) return
      _inOrder(root.left)
      console.log(root.value)
      _inOrder(root.right)
    }
    _inOrder(this.root)
  }
}

module.exports = BinaryTree
