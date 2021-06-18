/**
 * insertionSort
 * sort a number array form small to big
 */

export function insertionSort(arr: number[]): number[]{

  for (let i = 1; i < arr.length; i++) {
    const current:number = arr[i]
    let preIndex = i - 1

    while (preIndex >= 0 && current < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex+1] = current
  }

  return  arr
}
