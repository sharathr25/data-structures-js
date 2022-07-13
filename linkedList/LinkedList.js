const Comparator = require('../Comparator')
const LinkedListNode = require('./LinkedListNode')

class LinkedList {
  constructor (comparatorFunction) {
    this.head = null
    this.tail = null
    this.compare = new Comparator(comparatorFunction)
  }

  prepend (value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    if (!this.tail) this.tail = newNode
    return this
  }

  append (value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  insert (value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex
    if (!this.head || index === 0) {
      this.prepend(value)
      return this
    }
    const newNode = new LinkedListNode(value)
    let count = 1
    let currentNode = this.head
    while (currentNode.next) {
      if (count === index) break
      currentNode = currentNode.next
      count++
    }
    newNode.next = currentNode.next
    currentNode.next = newNode
    if (currentNode === this.tail) this.tail = newNode
    return this
  }

  delete (value) {
    let currentNode = this.head
    let prevNode = currentNode
    let nodeFound = false
    let deletedNode = null
    while (currentNode) {
      if (this.compare.equals(value, currentNode.value)) {
        nodeFound = true
        break
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }

    if (nodeFound) {
      deletedNode = currentNode
      if (currentNode === this.head && currentNode === this.tail) {
        this.head = null
        this.tail = null
      } else if (currentNode === this.head) {
        this.head = currentNode.next
      } else if (currentNode === this.tail) {
        prevNode.next = null
        this.tail = prevNode
      } else {
        prevNode.next = currentNode.next
      }
    }

    return deletedNode
  }

  find (value, cb = () => false) {
    let currentNode = this.head
    while (currentNode) {
      if (
        cb(currentNode.value) ||
        value === this.compare.equals(value, currentNode.value)
      ) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  deleteTail () {
    if (!this.head) return null // if empty

    const deletedTail = this.tail
    // if only one item
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedTail
    }

    // if more than 1 item
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }
    currentNode.next = null
    this.tail = currentNode
    return deletedTail
  }

  deleteHead () {
    if (!this.head) return null // if empty
    const deletedHead = this.head

    if (this.head === this.tail) {
      // if only 1 item
      this.head = null
      this.tail = null
    } else {
      // if more than 1 item
      this.head = this.head.next
    }

    return deletedHead
  }

  fromArray (values) {
    values.forEach(this.append, this)
    return this
  }

  toArray () {
    const nodes = []
    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  toString (cb) {
    return this.toArray()
      .map(node => node.toString(cb))
      .toString()
  }
}

module.exports = LinkedList
