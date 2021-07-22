import BinTreeNode from '../../src/structs/BinTreeNode'
import { BinTree } from '../../src/structs/BinTree';

describe('BinTreeNode', () => {
  /**
   *       tree(1)
   *       /  \
   *  (2)left right(3)
   *     / \
   * (4)l1  r1(5)
   */
  let tree: BinTree<number>
  let left: BinTree<number>
  let right: BinTree<number>
  let l1: BinTree<number>
  let r1: BinTree<number>
  beforeEach(() => {
    tree = new BinTreeNode(1)
    l1 = new BinTreeNode(4)
    r1 = new BinTreeNode(5)
    right = new BinTreeNode(3)
    left = new BinTreeNode(2, l1, r1, tree)
    tree.left = left
    tree.right = right
    right.parent = tree
    left.left = l1
    l1.parent = left
    left.right = r1
    r1.parent = left
  })

  it('constructor', () => {
    expect(tree.left.left).toEqual(l1)
    expect(tree.left.right).toEqual(r1)
    expect(r1.parent.parent).toEqual(tree)
  })

  it('get size()', () => {
    expect(l1.size).toEqual(1)
    expect(r1.size).toEqual(1)
    expect(left.size).toEqual(3)
    expect(right.size).toEqual(1)
    expect(tree.size).toEqual(5)
  });

  it('get height()', () => {
    expect(l1.height).toBe(0)
    expect(r1.height).toBe(0)
    expect(left.height).toBe(1)
    expect(right.height).toBe(0)
    expect(tree.height).toBe(2)
  });

  it('get depth()', () => {
    expect(l1.depth).toBe(2)
    expect(r1.depth).toBe(2)
    expect(left.depth).toBe(1)
    expect(right.depth).toBe(1)
    expect(tree.depth).toEqual(0)
  })

  it('traversal', function() {
    const preOrderResult = [tree, left, l1, r1, right]
    const postOrderResult = [l1, r1, left, right, tree]
    const inOrderResult = [l1, left, r1, tree, right]
    const levelOrderResult = [tree, left, right, l1, r1]
    expect(tree.preOrderTraversal()).toEqual(preOrderResult)
    expect(tree.postOrderTraversal()).toEqual(postOrderResult)
    expect(tree.inOrderTraversal()).toEqual(inOrderResult)
    expect(tree.levelOrderTraversal()).toEqual(levelOrderResult)
  });
})
