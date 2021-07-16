const SkylabArray = require('./array-methods');

test('should have a length equals to 0', () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
});
