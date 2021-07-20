const SkylabArray = require('./array-methods');

let myArray;
describe('SkylabArray class', () => {
  beforeEach(() => {
    myArray = new SkylabArray();
  });
  describe('Given a length property', () => {
    describe('When is first created', () => {
      test('Then returns 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });

  describe('Given given a push method', () => {
    describe('When the array is empty', () => {
      describe('And invoked with the string "Daniela"', () => {
        test('Then the array length should return 1', () => {
          expect(myArray.push('Daniela')).toBe(1);
        });
        test('Then my array[0] should return Daniela', () => {
          myArray.push('Daniela');
          expect(myArray[0]).toBe('Daniela');
        });
      });

      describe('And invoked with two new values', () => {
        test('Then the array length should return 2', () => {
          expect(myArray.push(1, 2)).toBe(2);
        });
      });
    });
  });
  describe('Given given a push method', () => {
    describe('When the array lenght in 1', () => {
      beforeEach(() => {
        myArray.push(1);
      });
      describe('And invoked with one new value', () => {
        test('Then the array length should return 3', () => {
          expect(myArray.push(5)).toBe(2);
        });
      });
      describe('And invoked with two new values', () => {
        test('Then the array length should return 3', () => {
          expect(myArray.push(1, 2)).toBe(3);
        });
      });
    });
  });

  describe('Given given a pop method', () => {
    describe('When the array has 2 values', () => {
      beforeEach(() => {
        myArray.push(1, 2);
      });
      test('Then the array length to be 1 ', () => {
        expect(myArray.pop()).toBe(1);
      });
    });
  });

  describe('Given given a some method', () => {
    describe('When invoked with callback in a object of 5 properties', () => {
      beforeEach(() => {
        myArray.push(1, 2, 3, 4, 'Daniela');
      });
      test('Then return true', () => {
        expect(myArray.some((element) => typeof element === 'string')).toBe(true);
      });
    });
  });
  describe('Given given a find method', () => {
    describe('When invoked with callback in a object of 5 properties', () => {
      beforeEach(() => {
        myArray.push(1, 2, 3, 4, 'Daniela');
      });
      test('Then return the value of the first property that returns', () => {
        expect(myArray.find((element) => typeof element === 'string')).toBe('Daniela');
      });
    });
  });
  describe('Given given a filter method', () => {
    describe('When invoked with a callback function', () => {
      test('Then returns new array', () => {
        const newArray = myArray.filter((element) => typeof element === 'string');
        expect(myArray.filter((element) => typeof element === 'string')).toBe(newArray);
      });
    });
  });
});
