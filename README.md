### Reimplement the wheel

Repository so that I (@fcidade) and @gabrielEscame could learn how to implement Data Structures and Design Patterns.

#### Topics:

- Data structures:
    - Array (Fixed size)
    - Tuple (Fixed size, fixed value)
    - Dynamic List
    - Linked List
    - Stack
    - Queue
    - Tree
    - Map
    - Ordered Map
    - Graph

- Design Patterns:
    - Observer
    - Strategy
    - Composite
    - Adapter
    ...

#### Flow:
- Implement one data structure and one design pattern a day
- The first iteration should be with Javascript, with classes
    - Then, Javascript, with classes
    - Then, Typescript, but no classes allowed
    - Then, Java
    - Then, Rust

### Data Structures

##### Future:
- [ ] Implement filter
- [ ] Implement map
- [ ] Implement reduce
- [ ] Implement zip
- [ ] Implement forEach

#### Array:
The array data structure is an **immutable** list. 
It has a fixed length but it's items can be changed.
All items in an array should be of the same type.


Interface and useful functions:
```ts
interface IArray<T> {
    constructor(private readonly length: number) {}
    set(index: number, value: T): void | error
    get(index: number): T | error
    size(): number
    clone(): IArray<T> // Return copy
    reverse(): IArray<T> // Return copy
}

function from(values: T[]): IArray<T>
```

Usecases:
- Constructor:
    - Length should be zero or bigger
- Set:
    - Should set item on index correctly
    - Should throw an error if index is equal or bigger than length
    - Should throw an error if value is not the correct type
- Get:
    - Return value from the index
    - Should throw an error if index is equal or bigger than length
- Size:
    - Return the size of the array, should be fixed
- Clone:
    - Should return a new object with the same values
- Reverse:
    - Should return a new object with the same values, but reversed
- From:
    - Should return an IArray from the received array