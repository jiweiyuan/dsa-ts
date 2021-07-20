/**
 * Tree ADT
 */

export interface Tree<E> {
  value: E
  parent: Tree<E> | undefined
  children: Iterable<Tree<E>> | undefined
  nextSibling?: Tree<E> | undefined
  lastChild?: Tree<E> | undefined

  getValue?(): E | undefined
  setValue?(value: E): void
  getParent?(): Tree<E>
  addChild?(child: Tree<E>): void
  addChildren?(children: Iterable<Tree<E>>)

  getFirstChild?(): Tree<E>
  getLastChild?(): Tree<E>
  getNextSibling?(): Tree<E>

  removeChild?(child: Tree<E>): void
  contains?(child: Tree<E>): boolean

  isRoot?(): boolean
  getSize?(): number
  getHeight?(): number
  getDepth?(): number

  postOrderTraversal?(): Iterable<Tree<E>> | undefined
  preOrderTraversal?(): Iterable<Tree<E>> | undefined
  levelOrderTraversal?(): Iterable<Tree<E>> | undefined
}
