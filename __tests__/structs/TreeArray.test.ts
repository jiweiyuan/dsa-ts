import TreeArray from '../../src/structs/TreeArray'

describe('TreeArray', () => {
  let tree: TreeArray<number>
  let parent: TreeArray<number>
  let tree1: TreeArray<number>
  let tree2: TreeArray<number>
  let tree3: TreeArray<number>
  let sibling: TreeArray<number>

  beforeEach(() => {
    parent = new TreeArray(0)

    tree1 = new TreeArray(11)
    tree2 = new TreeArray(12)
    tree3 = new TreeArray(13)
    sibling = new TreeArray(2)
    tree = new TreeArray(1, parent, [tree1, tree2, tree3])
    parent.addChild(sibling)
  })

  it('constructor', () => {
    expect(tree.value).toBe(1)
    expect(tree.parent).toEqual(parent)
    expect(tree.children).toEqual([tree1, tree2, tree3])
    expect(tree.nextSibling).toEqual(sibling)
  })

  it('set and get value', () => {
    expect(tree.getValue()).toBe(1)
    tree.setValue(100)
    expect(tree.getValue()).toBe(100)
  })

  it('add and get child', () => {
    const tree4 = new TreeArray(4)
    tree.addChild(tree4)
    expect(tree.getLastChild()).toEqual(tree4)
    const tree5 = new TreeArray(5)
    const tree6 = new TreeArray(6)
    tree.addChildren([tree5, tree6])
    expect(tree.getLastChild()).toEqual(tree6)
    expect(tree.getFirstChild()).toEqual(tree1)
    expect(tree1.parent).toEqual(tree)
    expect(tree6.parent).toEqual(tree)
    expect(tree5.getNextSibling()).toEqual(tree6)
  })

  it('contains and removeChild', () => {
    expect(tree.contains(tree2)).toBeTruthy()
    tree.removeChild(tree2)
    expect(tree.contains(tree2)).toBeFalsy()
    expect(tree1.getNextSibling()).toEqual(tree3)
  })
  it('getSize', () => {
    // let tree11 = new TreeArray(11)
    expect(parent.getSize()).toBe(6)
  });


})