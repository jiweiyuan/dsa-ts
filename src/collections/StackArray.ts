/**
 * StackArray
 * This file provide the implementation of a Stack using Array
 */


import { Stack } from './Stack'
// TODO: any type ?
export class StackArray<Item> implements Stack<any>{
  private items: Item[]
  constructor(iterable?: Iterable<Item>) {
    this.items = iterable ? [...iterable] : []
  }

  push(item: Item) {
    return this.items.push(item)
  }

  pop(): Item | undefined {
    return  this.items.pop()
  }

  peek(): Item | undefined {
    return this.items[this.items.length - 1]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  clear(): void {
    this.items = []
  }

  get length() {
    return this.items.length
  }
}
