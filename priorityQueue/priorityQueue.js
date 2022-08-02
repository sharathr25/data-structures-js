const Heap = require('../heap/heap')

class ProrityQueue {
  constructor (compareFunction) {
    this.heap = new Heap(compareFunction)
  }

  enqueue (item) {
    this.heap.insert(item)
  }

  dequeue () {
    return this.heap.remove()
  }

  isEmpty () {
    return this.heap.isEmpty()
  }

  printQueue () {
    console.log(this.heap.getItems())
  }
}

module.exports = ProrityQueue
