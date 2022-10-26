const { DynamicArray, from } = require('../index')
const { StaticArray } = require('../../StaticArray/index')

const { faker } = require('@faker-js/faker')

describe('Dynamic array', () => {
  test('Should have length zero or bigger', () => {
    const dynamicArray = new DynamicArray()

    expect(dynamicArray.length).toBeGreaterThanOrEqual(0)
  })

  describe('Append method', () => {
    test('Should set item on the end of the list correctly', () => {
      const dynamicArray = new DynamicArray()

      const value = faker.datatype.number({ min: 0, max: 9 })
      dynamicArray.append(value)

      const lastIndex = dynamicArray.length - 1
      expect(dynamicArray.array.items[lastIndex]).toEqual(value)
    })
  })

  describe('Remove method', () => {
    test("Should remove the item on index correctly, and update it's length", () => {
      // TODO: deixar o teste mais dinâmico.
      const dynamicArray = new DynamicArray()

      dynamicArray.append(1)
      dynamicArray.append(2)
      dynamicArray.append(3)

      const itemTobeRemoved = dynamicArray.array.items[1]

      dynamicArray.remove(1)

      expect(dynamicArray.array.items.includes(itemTobeRemoved)).toBeFalsy()
      expect(dynamicArray.length).toEqual(2)
    })
    test('Should throw an error if index is smaller than zero, equal or bigger than length', () => {
      const dynamicArray = new DynamicArray()

      dynamicArray.append(1)
      dynamicArray.append(2)
      dynamicArray.append(3)

      expect(() => dynamicArray.remove(3)).toThrowError()
    })
  })

  describe('Set method', () => {
    test('Should set item on index correctly', () => {
      const dynamicArray = new DynamicArray()
      dynamicArray.append(1)
      const value = faker.datatype.number({ min: 0, max: 9 })

      dynamicArray.set(0, value)

      expect(dynamicArray.array.items[0]).toBe(value)
    })

    test('Should throw an error if index is equal or bigger than length', () => {
      const dynamicArray = new DynamicArray()
      const value = faker.datatype.number({ min: 0, max: 9 })

      expect(() => dynamicArray.set(0, value)).toThrowError()
    })
  })

  describe('Get method', () => {
    test('Should Return value from the index', () => {
      const dynamicArray = new DynamicArray()
      const value = faker.datatype.number({ min: 0, max: 9 })

      dynamicArray.append(value)

      expect(dynamicArray.get(0)).toBe(value)
    })

    test('Should throw an error if index is equal or bigger than length', () => {
      const dynamicArray = new DynamicArray()
      expect(() => dynamicArray.get(1)).toThrowError()
    })
  })

  describe('Size method', () => {
    test('Should return the size of the array, should be fixed', () => {
      const dynamicArray = new DynamicArray()

      expect(dynamicArray.size()).toBe(dynamicArray.length)
    })
  })

  describe('Clone method', () => {
    test('Should return a new object with the same values', () => {
      const dynamicArray = new DynamicArray()

      expect(dynamicArray.clone()).not.toBe(dynamicArray.array.items)
      expect(dynamicArray.clone()).toEqual(dynamicArray.array.items)
    })
  })

  describe('Reverse method', () => {
    test('Should return a new object with the same values, but reversed', () => {
      const dynamicArray = new DynamicArray()

      dynamicArray.append(0, faker.datatype.number({ min: 0, max: 9 }))
      dynamicArray.append(1, faker.datatype.number({ min: 0, max: 9 }))
      dynamicArray.append(2, faker.datatype.number({ min: 0, max: 9 }))

      const lastIndex = dynamicArray.length - 1

      for (let i = 0; i < lastIndex; i++) {
        expect(dynamicArray.reverse()[i]).toBe(
          dynamicArray.array.items[lastIndex - i]
        )
      }
    })
  })

  describe('From method', () => {
    test('Should return an IDynamicArray from the received array', () => {
      const list = [1, 2, 3]
      const dynamicArray = from(list)

      for (let i; i < list.length; i++) {
        expect(dynamicArray.get(i)).toEqual(list[i])
      }
    })
    test('Should return an IDynamicArray from the received IStaticArray', () => {
      const staticArray = new StaticArray(3)

      staticArray.set(0, 1)
      staticArray.set(1, 2)
      staticArray.set(2, 3)
      const dynamicArray = from(staticArray)

      for (let i; i < staticArray.length; i++) {
        expect(dynamicArray.get(i)).toEqual(staticArray.items[i])
      }
    })
  })
})
