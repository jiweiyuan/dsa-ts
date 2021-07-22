import {BinTree} from './BinTree'

/**
 * More JS Styles
 */

export default class BinTreeNode<E> implements BinTree<E>{

  public value: E | undefined
  private _left: BinTree<E> | undefined
  private _right: BinTree<E> | undefined
  private _parent: BinTree<E> | undefined

  private _size: number
  private _height: number
  private _depth: number

  constructor(value: E, left?: BinTree<E>, right?: BinTree<E>, parent?: BinTree<E>) {
    this._size = 1
    this._height = 0 // from 0
    this._depth = 0 // from 0
    this.value = value
    this.left = left || undefined
    this.right = right || undefined
    this.parent = parent || undefined
  }

  get size(): number {
    return this._size
  }

  get height(): number {
    return this._height
  }

  get depth(): number {
    return this._depth
  }

  get parent(): BinTree<E> | undefined  {
    return this._parent
  }

  set parent(parent: BinTree<E> | undefined) {
    this._parent = parent
    this.updateDepth()
  }

  get left (): BinTree<E> | undefined {
    return this._left
  }

  set left(left: BinTree<E> | undefined) {
    this._left = left
    this.updateSize()
    this.updateHeight()
  }

  get right(): BinTree<E> | undefined  {
    return this._right
  }

  set right(right: BinTree<E> | undefined) {
    this._right = right
    this.updateSize()
    this.updateHeight()
  }

  updateSize(): void {
    const leftChildSize: number = this.left ? this.left.size : 0
    const rightChildSize: number = this.right ? this.right.size : 0
    this._size = leftChildSize + rightChildSize + 1

    if (this.parent) this.parent.updateSize()
  }

  updateHeight(): void {
    const leftChildHeight: number = this.left ? this.left.height : -1
    const rightChildHeight: number = this.right ? this.right.height : -1
    this._height = Math.max(leftChildHeight + 1, rightChildHeight + 1)

    if (this.parent) this.parent.updateHeight()
  }

  updateDepth(): void {
    const parentDepth: number = this.parent ? this.parent.depth : -1
    this._depth = parentDepth + 1

    if (this.left) this.left.updateDepth()
    if (this.right) this.right.updateDepth()
  }

  preOrderTraversal(): Iterable<BinTree<E>> {
    const res: BinTree<E>[] = []
    const stack: BinTree<E>[] = [this]

    while (stack.length) {
      const cur = stack.pop()
      res.push(cur)

      if (cur.right) {
        stack.push(cur.right)
      }
      if (cur.left) {
        stack.push(cur.left)
      }
    }

    return res
  }

  postOrderTraversal(): Iterable<BinTree<E>> {
    const res: BinTree<E>[] = []
    const stack: BinTree<E>[] = [this]

    while (stack.length) {
      const cur = stack.pop()
      res.push(cur)

      if (cur.left) {
        stack.push(cur.left)
      }
      if (cur.right) {
        stack.push(cur.right)
      }
    }

    return res.reverse()
  }

  inOrderTraversal(): Iterable<BinTree<E>> {
    const res: BinTree<E>[] = []
    const stack: BinTree<E>[] = []
    let cur: BinTree<E> | undefined;
    cur = this;

    while (cur || stack.length) {
      while (cur) {
        stack.push(cur)
        cur = cur.left
      }

      cur = stack.pop()
      res.push(cur)
      cur = cur.right
    }

    return res
  }

  levelOrderTraversal(): Iterable<BinTree<E>> {
    const res: BinTree<E>[] = []
    const queue: BinTree<E>[] = [this]

    while (queue.length) {
      const cur = queue.shift()
      res.push(cur)

      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }

    return res
  }
}
