export interface Position<T> {
  value: T
  next: Position<T>
  prev?: Position<T>
}
