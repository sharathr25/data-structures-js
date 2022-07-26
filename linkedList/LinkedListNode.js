class LinkedListNode {
  /**
   *
   * @param {*} value
   * @param {LinkedListNode} next
   */
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }

  /**
   *
   * @param {Function} cb
   * @returns {Function(*)|String}
   */
  toString (cb) {
    return cb ? cb(this.value) : `${this.value}`
  }
}

module.exports = LinkedListNode
