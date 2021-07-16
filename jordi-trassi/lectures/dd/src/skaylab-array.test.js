const SkaylabArray = require('../index');
/**
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */

describe('SkaylabArray class', () => {
  const myArray = new SkaylabArray();
  describe('Given a length property', () => {
    describe('When is first created', () => {
      test('should have a lenght equals to 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });
});

describe('Given a push method', () => {
  describe('When is invoked with Skylab string', () => {
    describe('And the array is empty', () => {
      test('Then return 1', () => {
        expect(myArray.push('Skylab')).toBe(1);
      });
    });
  });
});

describe('When is invoked pop method', () => {
  describe('And the array is empty', () => {
    test('Then return myArray length - 1', () => {
      expect(myArray.pop).toBe(myArray.length - 1);
    });
  });
});

describe('Given a map method', () => {
  describe('When is invoked', () => {
    test('then return a new arry', () => {
      myArray = new SkaylabArray();
      myArray.push('mola');
      const mapCallback = (value) => `Skyalb: ${value}`;
      const newArray = myArray.map(mapCallback);

      expect(myArray).not.toEqual(newArray);
    });
  });
});
