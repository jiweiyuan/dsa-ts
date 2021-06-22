import { Position } from './Position';

export default class SLNode<T> implements Position<T>{

  value: T | undefined
  next: SLNode<T> | undefined

  constructor(value?: T) {
    this.value = (typeof value !== 'undefined') ? value : undefined
    this.next = undefined
  }
}
