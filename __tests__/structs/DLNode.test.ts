import DLNode from '../../src/structs/DLNode';

describe('DLNode', () => {
  let node: DLNode<string>

  beforeEach(() => {
    node = new DLNode<string>()
  })

  it('constructor', () => {
    expect(node.value).toEqual(undefined)
    expect(node.next).toEqual(undefined)
    expect(node.prev).toEqual(undefined)

    const node1: DLNode<string> = new DLNode('a')
    expect(node1.value).toEqual('a')
    expect(node.next).toEqual(undefined)
    expect(node.prev).toEqual(undefined)
  })

  it('next and prev', () => {
    const node1: DLNode<number> = new DLNode(1)
    const node2: DLNode<number> = new DLNode(2)
    node1.next = node2
    node2.prev = node1
    expect(node1.next.value).toEqual(2)
    expect(node2.prev.value).toEqual(1)
  })
})
