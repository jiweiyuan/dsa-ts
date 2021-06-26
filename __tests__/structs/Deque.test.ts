import DequeList from '../../src/structs/DequeList';

describe('Deque', () => {
  let deque: DequeList<string>

  beforeEach(() => {
    deque = new DequeList()
  })

  it('starts empty', ()=> {
    expect(deque.length).toBe(0)
    expect(deque.removeFirst()).toBeUndefined()
    expect(deque.removeLast()).toBeUndefined()
    expect(deque.first()).toBeUndefined()
    expect(deque.last()).toBeUndefined()
  })

  it('constructor from a iterable object', () => {
    const deque = new DequeList(['a', 'b', 'c'])
    expect(deque.length).toBe(3)
  })

  it('first return the head of this deque', () => {
    const deque = new DequeList(['a', 'b', 'c'])
    expect(deque.first()).toBe('a')
  })

  it('last return the head of this deque', () => {
    const deque = new DequeList(['a', 'b', 'c'])
    expect(deque.last()).toBe('c')
  })

  it('insertFirst insert the specified element at the front of this deque', () => {
    expect(deque.insertFirst('a')).toBe(1)
    expect(deque.insertFirst('b')).toBe(2)
    expect(deque.insertFirst('c')).toBe(3)
    expect(deque.length).toBe(3)
    expect(deque.first()).toBe('c')
    expect(deque.last()).toBe('a')
  })

  it('insertLast insert the specified element at the end of this deque', () => {
    expect(deque.insertLast('a')).toBe(1)
    expect(deque.insertLast('b')).toBe(2)
    expect(deque.insertLast('c')).toBe(3)
    expect(deque.length).toBe(3)
    expect(deque.first()).toBe('a')
    expect(deque.last()).toBe('c')
  })

  it('removeFirst remove the first element of this deque', () => {
    const deque = new DequeList(['a', 'b', 'c'])
    expect(deque.removeFirst()).toBe('a')
    expect(deque.removeFirst()).toBe('b')
    expect(deque.removeFirst()).toBe('c')
    expect(deque.removeFirst()).toBe(undefined)
    expect(deque.length).toBe(0)
  })

  it('removeLast remove the last element of this deque',() => {
    const deque = new DequeList(['a', 'b', 'c'])

    expect(deque.removeLast()).toBe('c')
    expect(deque.removeLast()).toBe('b')
    expect(deque.removeLast()).toBe('a')
    expect(deque.removeLast()).toBe(undefined)
    expect(deque.length).toBe(0)
  })
})
