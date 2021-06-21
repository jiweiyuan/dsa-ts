
export interface List<E> {
  add(value: E): number;
  add(index: number, value: E): number
  addFirst?(): number
  addLast?(): number
  get(index: number): E
  getFirst?(): E
  getLast?(): E
  peek?(): E
  peekFirst?(): E
  peekLast?(): E
  indexOf(E): number
  clear(): void
  remove?(value: E)
  removeAt?(index: number): E
  readonly length: number
  head?: E
  tail?: E
}
