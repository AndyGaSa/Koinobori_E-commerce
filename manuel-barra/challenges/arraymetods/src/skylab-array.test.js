const SkylabArray = require('./skylab-array');

const myArray = new SkylabArray();
describe('SkylabArray class', () => {
  describe('Given a length method', () => {
    describe('When is first created', () => {
      test('Then returns 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });
  describe('Given a push method', () => {
    describe('When ths array is empty', () => {
      describe('And invoked with string "pelicano"', () => {
        test('Then the array length shoulds returns 1', () => {
          expect(myArray.push('pelicano')).toBe(1);
        });
        test('Then my array[0] should return pelicano', () => {
          expect(myArray[0]).toBe('pelicano');
        });
      });
      describe('And invoked with two new values', () => {
        test('Then the array length should return 3', () => {
          expect(myArray.push(1, 2)).toBe(3);
        });
      });
    });
  });
  describe('Given a pop method', () => {
    describe('Whas the array have two values ', () => {
      test('Then my array.length to be 2', () => {
        expect(myArray.pop()).toBe(2);
      });
    });
  });
  describe('Given given a some method', () => {
    describe('When invoked with callback in a object of 3 properties', () => {
      test('Then return true if element is equal to "pelicano"', () => {
        expect(myArray.some((element) => element === 'pelicano')).toBe(true);
      });
    });
  });
  describe('Given given a some method', () => {
    describe('When invoked with callback in a object of 3 properties', () => {
      test('Then return true if element is equal to "pelicano"', () => {
        expect(myArray.some((element) => element === 'pelicano')).toBe(true);
      });
    });
  });
  describe('Given given a find method', () => {
    describe('When invoked with callback in a object of 5 properties', () => {
      test('Then return the value of the first property that returns', () => {
        expect(myArray.find((element) => element === 'pelicano')).toStrictEqual('pelicano');
      });
    });
  });
});
