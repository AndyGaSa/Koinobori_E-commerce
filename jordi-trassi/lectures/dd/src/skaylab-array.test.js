const SkaylabArray = require('../index');

test('should have a lenght equals to 0', () => {
  const myArray = new SkaylabArray();
  expect(myArray.length).toBe(0);
});
