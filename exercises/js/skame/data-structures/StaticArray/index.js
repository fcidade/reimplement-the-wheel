class StaticArray {
  constructor(length = 0) {
    this.length = length
    this.items = new Array(length)
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error()
    }
    return (this.items[index] = value)
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error()
    }
    return this.items[index]
  }

  size() {
    return this.length
  }

  clone() {
    const copy = []

    for (let i = 0; i < this.length; i++) {
      copy[i] = this.items[i]
    }

    return copy
  }

  reverse() {
    const reversedItems = []

    for (let i = 0; i < this.length; i++) {
      reversedItems[i] = this.items[this.length - 1 - i]
    }

    return reversedItems
  }
}

const from = (list) => {
  const staticArray = new StaticArray(list.length)

  list.forEach((item, idx) => staticArray.set(idx, item))
}

module.exports = {
  StaticArray,
  from
}
