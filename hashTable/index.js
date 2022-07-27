const HashTable = require('./HashTable')

const hashTable = new HashTable()

hashTable.set('abc', 1).set('xyz', 2)

console.log(hashTable.getKeys())
console.log(hashTable.getValues())

console.log(hashTable.has('abc'))
console.log(hashTable.has('abd'))

hashTable.delete('xyz')

console.log(hashTable.getKeys())
console.log(hashTable.getValues())
