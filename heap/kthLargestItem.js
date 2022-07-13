const { Heap } = require('./heap')

function getKthLargestItem (items, k) {
  if (k < 1 || k > items.length) throw new Error('Illegal argument')

  const heap = new Heap()
  items.forEach(heap.insert, heap)
  for (let i = 0; i < k - 1; i++) {
    heap.remove()
  }
  return heap.max
}

console.log(getKthLargestItem([5, 3, 8, 4, 1, 2], 3))
