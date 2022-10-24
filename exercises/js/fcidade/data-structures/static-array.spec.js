const { StaticArray, from } = require("./static-array")
const { faker } = require("@faker-js/faker")

const emptyArray = (amountOfItems) => Array.from({ length: amountOfItems })

const validArrayLength = () => faker.datatype.number({ min: 0 })
const validArrayLengthWithAtLeast = (min) => faker.datatype.number({ min })

const negativeNumber = () => faker.datatype.number({ min: -100, max: -1 })
const numberStartigAt = (start) => faker.datatype.number({ min: start })
const numberBetween = (min, max) => faker.datatype.number({ min, max })

const randomList = (amountOfItems) => Array
    .from({ length: amountOfItems })
    .map(() => faker.datatype.string())

describe("Static Array", () => {

    describe("Constructor", () => {
        it("Should create an empty array if no length is passed", () => {
            const array = new StaticArray()
            expect(array.items).toEqual([])
            expect(array.length).toEqual(0)
        })

        it("Should create the amount of elements passed", () => {
            const amountOfItems = validArrayLength()
            const array = new StaticArray(amountOfItems)

            expect(array.items).toEqual(emptyArray(amountOfItems))
            expect(array.length).toEqual(amountOfItems)
        })

        it("Should return an error if length if lesser than zero", () => {
            const size = negativeNumber()

            expect(() => {
                new StaticArray(size)
            }).toThrow(new Error('Length should not be less than zero'))
        })
    })

    describe("Set", () => {
        it("Should set item on index correctly", () => {
            const amountOfItems = validArrayLengthWithAtLeast(10)
            const array = new StaticArray(amountOfItems)

            const index = numberBetween(0, 9)
            const value = faker.datatype.string()

            array.set(index, value)
            expect(array.items[index]).toEqual(value)

        })

        it("Should throw an error if index is negative", () => {
            const amountOfItems = validArrayLength()
            const array = new StaticArray(amountOfItems)

            const index = negativeNumber()

            expect(() => {
                array.set(index)
            }).toThrow(new Error("Invalid index"))
        })

        it("Should throw an error if index is equal or bigger than length", () => {
            const amountOfItems = validArrayLength()
            const array = new StaticArray(amountOfItems)

            const index = numberStartigAt(amountOfItems)

            expect(() => {
                array.set(index)
            }).toThrow(new Error("Invalid index"))
        })
    })

    describe("Get", () => {
        it("Return value from the index", () => {
            const amountOfItems = validArrayLengthWithAtLeast(10)
            const array = new StaticArray(amountOfItems)

            const index = numberBetween(0, 9)
            const value = faker.datatype.string()

            array.set(index, value)
            expect(array.get(index)).toEqual(value)
        })

        it("Should throw an error if index is negative", () => {
            const amountOfItems = validArrayLength()
            const array = new StaticArray(amountOfItems)

            const index = negativeNumber()

            expect(() => {
                array.get(index)
            }).toThrow(new Error("Invalid index"))
        })

        it("Should throw an error if index is equal or bigger than length", () => {
            const amountOfItems = validArrayLength()
            const array = new StaticArray(amountOfItems)

            const index = numberStartigAt(amountOfItems)

            expect(() => {
                array.get(index)
            }).toThrow(new Error("Invalid index"))
        })
    })

    describe("Size", () => {
        it("Return the size of the array, should be fixed", () => {
            const amountOfItems = validArrayLength()
            const array = new StaticArray(amountOfItems)
            expect(array.size()).toEqual(amountOfItems)
        })
    })

    describe("Clone", () => {
        it("Should return a new object with the same values", () => {
            const amountOfItems = validArrayLength()
            const originalArray = new StaticArray(amountOfItems)
            const newArray = originalArray.clone()

            expect(originalArray.items).toEqual(newArray.items)
            expect(originalArray.length).toEqual(newArray.length)
            expect(originalArray).not.toBe(newArray)
        })
    })

    describe("Reverse", () => {
        it("Should return a new object with the same values, but reversed", () => {
            const amountOfItems = validArrayLength()
            const list = randomList(amountOfItems)
            const originalArray = from(list)
            const newArray = originalArray.reverse()

            expect(originalArray.items).not.toEqual(newArray.items)
            expect(originalArray.items).toEqual(newArray.items.reverse())
            expect(originalArray.length).toEqual(newArray.length)
            expect(originalArray).not.toBe(newArray)
        })
    })

    describe("From", () => {
        it("Should return an IArray from the received array", () => {
            const amountOfItems = validArrayLength()
            const list = randomList(amountOfItems)
            const expectedArray = new StaticArray(list.length)
            list.forEach((value, i) => {
                expectedArray.set(i, value)
            })
            expect(expectedArray).toEqual(from(list))
        })

        it("Should return an error if invalid parameters was passed", () => {
            expect(() => {
                from("string")
            }).toThrow(new Error("Invalid type"))
        })

    })

})