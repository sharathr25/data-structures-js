const Trie = require('./Trie')

const trie = new Trie()

trie.insert('car')
trie.insert('caret')
trie.insert('cat')

console.log(trie.contains('car'))
console.log(trie.contains('ca'))

console.log(trie.remove('car'))
console.log(trie.contains('caret'))

console.log(trie.findWords('ca'))
