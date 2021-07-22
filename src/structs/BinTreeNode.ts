import {BinTree} from './BinTree'

export default class BinTreeNode<E> implements BinTree<E>{
  /**
   * More JS Styles
   */

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
    this._size = Math.max(leftChildSize + 1, rightChildSize + 1)

    if (this.parent) this.parent.updateSize()
  }

  updateHeight(): void {
    const leftChildHeight: number = this.left ? this.left.height : 0
    const rightChildHeight: number = this.right ? this.right.height : 0
    this._height = Math.max(leftChildHeight + 1, rightChildHeight + 1)

    if (this.parent) this.parent.updateHeight()
  }

  updateDepth(): void {
    const parentDepth: number = this.parent ? this.parent.depth : 0
    this._depth = parentDepth + 1

    if (this.left) this.left.updateDepth()
    if (this.right) this.right.updateDepth()
  }


}
