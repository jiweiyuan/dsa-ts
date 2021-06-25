
export interface LinkedList<E> {
  add(value: E): number
  addFirst?(value: E): number
  addLast?(value: E): number
  insert?(index: number, value: E): number

  get?(index: number): E
  getFirst(): E
  getLast(): E

  indexOf?(value: E): number
  clear?(): void
  remove?(value: E)
  removeFirst(): E | undefined
  removeLast(): E | undefined
  removeAt?(index: number): E
  get length(): number
}
