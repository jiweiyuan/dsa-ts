import {selectionSort} from '../../src/sort/selectionSort';

describe('selectionSort', () => {
  it('selectionSort can sort an array', () => {
    expect(selectionSort([1, 5, 7, 8, 3, 2, 4])).toEqual([1, 2, 3, 4, 5, 7, 8])
  })
})
