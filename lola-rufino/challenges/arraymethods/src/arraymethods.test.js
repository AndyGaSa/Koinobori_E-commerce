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
        expect(myArray.length).toEqual(newArray.length);
      });

      test('Then newArray[0] should contain myArray[0]', () => {
        expect(newArray[0]).toMatch(myArray[0]);
      });
    });
  });
  describe('Given a some method', () => {
    describe('When is invoked with a true boolean', () => {
      test('Then return true', () => {
        myArray = new SkylabArray();
        myArray.push(true);
        const boolean = ((element) => element === true);
        expect(myArray.some(boolean)).toBe(true);
      });
    });
    describe('When is invoked with a false boolean', () => {
      test('Then return false', () => {
        myArray = new SkylabArray();
        myArray.push(true);
        const boolean = ((element) => element === false);
        expect(myArray.some(boolean)).toBe(false);
      });
    });
  });
  describe('Given a find method', () => {
    describe('When is invoked with a Skylab string', () => {
      test('Then return Skylab string', () => {
        myArray.push('Lola');
        myArray.push('Skylab');
        const found = myArray.find((element) => element === 'Skylab');
        expect(found).toBe('Skylab');
      });
    });
    describe('When is invoked with an a number higher than 10', () => {
      test('Then return 12', () => {
        myArray.push(12);
        const found = myArray.find((element) => element > 10);
        expect(found).toBe(12);
      });
    });
  });
  describe('Given a filter method', () => {
    describe('When is invoked with 3 strings', () => {
      test('Then return strings with more than 3 word length', () => {
        const myArrayLola = new SkylabArray();
        myArrayLola.push('Lola');
        myArrayLola.push('Skylab');
        myArrayLola.push('Po');
        const result = myArrayLola.filter((element) => element.length > 3);
        expect(result).toBe(['Lola', 'Skylab']);
      });
    });
    describe('When is invoked with an a number and a string', () => {
      test('Then return only the numbers', () => {
        const myArrayOtherLola = new SkylabArray();
        myArrayOtherLola.push(12);
        myArrayOtherLola.push(5);
        myArrayOtherLola.push('Lola');
        const filterNumber = myArrayOtherLola.filter((element) => typeof element === 'number');
        expect(filterNumber).toBe([12, 5]);
      });
    });
  });
});
