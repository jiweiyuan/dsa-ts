import DoublyLinkedList from '../../src/structs/DoublyLinkedList';

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList<string>

  beforeEach(() => {
    list  = new DoublyLinkedList()
  })

  it('start empty', () => {
    expect(list.length).toBe(0)
    expect(list.getLast()).toBeUndefined()
    expect(list.getFirst()).toBeUndefined()
    expect(list.isEmpty()).toBeTruthy()
  })

  it('constructor from iterable Object!', () => {
    const list = new DoublyLinkedList(['a', 'b', 'c'])

    expect(list.length).toBe(3)
    expect(list.isEmpty()).toBeFalsy()
    expect(list.getFirst()).toBe('a')
    expect(list.getLast()).toBe('c')
  })

  it('add && addLast', () => {
    expect(list.add('a')).toBe(1)
    expect(list.getLast()).toBe('a')
    expect(list.length).toBe(1)
    expect(list.isEmpty()).toBeFalsy()
    expect(list.addLast('b')).toBe(2)
    expect(list.getLast()).toBe('b')
    expect(list.length).toBe(2)
    expect(list.isEmpty()).toBeFalsy()
  })

  it('addFirst', () => {
    expect(list.addFirst('a')).toBe(1)
    expect(list.addFirst('b')).toBe(2)
    expect(list.length).toBe(2)
    expect(list.isEmpty()).toBeFalsy()
    expect(list.getFirst()).toBe('b')
    expect(list.getLast()).toBe('a')
  })

  it('removeFirst', () => {
    const list = new DoublyLinkedList(['a', 'b', 'c'])

    expect(list.removeFirst()).toBe('a')
    expect(list.length).toBe(2)
    expect(list.removeFirst()).toBe('b')
    expect(list.removeFirst()).toBe('c')
    expect(list.isEmpty()).toBeTruthy()
    expect(list.removeFirst()).toBeUndefined()
  })

  it('removeLast', () => {
    const list = new DoublyLinkedList(['a', 'b', 'c'])

    expect(list.removeLast()).toBe('c')
    expect(list.length).toBe(2)
    expect(list.removeLast()).toBe('b')
    expect(list.removeLast()).toBe('a')
    expect(list.isEmpty()).toBeTruthy()
    expect(list.removeLast()).toBeUndefined()
  })
})
