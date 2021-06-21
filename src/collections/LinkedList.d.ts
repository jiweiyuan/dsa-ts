import { Position } from './Position';

export interface LinkedList<E> {
  add(value: E): number
  addFirst?(): number
  addLast?(): number
  insert?(index: number, value: E): number

  get?(index: number): E
  getFirst?(): E
  getLast?(): E
  peek?(): E
  peekFirst?(): E
  peekLast?(): E

  indexOf?(E): number
  clear?(): void
  remove?(value: E)
  removeFirst?(): E | undefined
  removeLast?(): E | undefined
  removeAt?(index: number): E
  get length(): number
  head?: Position<E> | undefined
  tail?: Position<E> | undefined
}
