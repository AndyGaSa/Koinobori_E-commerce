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
  describe('and the array is empty', () => {
    test('THEN return 1', () => {
      expect(myArray.push("Skylab")).toBe(1);
    });
  });

    describe('and the array.length is 2', () => {
      beforeEach(() => {
        myArray.push("true");
        myArray.push("true");
    }
    test('THEN return 3', () => {
      expect(myArray.push()).toBe(3);
    });
  });
});
