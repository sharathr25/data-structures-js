const LinkedList = require('../linkedList/LinkedList')
const DEFAULT_HASH_TABLE_SIZE = 32

class HashTable {
  /**
   *
   * @param {Number} hashTableSize
   */
  constructor (hashTableSize = DEFAULT_HASH_TABLE_SIZE) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList())

    this.keys = {}
  }

  /**
   *
   * @param {String} key
   * @returns {Number}
   */
  hash (key) {
    const hash = Array.from(key).reduce(
      (acc, cur) => (acc += cur.charCodeAt(0)),
      0
    )
    return hash % this.buckets.length
  }

  /**
   *
   * @param {String} key
   * @param {*} value
   * @returns {HashTable}
   */
  set (key, value) {
    const hash = this.hash(key)
    const bucket = this.buckets[hash]
    this.keys[hash] = key
    const node = bucket.find(key, nodeValue => nodeValue.key === key)
    if (!node) {
      bucket.append({ key, value })
    } else {
      node.value = value
    }
    return this
  }

  /**
   *
   * @param {String} key
   */
  delete (key) {
    const hash = this.hash(key)
    const bucket = this.buckets[hash]
    delete this.keys[hash]
    const node = bucket.find(key, nodeValue => nodeValue.key === key)
    if (node) {
      bucket.delete(node.value)
    }
  }

  /**
   *
   * @param {String} key
   * @returns {(*|null)}
   */
  get (key) {
    const hash = this.hash(key)
    const bucket = this.buckets[hash]
    this.keys[hash] = key
    const node = bucket.find(key, nodeValue => nodeValue.key === key)
    return node ? node.value.value : null
  }

  /**
   *
   * @param {String} key
   * @returns {Boolean}
   */
  has (key) {
    return this.hash(key) in this.keys
  }

  /**
   *
   * @returns {String[]}
   */
  getKeys () {
    return Object.keys(this.keys)
  }

  /**
   *
   * @returns {*[]}
   */
  getValues () {
    return this.buckets.reduce(
      (acc, bucket) => [
        ...acc,
        ...bucket.toArray().map(node => node.value.value)
      ],
      []
    )
  }
}

module.exports = HashTable
