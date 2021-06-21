export default class LinkedListNode<T> {

  value: T | undefined
  next: LinkedListNode<T> | undefined
  prev: LinkedListNode<T> | undefined

  constructor(value?: T) {
    this.value = (typeof value !== 'undefined') ? value : undefined
    this.next = undefined
    this.prev = undefined
  }
}
