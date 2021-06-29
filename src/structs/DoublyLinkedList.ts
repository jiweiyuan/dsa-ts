import DLNode from './DLNode';
import { LinkedList } from './LinkedList';
import { Iterable } from './Iterable';

/**
 * Linked
 * Reference:
 * 1.https://github.com/tuelsch/ts-linked-list/blob/master/src/LinkedList.ts
 */
export default class DoublyLinkedList<E> implements LinkedList<E>, Iterable<E>{
  private dummyHead: DLNode<E>
  private dummyTail: DLNode<E>
  private size: number

  constructor(iterable?: Iterable<E>) {
    this.dummyHead = new DLNode()
    this.dummyTail = new DLNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
    this.size = 0

    if (iterable) {
      for (const value of iterable) {
        this.addLast(value)
      }
    }
  }

  add(value: E): number {
    return this.addLast(value)
  }

  addLast(value: E): number {
    const currentLastNode = this.dummyTail.prev
    const newLastNode = new DLNode(value)

    currentLastNode.next = newLastNode
    newLastNode.prev = currentLastNode
    newLastNode.next = this.dummyTail
    this.dummyTail.prev = newLastNode

    this.size++
    return this.size
  }

  addFirst(value: E): number {
    const firstNode = this.dummyHead.next
    const newFirstNode = new DLNode(value)

    this.dummyHead.next = newFirstNode
    newFirstNode.prev = this.dummyHead
    newFirstNode.next = firstNode
    firstNode.prev = newFirstNode

    this.size++
    return this.size
  }

  removeFirst(): E | undefined {
    if(this.isEmpty()) return undefined

    const firstNode = this.dummyHead.next
    const newFirstNode = firstNode.next

    newFirstNode.prev = this.dummyHead
    this.dummyHead.next = newFirstNode
    firstNode.prev = null
    firstNode.next = null

    this.size--
    return firstNode.value
  }

  removeLast(): E | undefined {
    if(this.isEmpty()) return undefined

    const lastNode = this.dummyTail.prev
    const newLastNode = this.dummyTail.prev.prev

    newLastNode.next = this.dummyTail
    this.dummyTail.prev = newLastNode

    lastNode.prev = null
    lastNode.next = null

    this.size--
    return lastNode.value
  }

  getFirst(): E {
    if (this.isEmpty()) return undefined

    return this.dummyHead.next.value
  }

  getLast(): E {
    if (this.isEmpty()) return undefined

    return this.dummyTail.prev.value
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  get length():number {
    return this.size
  }

  *[Symbol.iterator]():IterableIterator<E> {

    let current = this.dummyHead

    while (current.next !== this.dummyTail) {
      yield current.next.value
      current = current.next
    }
  }
}
