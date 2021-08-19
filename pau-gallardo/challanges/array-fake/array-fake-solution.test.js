const SkylabArray = require('./array-methods');

describe('SkylabArray class', () => {
  let myArray;
  describe('Given a length propety', () => {
    describe('When its created', () => {
      test('Then return 0', () => {
        myArray = new SkylabArray();
        expect(myArray.length).toBe(0);
      });
    });
  });
  describe('Given a push method', () => {
    describe('When is invoked with Skylab string', () => {
      describe('And the array is empty', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });
        test('Then return 1', () => {
          expect(myArray.push('Skylab')).toBe(1);
        });
        test('Then myArray[0]=Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
      });
    });
    describe('When is invoked with two string one and two', () => {
      describe('And the array is empty', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });
        test('Then return 2', () => {
          expect(myArray.push('one', 'two')).toBe(2);
        });
        test('Then myArray[0]=one', () => {
          myArray.push('one', 'two');
          expect(myArray[0]).toBe('one');
        });
        test('Then myArray[1]=two', () => {
          myArray.push('one', 'two');
          expect(myArray[1]).toBe('two');
        });
      });
    });
  });
  describe('Given a pop method', () => {
    describe('When is invoked', () => {
      beforeEach(() => {
        myArray = new SkylabArray();
      });
      describe('And the array is empty', () => {
        test('Then return undefined', () => {
          expect(myArray.pop()).toBe(undefined);
        });
      });
      describe('And the array has 1 string element hello', () => {
        test('Then return undefined', () => {
          myArray.push('hello');
          expect(myArray.pop()).toBe('hello');
        });
      });
    });
  });
});
