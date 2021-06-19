export interface Stack<Item> {
  push(item: Item): number;
  pop(): Item | undefined;
  isEmpty(): boolean;
  peek(): Item | undefined;
  get length(): number;
}
