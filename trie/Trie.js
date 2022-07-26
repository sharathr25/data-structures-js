const TrieNode = require('./TrieNode')

class Trie {
  constructor () {
    this.root = new TrieNode('*')
  }

  /**
   *
   * @param {String} word
   * @returns {Trie}
   */
  insert (word) {
    let current = this.root

    for (const char of word) {
      if (!current.hasChild(char)) current.setChild(char)
      current = current.getChild(char)
    }

    current.isCompleteWord = true
    return this
  }

  /**
   *
   * @param {String} word
   * @returns {Boolean}
   */
  contains (word) {
    let current = this.root

    for (const char of word) {
      if (!current.hasChild(char)) return false
      current = current.getChild(char)
    }

    return current.isCompleteWord
  }

  /**
   *
   * @param {String} word
   * @param {TrieNode} root
   * @param {Number} index
   */
  remove (word, root = this.root, index = 0) {
    if (index === word.length) {
      root.isCompleteWord = false
      return
    }
    const ch = word[index]
    const child = root.getChild(ch)
    if (!child) return
    this.remove(word, child, index + 1)
    if (!child.hasChildren() && !child.isCompleteWord) {
      root.removeChild(ch)
    }
  }

  /**
   *
   * @param {String} prefix
   * @returns {[String]}
   */
  findWords (prefix) {
    const _findWords = (prefix, root, words) => {
      if (!root) return

      if (root.isCompleteWord) words.push(prefix)

      root.getChildren().forEach(child => {
        _findWords(prefix + child.character, child, words)
      })
    }

    if (!prefix) return []
    const lastNode = this.findLastNode(prefix)
    if (!lastNode) return []
    const words = []
    _findWords(prefix, lastNode, words)
    return words
  }

  /**
   *
   * @param {String} prefix
   * @returns {TrieNode}
   */
  findLastNode (prefix) {
    let current = this.root

    for (const char of prefix) {
      const child = current.getChild(char)
      if (!child) return null
      current = child
    }

    return current
  }
}

module.exports = Trie
