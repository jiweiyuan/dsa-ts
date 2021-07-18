import { Tree } from './Tree'

export default class TreeArray<E> implements Tree<E> {

  // FIXME: should parent's type is Array<Tree<E>> or Array<TreeArray<E>>

  public value: E
  public parent: Tree<E> | undefined
  public children: Array<Tree<E>> | undefined
  readonly nextSibling?: Tree<E> | undefined
  public lastChild?: Tree<E> | undefined = undefined

  constructor(
    value: E,
    parent?: Tree<E> | undefined,
    children?: Iterable<Tree<E>> | undefined
  ) {
    this.value = value
    this.parent = parent === undefined ? undefined : parent
    if(this.parent) {
      this.parent.addChild(this)
    }
    this.children = []
    if (children) {
      for (const item of children) {
        this.addChild(item)
      }
    }
  }

  getValue(): E | undefined {
    return this.value
  }

  setValue(value: E) {
    this.value = value
  }

  addChild(child: Tree<E>) {
    child.parent = this

    if (this.lastChild) {
      this.lastChild.nextSibling = child
    }
    this.children.push(child)
    this.lastChild = this.children[this.children.length - 1]
  }


  addChildren(children: Iterable<Tree<E>>) {
    for (const item of children) {
      this.addChild(item)
    }
  }

  getFirstChild(): Tree<E> | undefined {
    return this.children[0]
  }

  getLastChild(): Tree<E> | undefined {
    return this.children[this.children.length - 1]
  }

  getParent(): Tree<E> | undefined {
    return this.parent
  }

  getNextSibling(): Tree<E> | undefined {
    return this.nextSibling
  }

  removeChild(child: Tree<E>) {
    const deleteIndex = this.children.indexOf(child)
    this.children.splice(deleteIndex, 1)
    if (deleteIndex > 0 && deleteIndex < this.children.length) {
      this.children[deleteIndex-1].nextSibling = this.children[deleteIndex]
    }
  }

  contains(child: Tree<E>): boolean {
    return this.children.includes(child)
  }

  isRoot(): boolean {
    return this.parent === undefined
  }

  getSize(): number {
    let size = 0
    const _traverse = (item: Tree<E>): void => {
      ++size
      if(Array.isArray(item.children)) {
        item.children.forEach(item => {
          _traverse(item)
        })
      }
    }
    _traverse(this)
    return size
  }




}
