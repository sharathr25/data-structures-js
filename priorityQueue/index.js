const ProrityQueue = require('./priorityQueue')

const queue = new ProrityQueue((a, b) => {
  if (a.count === b.count) return 0
  return a.count < b.count ? -1 : 1
})

queue.enqueue({ name: 'process 1', count: 5 })
queue.enqueue({ name: 'process 2', count: 1 })
queue.enqueue({ name: 'process 3', count: 4 })
queue.enqueue({ name: 'process 4', count: 2 })
queue.printQueue()
