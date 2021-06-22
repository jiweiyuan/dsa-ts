import SLNode from '../../src/structs/SLNode';

describe('SLNode: Singly LinkedList Node',() => {

  let node: SLNode<string>

  beforeEach(() => {
    node = new SLNode()
  })

  it('constructor', () => {
    expect(node.value).toEqual(undefined)
    expect(node.next).toEqual(undefined)
    const node1 = new SLNode('a')
    expect(node1.value).toEqual('a')
    expect(node1.next).toEqual(undefined)

  })

  it('value and next', ()=>{
    const node1 = new SLNode('a')
    const node2 = new SLNode('b')
    node.next = node1
    node1.next = node2
    expect(node.next).toEqual(node1)
    expect(node.next.value).toEqual('a')
    expect(node.next.next).toEqual(node2)
    expect(node.next.next.value).toEqual('b')
  })

})
