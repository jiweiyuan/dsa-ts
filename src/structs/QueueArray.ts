import { Queue } from './Queue';

/**
 * QueueArray
 * #### Reference
 * https://github.com/google/closure-library/blob/master/closure/goog/structs/queue.js
 */

export default class QueueArray<Item> implements Queue<Item> {
  private front: Item[]
  private back: Item[]

  constructor(iterable?: Iterable<Item>) {
    this.front = []
    this.back = iterable ? [...iterable]: []
  }

  private maybeFlip() {
    if (this.front.length === 0) {
      this.front = this.back
      this.front.reverse()
      this.back = []
    }
  }

  enqueue(item: Item): number {
    this.back.push(item)
    return this.length
  }

  dequeue(): Item | undefined {
    this.maybeFlip()
    return this.front.pop()
  }

  peek(): Item | undefined {
    this.maybeFlip()
    return this.front[this.front.length - 1]
  }

  get length(): number {
    return this.front.length + this.back.length
  }

  isEmpty(): boolean {
    return this.front.length === 0 && this.back.length === 0
  }
}
