const { Heap } = require('./heap')

// heap sort
const heap = new Heap()
const numbers = [5, 3, 10, 1, 4, 2]
numbers.forEach(heap.insert, heap)
for (let i = numbers.length - 1; i > -1; i--) {
  numbers[i] = heap.remove()
}
console.log(numbers)

Heap.heapify()
