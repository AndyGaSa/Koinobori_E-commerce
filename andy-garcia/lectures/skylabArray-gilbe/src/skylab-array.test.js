const SkylabArray = require('./skylab-array');

test('should have a length equals to zero', () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
});
