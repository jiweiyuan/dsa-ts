import QueueArray from '../../src/collections/QueueArray';

describe('QueueArray', () => {
  let queue: QueueArray<number>

  beforeEach(() => {
    queue = new QueueArray()
  })
  it('starts empty', () => {
    expect(queue.length).toEqual(0)
  })
})
