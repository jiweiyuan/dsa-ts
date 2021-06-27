/**
 * Iterable ADT
 */

export interface Iterable<E> {
  /** Iterator */
  [Symbol.iterator](): Iterator<E>
}
