const SkylabArray = require('./array-methods');

describe('SkylabArray class', () => {
  let myArray;
  let newArray;

  beforeEach(() => {
    myArray = new SkylabArray();
  });
  describe('Given creating it', () => {
    describe('When its created without parameters', () => {
      test('Then return 0', () => {
        expect(myArray.length).toBe(0);
      });
    });

    describe('When its created with 2 string parameters one and two', () => {
      beforeEach(() => {
        myArray = new SkylabArray('one', 'two');
      });
      test('Then myArray.length return 2', () => {
        expect(myArray.length).toBe(2);
      });

      test('Then myArray[0]=one', () => {
        expect(myArray[0]).toBe('one');
      });

      test('Then myArray[1]=two', () => {
        expect(myArray[1]).toBe('two');
      });
    });

    describe('When its created with 1 number parameters 2', () => {
      beforeEach(() => {
        myArray = new SkylabArray(2);
      });
      test('Then myArray.lengt return 2', () => {
        expect(myArray.length).toBe(2);
      });

      test('Then myArray[0]=undefined', () => {
        expect(myArray[0]).toBe(undefined);
      });

      test('Then myArray[1]=undefined', () => {
        expect(myArray[1]).toBe(undefined);
      });
    });
  });
  describe('Given a push method', () => {
    describe('When is invoked with Skylab string', () => {
      describe('And the array is empty', () => {
        test('Then return 1', () => {
          expect(myArray.push('Skylab')).toBe(1);
        });
        test('Then myArray[0]=Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
      });
      describe('And the array.length is 2', () => {
        beforeEach(() => {
          myArray.push(true);
          myArray.push(true);
        });
        test('Then return 3', () => {
          expect(myArray.push('Skylab')).toBe(3);
        });
      });
    });

    describe('When is invoked with [one, two] string', () => {
      describe('And the array is empty', () => {
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

  describe('Given a map method', () => {
    describe('When is invoked', () => {
      describe('And array has at least 1 element', () => {
        beforeEach(() => {
          myArray.push('mola');
          newArray = myArray.map((value) => `Skylab: ${value}`);
        });
        test('Then return new array', () => {
          expect(myArray).not.toEqual(newArray);
        });
        test('Then return new array with same length', () => {
          expect(myArray.length).toEqual(newArray.length);
        });
        test('Then newArray[0] should contain myArray[0]', () => {
          expect(newArray[0]).toMatch(myArray[0]);
        });
      });
    });
  });
});
