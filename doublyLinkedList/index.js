const DoublyLinkedList = require('./doublyLinkedList')

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList
  .prepend(10)
  .prepend(5)
  .prepend(2)
  .prepend(3)
  .prepend(4)
  .prepend(6)

console.log(doublyLinkedList.toString())

doublyLinkedList.delete(2)
console.log('d 2 =>', doublyLinkedList.toString())

doublyLinkedList.deleteHead()
console.log('d h =>', doublyLinkedList.toString())

doublyLinkedList.deleteTail()
console.log('d t =>', doublyLinkedList.toString())

doublyLinkedList.reverse()
console.log('a r =>', doublyLinkedList.toString())
