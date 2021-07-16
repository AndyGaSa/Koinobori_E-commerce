const SkylabArray = require('./index');

test('should have a length equals to 0', () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
});
