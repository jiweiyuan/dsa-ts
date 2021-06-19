import { StackArray } from '../../src/collections/StackArray';

describe('StackArray', () => {
  let stack: StackArray<number>

  beforeEach(() => {
    stack = new StackArray<number>()
  })

  it('starts empty', () => {
    expect(stack.length).toEqual(0)
    expect(stack.isEmpty()).toEqual(true)
  })

  it('pushes element', () => {
    expect(stack.push(1)).toEqual(1)
    expect(stack.isEmpty()).toEqual(false)
    expect(stack.length).toEqual(1)

    expect(stack.push(2)).toEqual(2)
    expect(stack.isEmpty()).toEqual(false)
    expect(stack.length).toEqual(2)
  })

  it('pops elements', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toEqual(3)
    expect(stack.length).toEqual(2)
    expect(stack.pop()).toEqual(2)
    expect(stack.pop()).toEqual(1)
    expect(stack.isEmpty()).toEqual(true)
    expect(stack.pop()).toEqual(undefined)
    expect(stack.length).toEqual(0)
  })

  it('allows to peek at the top element in he stack without popping it', () => {
    expect(stack.peek()).toEqual(undefined)
    stack.push(1)
    expect(stack.peek()).toEqual(1)
    stack.push(2)
    expect(stack.peek()).toEqual(2)
  })

  it('clears the stack', () => {
    stack.clear()
    expect(stack.isEmpty()).toEqual(true)
    stack.push(1)
    stack.push(2)
    stack.clear()
    expect(stack.isEmpty()).toEqual(true)
  })

  it('construct', () => {
    expect(stack.isEmpty()).toEqual(true)

    const stackFromArray: StackArray<number> = new StackArray([1, 2, 3])
    expect(stackFromArray.isEmpty()).toEqual(false)
    expect(stackFromArray.length).toEqual(3)
    expect(stackFromArray.pop()).toEqual(3)
    expect(stackFromArray.pop()).toEqual(2)
    expect(stackFromArray.pop()).toEqual(1)
  })
})
