class StaticArray {
    constructor(length = 0) {
        if (length < 0) {
            throw new Error("Length should not be less than zero")
        }

        this.length = length
        this.items = Array.from({ length })
    }

    get(index) {
        if (index < 0 || index >= this.size()) {
            throw new Error("Invalid index")
        }

        return this.items[index]
    }

    set(index, value) {
        if (index < 0 || index >= this.size()) {
            throw new Error("Invalid index")
        }

        this.items[index] = value
    }

    clone() {
        const newArray = new StaticArray(this.length)
        for (let i = 0; i < this.size(); i++) {
            newArray.set(i, this.get(i))
        }
        return newArray
    }

    reverse() {
        const newArray = this.clone()
        for (let i = 0; i < Math.floor(newArray.size() / 2); i++) {
            const indexA = i
            const indexB = newArray.size() - i - 1

            const a = newArray.get(indexA)
            const b = newArray.get(indexB)

            newArray.set(indexA, b)
            newArray.set(indexB, a)
        }
        return newArray
    }

    size() {
        return this.length
    }
}

const from = (list) => {
    if (!Array.isArray(list)) {
        throw new Error("Invalid type")
    }

    const array = new StaticArray(list.length)
    for (let i = 0; i < list.length; i++) {
        array.set(i, list[i])
    }
    return array
}

module.exports = {
    StaticArray,
    from,
}