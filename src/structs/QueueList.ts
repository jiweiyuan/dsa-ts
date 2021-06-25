import SinglyLinkedList from './SinglyLinkedList';
import { Queue } from './Queue';
/**
 * QueueList
 */


export default class QueueList<E> implements Queue<E> {
  private list:SinglyLinkedList<E>

  constructor(iterable?: Iterable<E>) {
    this.list = new SinglyLinkedList(iterable)
  }

  enqueue(item: E): number {
    return this.list.addLast(item)
  }

  dequeue(): E | undefined {
    return this.list.removeFirst()
  }

  peek(): E | undefined {
    return this.list.getFirst()
  }

  get length(): number {
    return this.list.length
  }

  isEmpty(): boolean {
    return this.list.length === 0
  }
}
