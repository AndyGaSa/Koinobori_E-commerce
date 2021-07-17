const SkylabArray = require('./skylab-array');
//
/*
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */
describe('SkylabArray class', () => {
  const myArray = new SkylabArray();

  describe('Given a length property', () => {
    describe('When is first created', () => {
      test('Then return 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });

  describe('Given a push method', () => {
    describe('When is invoked with one value', () => {
      describe('And the array is empty', () => {
        test('Then return 1', () => {
          expect(myArray.push('first element')).toBe(1);
        });
      });
      describe('And the array has 1 value', () => {
        test('Then myArray[1] = Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[1]).toBe('Skylab');
        });
      });
    });
  });
  describe('When is invoked with 3 values', () => {
    describe('And the array has 2 elements', () => {
      test('Then return 5', () => {
        expect(myArray.push('Friday', 'Pizza', 'Ñam')).toBe(5);
      });
    });
    describe('And the array has 5 elements', () => {
      test('Then myArray[3]', () => {
        expect(myArray[3]).toBe('Pizza');
      });
    });
  });

  // describe('Given a pop method', () => {
  //   describe('When is invoked', () => {
  //     describe('And the array has 2 elements', () => {
  //       test('Then return 1', () => {
  //         expect(myArray.pop()).toBe(1);
  //       });
  //     });
  //     describe('And the array is Empty', () => {
  //       myArray.pop();
  //       test('Then return 0', () => {
  //         expect(myArray.pop()).toBe(0);
  //       });
  //     });
  //   });
  // });

  describe('Given a map method', () => {
    describe('When is invoked', () => {
      let newArray;
      beforeEach(() => {
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
        expect(myArray[0]).toMatch(myArray[0]);
      });
    });
  });
});
