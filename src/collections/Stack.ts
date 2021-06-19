export interface Stack<Item> {
  push(item: Item): void;
  pop(): Item | undefined;
  isEmpty(): boolean;
  peek(): Item | undefined;
  get length(): number;
}
