const { StaticArray } = require('../StaticArray')

class DynamicArray {
  constructor() {
    this.array = new StaticArray()
    this.length = 0
  }

  append(value) {
    const newLength = this.length + 1
    const newStaticArray = new StaticArray(newLength)

    for (let i = 0; i < this.length; i++) {
      newStaticArray.set(i, this.array.items[i])
    }

    newStaticArray.set(this.length, value)

    this.length = newLength
    this.array = newStaticArray
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error()
    }

    const newLength = this.length - 1
    const newStaticArray = new StaticArray(newLength)

    for (let i = 0; i < newLength; i++) {
      newStaticArray.set(i, this.array.items[i >= index ? i + 1 : i])
    }

    this.length = newLength
    this.array = newStaticArray
  }

  set(index, value) {
    return this.array.set(index, value)
  }

  get(index) {
    return this.array.get(index)
  }

  clone() {
    return this.array.clone()
  }

  reverse() {
    return this.array.reverse()
  }

  size() {
    return this.length
  }
}

const from = (list) => {
  const dynamicArray = new DynamicArray()
  const isStaticArray = list instanceof StaticArray

  const iterableList = isStaticArray ? list.items : list

  iterableList.forEach((item, idx) => dynamicArray.append(idx, item))
}

module.exports = {
  DynamicArray,
  from
}
