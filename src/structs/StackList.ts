import { Stack } from './Stack'
import SinglyLinkedList from './SinglyLinkedList';

/**
 * StackList
 * ## TODO: What difference item vs element ?
 * element: abstract aspect
 */
export default class StackList<E> implements Stack<E> {
  private list: SinglyLinkedList<E>

  constructor(iterable?: Iterable<E>) {
    this.list = new SinglyLinkedList<E>()

    if (iterable) {
      for (const value of iterable) {
        this.list.addFirst(value)
      }
    }
  }

  push(item: E): number {
    return this.list.addFirst(item)
  }

  pop(): E | undefined {
    return this.list.removeFirst()
  }

  peek(): E | undefined {
    return this.list.getFirst()
  }

  isEmpty(): boolean {
    return this.list.length === 0
  }

  get length(): number {
    return this.list.length
  }

}
