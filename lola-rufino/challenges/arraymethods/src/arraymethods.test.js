const SkylabArray = require('./arraymethods');

describe('SkylabArray class', () => {
  let myArray;

  describe('Given a length property', () => {
    describe('When is first created', () => {
      test('Then return 0', () => {
        myArray = [];
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
  });

  describe('Given a pop method', () => {
    describe('When is invoked with Skylab string', () => {
      test('Then delete the Skylab string', () => {
        myArray.pop('Skylab');
        expect(myArray.length).toBe(0);
      });
    });
    describe('When is invoked', () => {
      test('And is empty', () => {
        expect(myArray.pop()).toBe('Error');
      });
    });
  });
});
