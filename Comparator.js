class Comparator {
  constructor (compareFunction = Comparator.defaultCompareFunction) {
    this.compare = compareFunction
  }

  static defaultCompareFunction (a, b) {
    if (a === b) return 0
    return a < b ? -1 : 1
  }

  equals (a, b) {
    return this.compare(a, b) === 0
  }

  lessThan (a, b) {
    return this.compare(a, b) < 0
  }

  greaterThan (a, b) {
    return this.compare(a, b) > 0
  }

  lessThanOrEqual (a, b) {
    return this.equals(a, b) || this.lessThan(a, b)
  }

  greaterThanOrEqual (a, b) {
    return this.equals(a, b) || this.greaterThan(a, b)
  }
}

module.exports = Comparator
