class TrieNode {
  constructor (character, isCompleteWord = false) {
    this.character = character
    this.children = new Map()
    this.isCompleteWord = isCompleteWord
  }

  setChild (character, isCompleteWord = false) {
    this.children.set(character, new TrieNode(character, isCompleteWord))
  }

  getChild (character) {
    return this.children.get(character)
  }

  hasChild (character) {
    return this.children.has(character)
  }

  hasChildren () {
    return this.children.size !== 0
  }

  getChildren () {
    return [...this.children.values()]
  }

  removeChild (character) {
    this.children.delete(character)
  }
}

module.exports = TrieNode
