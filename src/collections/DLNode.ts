import { Position } from './Position';

export default class DLNode<T> implements Position<T>{

  value: T | undefined
  next: DLNode<T> | undefined
  prev: DLNode<T> | undefined

  constructor(value?: T) {
    this.value = (typeof value !== 'undefined') ? value : undefined
    this.next = undefined
    this.prev = undefined
  }
}
