const { StaticArray, from } = require('../index.js')
const { faker } = require('@faker-js/faker')

describe('Array', () => {
  test('Length should be zero or bigger', () => {
    const staticArray = new StaticArray()
    expect(staticArray.length).toBeGreaterThanOrEqual(0)
  })

  describe('Set method', () => {
    test('Should set item on index correctly', () => {
      const staticArray = new StaticArray(1)
      const value = faker.datatype.number({ min: 0, max: 9 })

      staticArray.set(0, value)

      expect(staticArray.items[0]).toBe(value)
    })

    test('Should throw an error if index is equal or bigger than length', () => {
      const staticArray = new StaticArray()
      const value = faker.datatype.number({ min: 0, max: 9 })

      expect(() => staticArray.set(0, value)).toThrowError()
    })
  })

  describe('Get method', () => {
    test('Should Return value from the index', () => {
      const staticArray = new StaticArray(1)
      const value = faker.datatype.number({ min: 0, max: 9 })

      staticArray.set(0, value)

      expect(staticArray.get(0)).toBe(value)
    })

    test('Should throw an error if index is equal or bigger than length', () => {
      const staticArray = new StaticArray(1)
      const value = faker.datatype.number({ min: 0, max: 9 })

      staticArray.set(0, value)

      expect(() => staticArray.get(1)).toThrowError()
    })
  })

  describe('Size method', () => {
    test('Should return the size of the array, should be fixed', () => {
      const staticArray = new StaticArray()

      expect(staticArray.size()).toBe(staticArray.length)
    })
  })

  describe('Clone method', () => {
    test('Should return a new object with the same values', () => {
      const staticArray = new StaticArray()

      expect(staticArray.clone()).not.toBe(staticArray.items)
      expect(staticArray.clone()).toEqual(staticArray.items)
    })
  })

  describe('Reverse method', () => {
    test('Should return a new object with the same values, but reversed', () => {
      const staticArray = new StaticArray(3)
      const lastIndex = staticArray.length - 1

      staticArray.set(0, faker.datatype.number({ min: 0, max: 9 }))
      staticArray.set(1, faker.datatype.number({ min: 0, max: 9 }))
      staticArray.set(2, faker.datatype.number({ min: 0, max: 9 }))

      for (let i = 0; i < lastIndex; i++) {
        expect(staticArray.reverse()[i]).toBe(staticArray.get(lastIndex - i))
      }
    })
  })

  describe('From method', () => {
    test('Should return an IArray from the received array', () => {
      const list = [1, 2, 3]
      const staticArray = from(list)

      for (let i; i < list.length; i++) {
        expect(staticArray.get(i)).toEqual(list[i])
      }
    })
  })
})
