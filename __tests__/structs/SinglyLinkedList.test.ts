import SinglyLinkedList from '../../src/structs/SinglyLinkedList';

let list: SinglyLinkedList<string>
beforeEach(() => {
  list = new SinglyLinkedList()
})

describe('SinglyLinkedList', () => {
  it('should create an empty list', function() {
    expect(list.length).toBe(0)
  });

  it('creates from a iterable object', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const list: SinglyLinkedList<number> = new SinglyLinkedList(arr)

    expect(list.length).toBe(6)
    expect(list.getFirst()).toBe(1)
    expect(list.getLast()).toBe(6)
  })

  it('returns the first element of list', () => {
    expect(list.getFirst()).toBeUndefined()
  })

  it('returns the last element of list', () => {
    expect(list.getLast()).toBeUndefined()
  })

  it('inserts elements at the first of list', () => {
    list.addFirst('a')
    expect(list.length).toBe(1)
    expect(list.getFirst()).toBe('a')
    expect(list.addFirst('b')).toEqual(2)
    expect(list.length).toBe(2)
    expect(list.getFirst()).toBe('b')
  })

  it('inserts elements at the last of list', () => {
    list.add('a')
    expect(list.length).toBe(1)
    expect(list.getLast()).toBe('a')
    expect(list.addLast('b')).toBe(2)
    expect(list.getLast()).toBe('b')
  })

  it('clears the list', () => {
    const list: SinglyLinkedList<number> = new SinglyLinkedList([1, 2, 3, 4])
    expect(list.length).toBe(4)
    list.clear()
    expect(list.length).toBe(0)
    expect(list.getFirst()).toBeUndefined()
    expect(list.getLast()).toBeUndefined()
  })

  it('removes first element of list', () => {
    const list:SinglyLinkedList<number> = new SinglyLinkedList([1, 2, 3])
    expect(list.removeFirst()).toBe(1)
    expect(list.removeFirst()).toBe(2)
    expect(list.removeFirst()).toBe(3)
    expect(list.removeFirst()).toBeUndefined()
  })

  it('removes last element of list', () => {
    const list:SinglyLinkedList<number> = new SinglyLinkedList([1, 2, 3])
    expect(list.removeLast()).toBe(3)
    expect(list.removeLast()).toBe(2)
    expect(list.removeLast()).toBe(1)
    expect(list.removeLast()).toBeUndefined()
  })
})
