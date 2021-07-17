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
      describe('And the array recives another value', () => {
        test('Then myArray[1] = Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[1]).toBe('Skylab');
        });
      });
    });
    describe('When is invoked with 3 values', () => {
      describe('And the array has 2 values', () => {
        test('Then return 5 and myArray[3] is "Pizza"', () => {
          expect(myArray.push('Friday', 'Pizza', 'Ñam')).toBe(5);
          expect(myArray[3]).toBe('Pizza');
        });
      });
    });
  });

  describe('Given a pop method', () => {
    describe('When is invoked', () => {
      describe('And the array has 5 elements', () => {
        test('Then return 4', () => {
          expect(myArray.pop()).toBe(4);
        });
      });
      describe('And the array is Empty', () => {
        const newPopArray = new SkylabArray();
        test('Then return 0', () => {
          expect(newPopArray.pop()).toBe(0);
        });
      });
    });
  });

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

  describe('Given a some method', () => {
    describe('When is invoked', () => {
      describe('And the original array has some elements', () => {
        test('Then return true for "Pizza" element ', () => {
          const someCallback = (value) => value === 'Pizza';

          expect(myArray.some(someCallback)).toEqual(true);
        });

        test('Then return false for a "Pasta" element', () => {
          const someCallback = (value) => value === 'Pasta';

          expect(myArray.some(someCallback)).toEqual(false);
        });

        test('Then return false for a number element', () => {
          const someCallback = (value) => value === 15;

          expect(myArray.some(someCallback)).toEqual(false);
        });
      });
      describe('With no argument', () => {
        test('Then throw a TypeError', () => {
          // const t = myArray.some();
          expect(() => { myArray.some(); }).toThrow(TypeError);
        });
      });
    });
  });

  describe('Given a find method', () => {
    describe('When is invoked', () => {
      describe('And the array has some elements.', () => {
        test('Then return undefined for "Hello World"', () => {
          const findCallback = (value) => value === 'Hello World';

          expect(myArray.find(findCallback)).toEqual(undefined);
        });

        test('Then return Friday for a "Friday" element', () => {
          const findCallback = (value) => value === 'Friday';

          expect(myArray.find(findCallback)).toEqual('Friday');
        });
      });
    });
  });

  describe('Given a filter method', () => {
    describe('When is invoked', () => {
      describe('And the array has some elments', () => {
        test('Then return an empty array - length = 0 - if no matches on the original array.', () => {
          const filterCallback = (value) => value.length > 100;
          const myNewArray = myArray.filter(filterCallback);

          expect(myNewArray.length).toEqual(0);
        });

        test('Then return an array with 4 elements on an 8 elements array, where myNewArray[3] is longer than 5 chars..', () => {
          myArray.push('Long Word', 'Short');
          const filterCallback = (value) => value.length > 5;
          const myNewArray = myArray.filter(filterCallback);

          expect(myNewArray.length).toEqual(4);
          expect(myNewArray[3].length).toBeGreaterThan(5);
        });
      });
    });
  });

  // describe('Given a shift method', () => {
  //   describe('When is invoked', () => {
  //     test('Then return undefined for an empty array.', () => {
  //       const myNewArray = new SkylabArray();

  //       expect(myNewArray.shift()).toEqual(undefined);
  //     });

  //     test('Then return "First Element".', () => {
  //       expect(myArray.shift()).toEqual('First Element');
  //     });

  //     test('Then an original array of 3 element should finish with a length of 2.', () => {
  //       myArray.shift();
  //       expect(myArray.length).toEqual(2);
  //     });
  //   });
  // });
});
