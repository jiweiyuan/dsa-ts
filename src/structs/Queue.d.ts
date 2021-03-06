/**
 * Queue ADT
 * TODO: How to differentiate interface and class implement file
 * Reference:
 * 1.https://github.com/google/closure-library/blob/master/closure/goog/structs/queue.js
 */
export interface Queue<E> {
  /**
   * Puts the specified element on this queue.
   * @param item The element to be added the queue.
   * @return {number} The number of elements in this queue.
   */
  enqueue(item: E): number;

  /**
   * Retrieves and removes the head of this queue.
   * @return {E} The element at the head of this queue. Returns undefined if the
   *     queue is empty.
   */
  dequeue(): E | undefined;

  /**
   * Retrieves but does not remove the head of this queue.
   * @return E The element at the head of this queue. Returns undefined if the
   *    queue is empty
   */
  peek(): E | undefined;

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
