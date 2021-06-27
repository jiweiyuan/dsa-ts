/**
 * List ADT
 * Reference:
 * 1.https://docs.oracle.com/javase/8/docs/api/java/util/List.html
 * 2.https://github.com/tuelsch/ts-linked-list/blob/master/src/LinkedList.ts
 *
 */
export type Comparator<E> = (a: E, b: E) => number

export interface List<E> {
  indexOf(value: E): number
  get(int: number): E
  replace(int: number, value: E)
  remove(int: number): E
  // TODO: implement sort
  sort?(fn: Comparator<E>):void
  reverse?(): List<E>
  forEach?(): void
  map(fn: () => unknown): List<never>
  reduce?(): unknown
}
