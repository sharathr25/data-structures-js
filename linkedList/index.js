const LinkedList = require('./LinkedList')

const linkedList = new LinkedList()

linkedList
  .prepend(10)
  .prepend(5)
  .insert(11, 0)
  .prepend(88)

console.log('before deleting anything =>', linkedList.toString())
linkedList.delete(5)
console.log('After deleting ' + 5 + ' =>', linkedList.toString())
linkedList.delete(88)
console.log('After deleting ' + 88 + ' =>', linkedList.toString())
linkedList.delete(10)
console.log('After deleting ' + 10 + ' =>', linkedList.toString())
linkedList.delete(11)
console.log('After deleting ' + 11 + ' =>', linkedList.toString())

linkedList
  .prepend(10)
  .prepend(5)
  .insert(11, 0)
  .prepend(88)

console.log('before deleting anything =>', linkedList.toString())
linkedList.deleteTail()
console.log('After deleting tail =>', linkedList.toString())
linkedList.deleteTail()
console.log('After deleting tail =>', linkedList.toString())
linkedList.deleteTail()
console.log('After deleting tail =>', linkedList.toString())
linkedList.deleteTail()
console.log('After deleting tail =>', linkedList.toString())

linkedList
  .prepend(10)
  .prepend(5)
  .insert(11, 0)
  .prepend(88)

console.log('before reverse =>', linkedList.toString())
linkedList.reverse()
console.log('after reverse =>', linkedList.toString())
console.log('before deleting anything =>', linkedList.toString())
linkedList.deleteHead()
console.log('After deleting head =>', linkedList.toString())
linkedList.deleteHead()
console.log('After deleting head =>', linkedList.toString())
linkedList.deleteHead()
console.log('After deleting head =>', linkedList.toString())
linkedList.deleteHead()
console.log('After deleting haed =>', linkedList.toString())
