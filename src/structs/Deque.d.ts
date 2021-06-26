/**
 * Deque ADT
 * Reference:
 * 1.https://docs.oracle.com/javase/7/docs/api/java/util/Deque.html
 */

export interface Deque<E> {

  /**
   * Retrieves, but does not remove, the first element of this deque, or returns
   * undefined if this deque is empty.
   * @return {*} The head of this deque, or undefined if this deque is empty
   */
  first(): E | undefined

  /**
   * Retrieves, but does not remove, the last element of this deque, or returns
   * undefined if this deque is empty.
   * @return {*} The tail of this deque, or undefined if this deque is empty
   */
  last(): E | undefined

  /**
   * Insert the specified element at the front of this deque
   * @param E The element to add
   * @return {number} The new length of this deque.
   */
  insertFirst(E): number

  /**
   * Insert the specified element at end of this deque
   * @param E The element to add
   * @return {number} The new length of this deque.
   */
  insertLast(E): number

  /**
   * Retrieves and removes the first element of this deque. Return undefined if
   * this deque is empty.
   * @return {*} The head of this deque. or undefined if this deque is empty.
   */
  removeFirst(): E | undefined

  /**
   * Retrieves and removes the last element of this deque. Return undefined if
   * this deque is empty.
   * @return {*} The tail of this deque. or undefined if this deque is empty.
   */
  removeLast(): E | undefined

  // TODO: How to comment a get function in class or interface?
  /**
   * Returns the size of elements in this deque.
   * @return {number} The size of elements in this deque.
   */
  get length(): number
}
