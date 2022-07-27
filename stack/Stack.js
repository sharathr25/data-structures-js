const LinkedList = require('../linkedList/LinkedList')
class Stack {
  constructor () {
    this.linkedList = new LinkedList()
  }

  /**
   *
   * @returns {Boolean}
   */
  isEmpty () {
    return !this.linkedList.head
  }

  /**
   *
   * @returns {*} - element in front of the queue
   */
  peek () {
    if (this.isEmpty()) return null
    return this.linkedList.head.value
  }

  /**
   *
   * @param {*} value - element to insert at the end of queue
   */
  push (value) {
    this.linkedList.append(value)
    return this
  }

  /**
   *
   * @returns {(*|null)}
   */
  pop () {
    const removedHead = this.linkedList.deleteTail()
    return removedHead ? removedHead.value : null
  }

  /**
   *
   * @param {Function} [cb]
   * @returns {String}
   */
  toString (cb) {
    return this.linkedList.toString(cb)
  }
}

module.exports = Stack
