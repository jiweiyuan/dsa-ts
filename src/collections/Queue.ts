/**
 * Queue ADT
 * TODO: How to differentiate interface and class implement file
 * Reference:
 * 1.https://github.com/google/closure-library/blob/master/closure/goog/structs/queue.js
 */
export interface Queue<Item> {
  /**
   * Puts the specified item on this queue.
   * @param item The item to be added the queue.
   */
  enqueue(item: Item): number;

  /**
   * Retrieves and removes the head of this queue.
   * @return Item The item at the head of this queue. Returns undefined if the
   *     queue is empty.
   */
  dequeue(): Item | undefined;

  /**
   * Retrieves but not remove the head of this queue.
   * @return Item The element at the head of this queue. Return undefined if the
   *    queue is empty
   */
  peek(): Item | undefined;

  /**
   * Returns the number of elements in this queue.
   * @return {number} The number of elements in this queue.
   */
  get length():number;

  /**
   * Returns true if this queue contains no elements.
   * @return {boolean} true if this queue contains no elements.
   */
  isEmpty(): boolean;
}
