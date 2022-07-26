const BinarySearchTreeNode = require('./BinarySearchTreeNode')
const Comparator = require('../Comparator')

class BinarySearchTree {
  /**
   * @param {function} [compareFunction] - comparator function for node values.
   */
  constructor (compareFunction) {
    this.root = null
    this.compare = new Comparator(compareFunction)
  }

  /**
   * @param {*} value
   * @return {BinarySearchTree}
   */
  insert (value) {
    const newNode = new BinarySearchTreeNode(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (this.compare.lessThan(value, current.value)) {
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

    return this
  }

  /**
   * @param {*} value
   * @return {BinaryTreeNode}
   */
  find (value) {
    let current = this.root
    while (current !== null) {
      if (this.compare.lessThan(value, current.value)) current = current.left
      else if (this.compare.greaterThan(value, current.value))
        current = current.right
      else return current
    }
    return null
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains (value) {
    return !!this.find(value)
  }

  /**
   * @return {*[]}
   */
  preOrder () {
    const _preOrder = (root, preOrder) => {
      if (root === null) return
      preOrder.push(root.value)
      _preOrder(root.left, preOrder)
      _preOrder(root.right, preOrder)
    }
    const preOrder = []
    _preOrder(this.root, preOrder)
    return preOrder
  }

  /**
   * @return {*[]}
   */
  postOrder () {
    const _postOrder = (root, postOrder) => {
      if (root === null) return
      _postOrder(root.left, postOrder)
      _postOrder(root.right, postOrder)
      postOrder.push(root.value)
    }
    const postOrder = []
    _postOrder(this.root, postOrder)
    return postOrder
  }

  /**
   * @return {*[]}
   */
  inOrder () {
    const _inOrder = (root, inOrder) => {
      if (root === null) return
      _inOrder(root.left, inOrder)
      inOrder.push(root.value)
      _inOrder(root.right, inOrder)
    }
    const inOrder = []
    _inOrder(this.root, inOrder)
    return inOrder
  }
}

module.exports = BinarySearchTree
