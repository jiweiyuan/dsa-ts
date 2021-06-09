import { bubbleSort } from '../../src/sort/bubbleSort'

describe('bubbleSort', () => {

  const unsorted = [1, 8, 9, 5, 4, 3]
  const sorted = [1, 3, 4, 5, 8, 9]


  it('bubbleSort a unsorted array', () => {
    expect(bubbleSort(unsorted)).toEqual(sorted)
  });
});
