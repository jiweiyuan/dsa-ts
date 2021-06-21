export interface Stack<Item> {
  push(item: Item): number;
  pop(): Item | undefined;
  peek(): Item | undefined;
  get length(): number;
  isEmpty(): boolean;
}
