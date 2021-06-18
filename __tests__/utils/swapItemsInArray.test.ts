import {swapItemsInArray} from '../../src/utils/swapItemsInArray';

describe('swapItemsInArray', () => {
  it('swapItemsInArray can swap items in a array', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6]
    swapItemsInArray(arr, 0, 5)

    expect(arr).toEqual([5, 1, 2, 3, 4, 0, 6])
  })
})
