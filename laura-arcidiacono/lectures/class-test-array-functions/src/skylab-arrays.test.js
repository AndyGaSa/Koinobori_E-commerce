const SkylabArray = require('./skylab-arrays');

describe('SkylabArray class', () => {
  let myArray;
  let newArray;
  let otherArray;

  beforeEach(() => {
    myArray = new SkylabArray();
    otherArray = new SkylabArray();
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
    describe('When is invoked', () => {
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

  describe('Give a every method', () => {
    describe('When is invoked with a callback', () => {
      describe('And the array is empty', () => {
        test('Then return true', () => {
          const everyCallback = (value) => value < 5;
          expect(myArray.every(everyCallback)).toBe(true);
        });
      });
      describe('And all the values of the array are true after callback', () => {
        test('Then return true', () => {
          myArray.push(3);
          myArray.push(0);
          myArray.push(1);
          myArray.push(4);
          const everyCallback = (value) => value < 5;
          expect(myArray.every(everyCallback)).toBe(true);
        });
      });
      describe('And at least one value of the array is false after callback', () => {
        test('Then return false', () => {
          myArray.push(3);
          myArray.push(0);
          myArray.push(10);
          myArray.push(4);
          const everyCallback = (value) => value < 5;
          expect(myArray.every(everyCallback)).toBe(false);
        });
      });
    });
  });

  describe('Given a find method', () => {
    describe('When is invoked with an array', () => {
      describe('And the array is empty', () => {
        test('Then return undefined', () => {
          const findCallback = (value) => value === 1452;
          expect(myArray.find(findCallback)).toBe(undefined);
        });
      });
      describe('And the array hasn´t some strictly equal element', () => {
        test('Then return undefined', () => {
          myArray.push(3);
          myArray.push(true);
          myArray.push('Hola Skylabers');
          myArray.push(852);
          const findCallback = (value) => value === 1452;
          expect(myArray.find(findCallback)).toBe(undefined);
        });
      });
      describe('And the array has at least one value strictly equal elementat', () => {
        test('Then return the index of that value in the array', () => {
          myArray.push(3);
          myArray.push(true);
          myArray.push('Hola Skylabers');
          myArray.push(1452);
          const findCallback = (value) => value === 1452;
          expect(myArray.find(findCallback)).toBe(3);
        });
      });
    });
  });

  describe('Given a filter method', () => {
    describe('When is invoked with an array', () => {
      describe('And the array is empty', () => {
        test('Then return a empty array', () => {
          const filterCallback = (value) => value > 5;
          newArray = myArray.filter(filterCallback);
          expect(newArray.length).toEqual(0);
        });
      });
      describe('And all the values of the array are false after callback', () => {
        test('Then return a new empty array', () => {
          myArray.push(3);
          myArray.push(2);
          myArray.push(1);
          myArray.push(0);
          const filterCallback = (value) => value > 5;
          expect(myArray.filter(filterCallback).length).toEqual(0);
        });
      });
      describe('And the array has one or more elements true after callback', () => {
        test('Then return a new array with those elements', () => {
          myArray.push(3);
          myArray.push(-10);
          myArray.push(15);
          myArray.push(20);
          const filterCallback = (value) => value > 5;
          newArray = myArray.filter(filterCallback);
          expect((newArray[0], newArray[1])).toBe((15, 20));
        });
      });
    });
  });
  describe('Given an array and a concat method', () => {
    describe('When is invoked with another array', () => {
      test('Then return a new array that contains copies of the same elements combined from the original arrays', () => {
        myArray.push('Hola Skylabers ');
        otherArray.push('Skylab mola! ');
        newArray = myArray.concat(otherArray);
        expect((newArray[0], newArray[1])).toEqual(('Hola Skylabers ', 'Skylab mola! '));
      });
    });
  });
  describe('Given an array and a reverse method', () => {
    describe('When is invoked ', () => {
      test('Then return the array reversing the order of the array', () => {
        myArray.push('Hola Skylabers ');
        myArray.push('Skylab mola! ');
        const myReversedArray = myArray.reverse();
        expect((myReversedArray[0], myReversedArray[1])).toEqual(('Skylab mola! ', 'Hola Skylabers '));
      });
    });
  });
});
