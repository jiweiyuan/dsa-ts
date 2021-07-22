/**
 * BinTree ADT
 */

export interface BinTree<E> {
  value: E | undefined
  parent: BinTree<E> | undefined
  left: BinTree<E> | undefined
  right: BinTree<E> | undefined

  get size(): number
  get height(): number
  get depth(): number

  updateDepth(): void
  updateSize(): void
  updateHeight(): void

  preOrderTraversal?(): Iterable<BinTree<E>>
  inOrderTraversal?(): Iterable<BinTree<E>>
  postOrderTraversal?(): Iterable<BinTree<E>>
  levelOrderTraversal?(): Iterable<BinTree<E>>
}
