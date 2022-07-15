const Comparator = require('../Comparator')
const DoublyLinkedListNode = require('./doublyLinkedListNode')

class DoublyLinkedList {
  constructor (comparatorFunction) {
    this.head = null
    this.tail = null
    this.compare = new Comparator(comparatorFunction)
  }

  prepend (value) {
    const newNode = new DoublyLinkedListNode(value, this.head)
    if (this.head) {
      this.head.previous = newNode
    }
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  append (value) {
    const newNode = new DoublyLinkedListNode(value, null, this.tail)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode // attach new node to tail
    this.tail = newNode // make new node as tail

    return this
  }

  delete (value) {
    if (!this.head) return null

    let deletedNode = null
    let currentNode = this.head

    while (currentNode) {
      if (this.compare.equals(value, currentNode.value)) {
        deletedNode = currentNode

        if (deletedNode === this.head && deletedNode === this.tail) {
          //only 1
          this.head = null
          this.tail = null
        } else if (deletedNode === this.head) {
          // when head
          this.head = deletedNode.next
          this.head.previous = null
        } else if (deletedNode === this.tail) {
          // when tail
          this.tail = deletedNode.previous
          this.tail.next = null
        } else {
          // in middle
          deletedNode.previous.next = deletedNode.next
          deletedNode.next.previous = deletedNode.previous
        }
      }

      currentNode = currentNode.next
    }

    return deletedNode
  }

  deleteHead () {
    if (!this.head) return null
    const deletedNode = this.head
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = deletedNode.next
      this.head.previous = null
    }
    return deletedNode
  }

  deleteTail () {
    if (!this.head) return null
    const deletedNode = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = deletedNode.previous
      this.tail.next = null
    }
    return deletedNode
  }

  find (value, cb = () => false) {
    let currentNode = this.head
    while (currentNode) {
      if (
        cb(currentNode.value) ||
        this.compare.equals(value, currentNode.value)
      ) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  reverse () {
    let currNode = this.head
    ;[this.head, this.tail] = [this.tail, this.head]

    while (currNode) {
      // Store next node.
      const nextNode = currNode.next

      // Change next node of the current node so it would link to previous node.
      ;[currNode.next, currNode.previous] = [currNode.previous, currNode.next]

      // Move currNode one step forward.
      currNode = nextNode
    }

    return this
  }

  fromArray (values) {
    values.forEach(this.prepend, this)
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

module.exports = DoublyLinkedList
