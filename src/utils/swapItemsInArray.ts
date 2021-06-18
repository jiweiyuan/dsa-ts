/**
 * swapItemsInArray
 * this method will mutate the array
 * TODO: whether add special case logic or not(e.g., index less than 0)
 */

export function swapItemsInArray<T>(items: T[], indexA:number, indexB: number) {
  const temp = items[indexA]
  items[indexA] = items[indexB]
  items[indexB] = temp
}
