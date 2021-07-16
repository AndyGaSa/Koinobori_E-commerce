describe('GIVEN a length property', () => {
  describe('WHEN is first created', () => {
    test('THEN return 0', () => {
      const myArray = new SkylabArray();
      expect(myArray.length).toBe(0);
    });
  });
});

/* a mesma coisa que mas com mais detalhes:
test('Length should be equal to 0'), () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
});  */

// testing PUSH:
describe('GIVEN a push method', () => {
  describe('WHEN is invoked with one element', () => {
  });
  describe('and the array is empty', () => {
    test('THEN return 1', () => {
      expect(true).toBe(false);
    });
  });

  describe('and the array length is 2', () => {
    test('THEN return 3', () => {
      expect(true).toBe(false);
    });
  });
});
