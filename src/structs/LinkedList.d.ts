
export interface LinkedList<E> {
  /**
   * Adds an element to the end of the LinkedList
   * @param value
   * @return {number} The new length of the LinkedList
   */
  add(value: E): number

  /**
   * Adds an element to the front of the DoublyLinkedList
   * @param value
   * @return {number} The new length of the LinkedList
   */
  addFirst?(value: E): number

  /**
   * Adds an element to the end of the LinkedList, as Same as add().
   * @param value
   * @return {number} The new length of the LinkedList
   */
  addLast?(value: E): number

  insert?(index: number, value: E): number

  get?(index: number): E

  /**
   * Returns the element at the front of the LinkedList.
   * @return {*} The element at the front of the LinkedList.
   */
  getFirst(): E

  /**
   * Returns the element at the end of the LinkedList
   * @return {*} The element at the end of the LinkedList
   */
  getLast(): E

  indexOf?(value: E): number
  clear?(): void
  remove?(value: E)

  /**
   * Removes the element at the front of the LinkedList.
   * @return {*} The element at the front of the LinkedList.
   */
  removeFirst(): E | undefined

  /**
   * Removes the element at the end of the LinkedList.
   * @return {*} The element at the end of the LinkedList.
   */
  removeLast(): E | undefined
  removeAt?(index: number): E

  /**
   * Gets the length of the LinkedList
   */
  get length(): number

  /**
   * Returns true if the LinkedList is empty
   */
  isEmpty?(): boolean
}
