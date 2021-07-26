const SkylabArray = require('./skylab-array');

describe('SkylabArray class', () => {
  let myArray;

  describe('Given a length propierty', () => {
    describe('When the object is first created', () => {
      test('Then return zero', () => {
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
        test('Then myArray[0] = Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
      });
    });
    describe('When is invoked with a and b string', () => {
      describe('And the array is empty', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });
        test('Then return 2', () => {
          expect(myArray.push('a', 'b')).toBe(2);
        });
        test('Then my Array[1] = b', () => {
          myArray.push('a', 'b');
          expect(myArray[1]).toBe('b');
        });
      });
    });
  });
  describe('Given a map method', () => {
    describe('When is invoked', () => {
      describe('And array has at least one element', () => {
        let newArray;
        beforeEach(() => {
          myArray.push('mola');
          const mapCallback = (value) => 'Skylab: ${value}';
          newArray = myArray.map(mapCallback);
        });
        test('Then return a new array', () => {
          expect(myArray).not.toEqual(newArray);
        });
        test('Then return a new array with same length', () => {
          expect(myArray.length).toEqual(newArray.length);
        });
        test('Then newArray[0] should contain MyArray[0]', () => {
          expect(newArray[0]).toMatch(myArray[0]);
        });
      });
    });
  });
});
