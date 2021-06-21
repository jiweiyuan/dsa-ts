/**
 * Queue ADT
 * TODO: How to differentiate interface and class implement file
 */
export interface Queue<Item> {
  /**
   * Puts the specified item on this queue.
   * @param item The item to be added the queue.
   */
  enqueue(item: Item): number;

  /**
   * Retrieves an removes the head of this queue.
   * @return Item The item at the head of this queue. Returns undefined if the
   *     queue is empty.
   */
  dequeue(): Item | undefined;

  /**
   *
   */
  peek(): Item | undefined;

  get length():number;

  isEmpty(): boolean;
}
