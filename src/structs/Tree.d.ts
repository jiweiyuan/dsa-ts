/**
 * Tree ADT
 */

export interface Tree<E> {
  getElem(): E | undefined
  setElem(value: E): void
  getParent(): Tree<E>
  getFirstChild(): Tree<E>
  getNextSibling(): Tree<E>
  get length(): number
  get height(): number
  get depth(): number
}
