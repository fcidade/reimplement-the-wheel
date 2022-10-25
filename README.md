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

#### Static Array:
The array data structure is an **immutable** list. 
It has a fixed length but it's items can be changed.
All items in an array should be of the same type.

Interface and useful functions:
```ts
interface IStaticArray<T> {
    constructor(private readonly length: number) {}
    set(index: number, value: T): void | error
    get(index: number): T | error
    size(): number
    clone(): IStaticArray<T> // Return copy
    reverse(): IStaticArray<T> // Return copy
}

function from(values: T[]): IStaticArray<T>
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
    - Should return an IStaticArray from the received array

#### Dynamic Array
! Should use Static Array instead of JS Array !
The array data structure is a **mutable** list. 
It has a dynamiic length and it's items can be changed.
All items in an array should be of the same type.

Interface and useful functions:
```ts
interface IDynamicArray<T> {
    constructor(private readonly length: number) {}
    append(value: T): void
    remove(index: number): void | error
    set(index: number, value: T): void | error
    get(index: number): T | error
    size(): number
    clone(): IDynamicArray<T> // Return copy
    reverse(): IDynamicArray<T> // Return copy
}

function from(values: T[]): IDynamicArray<T>
function from(values: StaticArray[]): IDynamicArray<T>
```

Usecases:
- Constructor:
    - Length should be zero or bigger
- Append:
    - Should set item on the end of the list correctly
- Remove:
    - Should remove the item on index correctly, and update it's length
    - Should throw an error if index is smaller than zero
    - Should throw an error if index is equal or bigger than length
- Set:
    - Should set item on index correctly
    - Should throw an error if index is smaller than zero
    - Should throw an error if index is equal or bigger than length
    - Should throw an error if value is not the correct type
- Get:
    - Return value from the index
    - Should throw an error if index is smaller than zero
    - Should throw an error if index is equal or bigger than length
- Size:
    - Return the size of the array, should be fixed
- Clone:
    - Should return a new object with the same values
- Reverse:
    - Should return a new object with the same values, but reversed
- From:
    - Should return an IDynamicArray from the received array
    - Should return an IDynamicArray from the received IStaticArray