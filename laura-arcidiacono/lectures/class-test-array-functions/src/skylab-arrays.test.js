const SkylabArray = require('./skylab-arrays');

describe('SkylabArray class', () => {
  let myArray;
  let newArray;

  beforeEach(() => {
    myArray = new SkylabArray();
  });

  describe('Given a length property', () => {
    describe('When is first created', () => {
      test('Then return 0', () => {
        expect(myArray.length).toBe(0);
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
    });
  });

  describe('Given a pop methos', () => {
    describe('When is invoked with an array', () => {
      describe('And the array is empty', () => {
        test('Then return error', () => {
          expect(myArray.pop()).toBe('Error');
        });
        describe('but if the array is not empty', () => {
          test('Then return the last element of the array', () => {
            myArray.push('Laura');
            expect(myArray.pop()).toBe('Laura');
          });
          test('Then myArray.length return 0', () => {
            expect(myArray.length).toBe(0);
          });
        });
      });
    });
  });

  describe('Given a map method', () => {
    describe('When is invoked', () => {
      test('Then return a new array', () => {
        const mapCallback = (value) => `Skylab: ${value}`;
        myArray.push('mola');
        myArray.push('rocks!');
        newArray = myArray.map(mapCallback);
        expect(myArray.length).toBe(newArray.length);
      });
      test('Then return a new array', () => {
        const mapCallback = (value) => `Skylab ${value}`;
        myArray.push('mola ');
        myArray.push('rocks!');
        newArray = myArray.map(mapCallback);
        expect(newArray[0] + newArray[1]).toBe('Skylab mola Skylab rocks!');
      });
    });
  });

  describe('Given a some method', () => {
    describe('When ins invoked', () => {
      describe('And the array is empty', () => {
        test('Then return false', () => {
          const someCallback = (value) => value === 3;
          expect(myArray.some(someCallback)).toBe(false);
        });
      });
      describe('And the array has some strictly equal element', () => {
        test('Then return true', () => {
          myArray.push(3);
          const someCallback = (value) => value === 3;
          expect(myArray.some(someCallback)).toBe(true);
        });
      });
      describe('And the array hasn´t some strictly equal element', () => {
        test('Then return false', () => {
          myArray.push(2);
          const someCallback = (value) => value === 3;
          expect(myArray.some(someCallback)).toBe(false);
        });
      });
    });
  });
});
