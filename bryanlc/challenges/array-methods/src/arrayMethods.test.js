const SkylabArray = require('./arrayMethods');

describe('SkylabArray class', () => {
  let myArray;

  describe('given a length method', () => {
    test('Then return 0', () => {
      myArray = [];
      expect(myArray.length).toBe(0);
    });
  });

  describe('given a push method', () => {
    describe('when is invoked with tho elements', () => {
      describe('And the array is empty', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });
        test('then return 1', () => {
          myArray.push(2);
          expect(myArray.length).toBe(1);
        });

        test('Then myArray [0] = Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
      });
    });
  });

  describe('given a pop method', () => {
    describe('when is invoked with the element', () => {
      describe(' remuve the last position', () => {
        test('Then delete the Skylab string', () => {
          myArray.pop('Skylab');
          expect(myArray.length).toBe(0);
        });
      });
    });
  });

  describe('given a map method', () => {
    describe('when is invoked ', () => {
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
        expect(myArray.length).toEqual(newArray.length);
      });

      test('Then newArray[0] should contain myArray[0]', () => {
        expect(newArray[0]).toMatch(myArray[0]);
      });
    });
  });

  describe('given a some method', () => {
    describe('when is invoked', () => {
      test('return false', () => {
        myArray = new SkylabArray();
        myArray.push(true);
        const even = (element) => element % 2 === 0;
        expect(myArray.some(even)).toBe(false);
      });
    });
  });
});
