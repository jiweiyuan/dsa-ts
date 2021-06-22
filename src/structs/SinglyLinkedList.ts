import { LinkedList } from './LinkedList';
import SLNode from './SLNode'
/**
 * A SinglyLinkedList is linked list where each node is an object that stores a
 * a reference to an element and a reference , called next, to another node.
 *
 * Reference:
 * 1. https://docs.oracle.com/javase/7/docs/api/java/util/AbstractList.html
 * 2. https://github.com/sfkiwi/linked-list-typescript/blob/master/src/index.ts
 * 3. https://github.com/drconopoima/linked-list-typescript/blob/master/LinkedList.ts
 * 4. https://www.cpp.edu/~ftang/courses/CS240/lectures/slist.htm
 */

export default class SinglyLinkedList<E> implements LinkedList<E>{
  private size: number
  private head: SLNode<E> | undefined
  private tail: SLNode<E> | undefined

  constructor(values?: Iterable<E>) {
    this.head = this.tail = undefined
    this.size = 0

    if (values) {
      for (const value of values) {
        this.add(value)
      }
    }
  }

  add(value:E): number {
    const newNode:SLNode<E>= new SLNode(value)
    if (this.size === 0) {
      this.head = this.tail = newNode
      this.size++
      return this.size
    }

    const currentTail: SLNode<E> = this.tail
    currentTail.next = newNode
    this.tail = newNode
    this.size++
    return this.size
  }

  addFirst(value: E): number {
    const newNode: SLNode<E> = new SLNode(value)
    if (this.size === 0) {
      this.head = this.tail = newNode
      this.size++
      return this.size
    }

    const currentHead: SLNode<E> = this.head
    this.head = newNode
    this.head.next = currentHead
    this.size++
    return this.size
  }

  addLast(value: E): number {
    return this.add(value)
  }

  getFirst(): E {
    return this.head && this.head.value
  }

  getLast(): E {
    return this.tail && this.tail.value
  }

  clear() {
    this.head = this.tail = undefined
    this.size = 0
  }

  removeFirst(): E | undefined {
    if (this.size === 0) return undefined



    if (this.size === 1) {
      const value = this.head.value
      this.head = this.tail = undefined
      this.size--
      return value
    }

    let deletedHead: SLNode<E> = this.head
    const value = deletedHead.value
    this.head = deletedHead.next
    deletedHead = null
    this.size--
    return value
  }

  removeLast(): E | undefined {
    if (this.size === 0) return undefined

    if (this.size === 1) {

      const value = this.tail.value
      this.head = this.tail = undefined
      this.size--
      return value
    }

    let currentNode: SLNode<E> = this.head
    let value: E

    while (currentNode.next) {
      if (!currentNode.next.next) {
        value = currentNode.next.value
        this.tail = currentNode
        currentNode.next = undefined
        break
      }
      currentNode = currentNode.next
    }
    this.size--
    return value
  }

  get length(): number {
    return this.size
  }
}
