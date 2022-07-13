function swap (items, first, second) {
  const temp = items[first]
  items[first] = items[second]
  items[second] = temp
}

function _heapify (items, index) {
  let largerIndex = index

  const leftIndex = index * 2 + 1
  if (leftIndex < items.length && items[leftIndex] > items[largerIndex]) {
    largerIndex = leftIndex
  }

  const rightIndex = index * 2 + 2
  if (rightIndex < items.length && items[rightIndex] > items[largerIndex]) {
    largerIndex = rightIndex
  }

  if (largerIndex === index) return

  swap(items, index, largerIndex)
  heapify(items, largerIndex)
}

function heapify (items) {
  //   for (let i = 0; i < items.length; i++) {
  //     _heapify(items, i)
  //   }
  const lastParentIndex = items.length / 2 - 1
  //   for (let i = 0; i < lastParentIndex; i++) {
  //     _heapify(items, i)
  //   }
  for (let i = lastParentIndex; i >= 0; i--) {
    _heapify(items, i)
  }
}

const numbers = [5, 3, 8, 4, 1, 2]
heapify(numbers)
console.log(numbers)
