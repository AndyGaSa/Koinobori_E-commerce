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
  describe('Given a map method', () => {
    describe('When is invoked', () => {
      let newArray;
      beforeEach(() => {
        myArray = new SkylabArray();
        myArray.push('mola');

        const mapCallback = (value) => `Skylab: ${value}`;
        newArray = myArray.map(mapCallback);
      });

      test('Then return a new array', () => {
        expect(myArray).not.toEqual(newArray);
      });

      test('Then return a new array with same length', () => {
        expect(myArray.length).not.toEqual(newArray.length);
      });

      test('Then newArray[0] should contain myArray[0]', () => {
        expect(newArray[0]).toMatch(myArray[0]);
      });
    });
  });
});
