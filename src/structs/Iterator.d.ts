export interface Iterator<E> {
  next: () => {
    value: E
    done: boolean
  }
}
