const { describe, test, beforeEach } = require('@jest/globals');
const SkylabArray = require('./array-methods');

let myArray;
describe('SkylabArray class', () => {
  describe('Given a length property', () => {
    describe('When is first created', () => {
      beforeEach(() => {
        myArray = new SkylabArray();
      });
      test('Then returns 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });

  describe('Given given a push method', () => {
    describe('When the array is empty', () => {
      describe('And invoked with the string "Daniela"', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });
        test('Then the array length should return 1', () => {
          expect(myArray.push('Daniela')).toBe(1);
        });
        test('Then my array[0] should return Daniela', () => {
          myArray.push('Daniela');
          expect(myArray[0]).toBe('Daniela');
        });
      });
    });
  });
  describe('Given given a push method', () => {
    describe('When the array is empty', () => {
      describe('And invoked with two new values', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });
        test('Then the array length should return 2', () => {
          expect(myArray.push(1, 2)).toBe(2);
        });
      });
    });
  });
  describe('Given given a push method', () => {
    describe('When the array lenght in 1', () => {
      describe('And invoked with one new value', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
          myArray.push(1);
        });
        test('Then the array length should return 3', () => {
          expect(myArray.push(5)).toBe(2);
        });
      });
    });
  });
  describe('Given given a push method', () => {
    describe('When the array has one value', () => {
      describe('And invoked with two new values', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
          myArray.push(1);
        });
        test('Then the array length should return 3', () => {
          expect(myArray.push(1, 2)).toBe(3);
        });
      });
    });
  });
  describe('Given given a pop method', () => {
    describe('When the array has 2 values', () => {
      beforeEach(() => {
        myArray = new SkylabArray();
        myArray.push(1, 2);
      });
      test('Then the array length to be 1 ', () => {
        expect(myArray.pop()).toBe(1);
      });
    });
  });
});
