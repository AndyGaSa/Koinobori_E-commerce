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
        expect(myArray.push('Skaylab')).toBe(1);
      });
      test('Then myArray[0]=Skaylab', () => {
        myArray.push('Skaylab');
        expect(myArray[0]).toBe('Skaylab');
      });
    });
    describe('And the array length is 2', () => {
      beforeEach(() => {
        myArray.push(true);
        myArray.push(true);
      });
      test('The return is 3', () => {
        expect(myArray.push('Skylab')).toBe(3);
      });
    });
  });
});

describe('Given a pop method', () => {
  describe('When is invoked pop method', () => {
    describe('And the array is empty', () => {
      test('Then return undefined', () => {
        expect(myArray.pop).toBe(undefined);
      });
    });
  });
});

describe('Given a map method', () => {
  describe('When is invoked', () => {
    describe('And array has at least 1 element', () => {
      beforeEach(() => {
        myArray.push('mola');
        newArray = myArray.map((value) => `Skylab: ${value}`);
      });
      test('then return a new arry', () => {
        expect(myArray).not.toEqual(newArray);
      });
    });
  });
});
