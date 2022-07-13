const { Heap } = require('./heap')

class ProrityQueue {
  constructor () {
    this.heap = new Heap()
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
    console.log(this.heap.items)
  }
}

const queue = new ProrityQueue()
queue.enqueue(30)
queue.enqueue(20)
queue.enqueue(10)
queue.enqueue(5)
queue.printQueue()
