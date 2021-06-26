import { Deque } from './Deque';
import DoublyLinkedList from './DoublyLinkedList';

/**
 * DequeList
 */

export default class DequeList<E> implements Deque<E> {
  private list: DoublyLinkedList<E>

  constructor(iterable?: Iterable<E>) {
    this.list = new DoublyLinkedList(iterable)
  }

  first(): E | undefined {
    return this.list.getFirst()
  }

  last(): E | undefined {
    return this.list.getLast()
  }

  insertFirst(value: E): number {
    return this.list.addFirst(value)
  }

  insertLast(value: E): number {
    return this.list.addLast(value)
  }

  removeFirst(): E | undefined {
    return this.list.removeFirst()
  }

  removeLast(): E | undefined {
    return this.list.removeLast()
  }

  get length(): number {
    return this.list.length
  }
}
