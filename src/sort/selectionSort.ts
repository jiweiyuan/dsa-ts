/**
 * selectionSort
 */
import { swapItemsInArray } from '../utils/swapItemsInArray';

export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swapItemsInArray(arr, i, minIndex)
    }
  }

  return arr
}
