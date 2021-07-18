/**
 * StackArray
 * This file provide the implementation of a Stack using Array
 */


import { Stack } from './Stack'
// TODO: do you understand Stack generic Item? 表示一致
export default class StackArray<Item> implements Stack<Item> {
  private items: Item[]
  constructor(iterable?: Iterable<Item>) {
    this.items = iterable ? [...iterable] : []
  }

  push(item: Item): number {
    return this.items.push(item)
  }

  pop(): Item | undefined {
    return this.items.pop()
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

  get length(): number {
    return this.items.length
  }
}
