class DoublyLinkedListNode {
  /**
   *
   * @param {*} value
   * @param {DoublyLinkedListNode} next
   * @param {DoublyLinkedListNode} previous
   */
  constructor (value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  /**
   *
   * @param {Function} cb
   * @returns {(Function(*)|String)}
   */
  toString (cb) {
    return cb ? cb(this.value) : `${this.value}`
  }
}

module.exports = DoublyLinkedListNode
