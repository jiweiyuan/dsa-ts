import QueueList from '../../src/structs/QueueList';

describe('QueueList', () => {
  let queue: QueueList<number>

  beforeEach(() => {
    queue = new QueueList()
  })

  it('starts empty and its length equals 0', () => {
    expect(queue.length).toEqual(0)
    expect(queue.isEmpty()).toEqual(true)
  })

  it('enqueues element', () => {
    queue.enqueue(1)
    expect(queue.length).toEqual(1)
    expect(queue.isEmpty()).toEqual(false)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.length).toEqual(3)
    expect(queue.isEmpty()).toEqual(false)

  })

  it('dequeues element', () => {
    const queue: QueueList<string> = new QueueList()
    queue.enqueue('a')
    queue.enqueue('b')
    expect(queue.length).toEqual(2)
    expect(queue.dequeue()).toEqual('a')
    expect(queue.length).toEqual(1)
    expect(queue.dequeue()).toEqual('b')
    expect(queue.dequeue()).toEqual(undefined)
  })

  it('peeks element', () => {
    const queue: QueueList<string> = new QueueList()
    queue.enqueue('a')
    queue.enqueue('b')
    expect(queue.length).toEqual(2)
    expect(queue.peek()).toEqual('a')
    expect(queue.length).toEqual(2)
    queue.dequeue()
    queue.dequeue()
    expect(queue.peek()).toEqual(undefined)
  })

  it('constructor', () => {
    const queue: QueueList<string> = new QueueList(['a', 'b', 'c'])
    expect(queue.length).toEqual(3)
    expect(queue.peek()).toEqual('a')
  })
})
