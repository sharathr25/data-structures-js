class Heap {
  #items
  #size
  #maxSize

  constructor () {
    this.#items = []
    this.#size = 0
    this.#maxSize = 10
  }

  #parentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  #swap (first, second) {
    const temp = this.#items[first]
    this.#items[first] = this.#items[second]
    this.#items[second] = temp
  }

  #bubbleUp () {
    let index = this.#size - 1

    while (
      index > 0 &&
      this.#items[index] > this.#items[this.#parentIndex(index)]
    ) {
      const parentIndex = this.#parentIndex(index)
      this.#swap(index, parentIndex)
      index = parentIndex
    }
  }

  insert (data) {
    if (this.#size === this.#maxSize) throw new Error('Heap is full')
    this.#items[this.#size++] = data
    this.#bubbleUp()
  }

  #leftChildIndex (index) {
    return index * 2 + 1
  }

  #rightChildIndex (index) {
    return index * 2 + 2
  }

  #leftChild (index) {
    return this.#items[this.#leftChildIndex(index)]
  }

  #rightChild (index) {
    return this.#items[this.#rightChildIndex(index)]
  }

  #hasLeftChild (index) {
    return this.#leftChildIndex(index) <= this.#size
  }

  #hasRightChild (index) {
    return this.#rightChildIndex(index) <= this.#size
  }

  #isValidParent (index) {
    if (!this.#hasLeftChild(index)) return true
    if (!this.#hasRightChild(index))
      return this.#items[index] >= this.#items[this.#leftChildIndex(index)]
    return (
      this.#items[index] >= this.#items[this.#leftChildIndex(index)] &&
      this.#items[index] >= this.#items[this.#rightChildIndex(index)]
    )
  }

  #largestItemIndex (index) {
    if (!this.#hasLeftChild(index)) return index
    if (!this.#hasRightChild(index)) return this.#leftChildIndex(index)
    return this.#leftChild(index) > this.#rightChild(index)
      ? this.#leftChildIndex(index)
      : this.#rightChildIndex(index)
  }

  #bubbleDown () {
    let index = 0
    while (index <= this.#size && !this.#isValidParent(index)) {
      const largestItemIndex = this.#largestItemIndex(index)
      this.#swap(index, largestItemIndex)
      index = largestItemIndex
    }
  }

  remove () {
    if (this.#size === 0) throw new Error('Heap is empty')
    const root = this.#items[0]
    this.#items[0] = this.#items[--this.#size]
    this.#bubbleDown()
    return root
  }

  static heapify () {}

  get max () {
    if (this.#size === 0) throw new Error('Heap is empty')
    return this.#items[0]
  }

  get items () {
    return this.#items
  }

  isEmpty () {
    return this.#size === 0
  }
}

module.exports = {
  Heap
}
