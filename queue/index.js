const Queue = require('./Queue')

const queue = new Queue()

console.log(queue.isEmpty())

queue
  .enqueue(1)
  .enqueue(2)
  .enqueue(3)

console.log(queue.isEmpty())

console.log(queue.toString())

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.isEmpty())
