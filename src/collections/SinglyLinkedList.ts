import { LinkedList } from './LinkedList';
import SLNode from './SLNode'
/**
 * Reference:
 * 1. https://docs.oracle.com/javase/7/docs/api/java/util/AbstractList.html
 * 2. https://github.com/sfkiwi/linked-list-typescript/blob/master/src/index.ts
 * 3.https://github.com/drconopoima/linked-list-typescript/blob/master/LinkedList.ts
 */

export default class SinglyLinkedList<E> implements LinkedList<E>{
  private size: number
  private head: SLNode<E> | undefined
  private tail: SLNode<E> | undefined

  constructor(iterable?: Iterable<E>) {
    this.head = this.tail = undefined
    this.size = 0
    for (const value of iterable) {
      this.add(value)
      this.size++
    }
  }

  add(value:E): number {
    const newNode:SLNode<E>= new SLNode(value)
    if (!this.head && !this.tail) {
      this.head = this.tail = newNode
      this.size++
      return this.size
    }

    const currentTail:SLNode<E> = this.tail as SLNode<E>
    currentTail.next = newNode
    this.tail = newNode
    this.size++
    return this.size
  }
  getFirst(): E {
    return this.head && this.head.value
  }

  getLast(): E {
    return this.tail && this.head.value
  }

  get length(): number {
    return this.size
  }
}
