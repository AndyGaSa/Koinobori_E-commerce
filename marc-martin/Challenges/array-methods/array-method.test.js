const SkylabArray = require('./index.js');

describe('SkylabArray class', () => {
  const myArray = new SkylabArray();

  describe('Given a length property', () => {
    describe('When the object is first created', () => {
      test('Then should have a lenght equals 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });

  describe('Given a push method', () => {
    describe('When is invoked with one value', () => {
      describe('And the array is empty', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });
        test('Then return 1', () => {
          expect(myArray.push(1)).toBe(1);
        });
      });
      describe('And the array length is 2', () => {
        test('Then return 4', () => {
          expect(true).toBe(false);
        });
        test("Then myArray[0]=Skylab'", () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
      });
    });
  });

  describe('Given a map method', () => {
    describe('When is invoked', () => {
      describe('Then return a new array', () => {
        myArray = new SkylabArray();
        const mapCallback = (value) => `Skylab: ${value}`;
        const newArray = myArray.map(mapCallback);

        expect(myArray.length).toEqual(newArray.length);
      });
      test('Then newArray[0] should contain mayArray[0]', () => {
        myArray = new SkylabArray();

        const mapCallback = (value) => `Skylab: ${value}`;
        const newArray = myArray.map(mapCallback);

        expect(myArray.length).toEqual(newArray.length);
      });
    });
  });
});
