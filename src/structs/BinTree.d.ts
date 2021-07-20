/**
 * BinTree ADT
 */

export interface BinTree<E> {
  value: E | undefined
  size: number
  height: number
  depth: number
  parent: BinTree<E>
  left: BinTree<E>
  right: BinTree<E>

  setLeft(tree: BinTree<E>):void
  getLeft(): BinTree<E>

  setRight(tree: BinTree<E>):void
  getRight(): BinTree<E>

  setParent(tree: BinTree<E>):void
  getParent(): BinTree<E>

  preOrderTraversal(): Iterable<BinTree<E>>
  inOrderTraversal(): Iterable<BinTree<E>>
  postOrderTraversal(): Iterable<BinTree<E>>
  levelOrderTraversal(): Iterable<BinTree<E>>
}
