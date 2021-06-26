import { greeter } from '../src/main';

describe('greeter function', () => {
  const name = 'John';

  // Assert greeter result
  it('greets a user with `Hello, {name}` message', () => {
    expect(greeter(name)).toBe(`Hello, ${name}`);
  });
});
