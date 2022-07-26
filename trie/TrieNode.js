class TrieNode {
  /**
   *
   * @param {String} character
   * @param {Boolean} isCompleteWord
   */
  constructor (character, isCompleteWord = false) {
    this.character = character
    this.children = new Map()
    this.isCompleteWord = isCompleteWord
  }

  /**
   *
   * @param {String} character
   * @param {Boolean} isCompleteWord
   */
  setChild (character, isCompleteWord = false) {
    this.children.set(character, new TrieNode(character, isCompleteWord))
  }

  /**
   *
   * @param {String} character
   * @returns {TrieNode}
   */
  getChild (character) {
    return this.children.get(character)
  }

  /**
   *
   * @param {String} character
   * @returns {Boolean}
   */
  hasChild (character) {
    return this.children.has(character)
  }

  /**
   *
   * @returns {Boolean}
   */
  hasChildren () {
    return this.children.size !== 0
  }

  /**
   *
   * @returns {String[]}
   */
  getChildren () {
    return [...this.children.values()]
  }

  /**
   *
   * @param {String} character
   */
  removeChild (character) {
    this.children.delete(character)
  }
}

module.exports = TrieNode
