import { insertionSort } from '../../src/sort/insertionSort';

describe('insertionSort', () => {
  it('insertionSort can sort a number array from small to big', () => {
    const unsorted = [1, 8, 9, 5, 4, 3]
    const sorted = [1, 3, 4, 5, 8, 9]
    expect(insertionSort(unsorted)).toEqual(sorted)
  })
})
