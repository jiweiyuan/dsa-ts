/**
 * Stack ADT
 *
 * Reference:
 * 1. https://github.com/yangshun/lago/blob/master/src/data-structures/Stack.ts
 */

export interface Stack<Item> {
  /**
   * Adds an element to the top of the stack.
   * @param item element
   * @return {number} The number of elements in this stack.
   */
  push(item: Item): number;

  /**
   * Retrieves and removes the top of the stack.
   * @return {Item} The element at the top of the stack. Returns undefined if
   *     this stack is empty.
   */
  pop(): Item | undefined;

  /**
   * Retrieves and does not removes the top of the stack.
   * @return {Item} The element at the top of the stack. Returns undefined if
   *     this stack is empty.
   */
  peek(): Item | undefined;

  /**
   * Returns the number of elements in this stack.
   * @return {number} The number of elements in this stack.
   */
  get length(): number;

  /**
   * Returns true if this stack contains no elements
   * @return {boolean} true is this stack contains no elements
   */
  isEmpty(): boolean;
}
