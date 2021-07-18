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

  describe('Given a some method', () => {
    describe('When is invoked', () => {
      describe('And array has at least 1 element mola', () => {
        beforeEach(() => {
          myArray.push('mola');
        });
        test('Then the return of some === mola will be true', () => {
          const result = myArray.some((value) => value === 'mola');
          expect(result).toBe(true);
        });
        test('Then the return of some === algo will be true', () => {
          const result = myArray.some((value) => value === 'algo');
          expect(result).toBe(false);
        });
      });
    });
  });

  describe('Given a find method', () => {
    describe('When is invoked', () => {
      describe('And array has at least 2 elements [mola,skylab]', () => {
        beforeEach(() => {
          myArray.push('mola');
          myArray.push('skylab');
        });
        test('Then the return of find mola will be mola', () => {
          const result = myArray.find((value) => value === 'mola');
          expect(result).toBe('mola');
        });
        test('Then the return of find skylab will be skylab', () => {
          const result = myArray.find((value) => value === 'skylab');
          expect(result).toBe('skylab');
        });
        test('Then the return of find algo will be undefined', () => {
          const result = myArray.find((value) => value === 'algo');
          expect(result).toBe(undefined);
        });
      });
    });
  });

  describe('Given a filter method', () => {
    describe('When is invoked', () => {
      describe('And array has 5 elements [1,2,3,4,5]', () => {
        beforeEach(() => {
          myArray.push(1);
          myArray.push(2);
          myArray.push(3);
          myArray.push(4);
          myArray.push(5);
        });
        test('Then the return[0] of filter > 2 will be 3', () => {
          const result = myArray.filter((value) => value > 2);
          expect(result[0]).toBe(3);
        });
        test('Then the return[2] of filter > 2 will be 5', () => {
          const result = myArray.filter((value) => value > 2);
          expect(result[2]).toBe(5);
        });
        test('Then the return of filter > 5 will be an empty skylabArray', () => {
          const result = myArray.filter((value) => value > 5);
          const aux = new SkylabArray();
          expect(result).toEqual(aux);
        });
      });
    });
  });

  describe('Given a reverse method', () => {
    describe('When is invoked', () => {
      describe('And array has 5 elements [1,2,3,4,5]', () => {
        beforeEach(() => {
          myArray.push(1);
          myArray.push(2);
          myArray.push(3);
          myArray.push(4);
          myArray.push(5);
        });
        test('Then the return[0] will be 5', () => {
          const result = myArray.reverse();
          expect(result[0]).toBe(5);
        });
        test('Then the return[4] will be 1', () => {
          const result = myArray.reverse();
          expect(result[4]).toBe(1);
        });
        test('Then the return will be equal to my array', () => {
          const result = myArray.reverse();
          expect(result).toEqual(myArray);
        });
      });
    });
  });

  describe('Given a concat method', () => {
    describe('When is invoked', () => {
      describe('And array has 3 elements [0,1,2]', () => {
        beforeEach(() => {
          myArray.push(0);
          myArray.push(1);
          myArray.push(2);
        });
        describe('And newArray has 3 elements [3,4,5]', () => {
          beforeEach(() => {
            newArray = new SkylabArray();
            newArray.push(3);
            newArray.push(4);
            newArray.push(5);
          });
          test('Then the return will be equal to [0,1,2,3,4,5]', () => {
            const result = myArray.concat(newArray);
            expect(result).toEqual(new SkylabArray(0, 1, 2, 3, 4, 5));
          });
        });
        describe('And the parameter is empty', () => {
          test('Then the return will be equal to [0,1,2]', () => {
            const result = myArray.concat();
            expect(result).toEqual(new SkylabArray(0, 1, 2));
          });
        });
        describe('And the parameter is a string skylab', () => {
          test('Then the return will be equal to [0,1,2,skylab]', () => {
            const result = myArray.concat('skylab');
            expect(result).toEqual(new SkylabArray(0, 1, 2, 'skylab'));
          });
        });
      });
    });
  });

  describe('Given a findIndex method', () => {
    describe('When is invoked', () => {
      describe('And array has at least 5 element [a,b,c,d,e]', () => {
        beforeEach(() => {
          myArray.push('a');
          myArray.push('b');
          myArray.push('c');
          myArray.push('d');
          myArray.push('e');
        });
        test('Then the return of findIdex of c will be 2', () => {
          const result = myArray.findIndex((value) => value === 'c');
          expect(result).toBe(2);
        });
        test('Then the return of findIdex of e will be 4', () => {
          const result = myArray.findIndex((value) => value === 'e');
          expect(result).toBe(4);
        });
        test('Then the return of findIdex of f will be -1', () => {
          const result = myArray.findIndex((value) => value === 'f');
          expect(result).toBe(-1);
        });
      });
      describe('And array has at least 5 element [5,4,200,2,1]', () => {
        beforeEach(() => {
          myArray.push(5);
          myArray.push(4);
          myArray.push(200);
          myArray.push(2);
          myArray.push(1);
        });
        test('Then the return of findIdex > 10 will be 2', () => {
          const result = myArray.findIndex((value) => value > 10);
          expect(result).toBe(2);
        });
      });
    });
  });

  describe('Given an indexOf method', () => {
    describe('When is invoked', () => {
      describe('And array has at least 5 element [a,b,c,d,e]', () => {
        beforeEach(() => {
          myArray.push('a');
          myArray.push('b');
          myArray.push('c');
          myArray.push('d');
          myArray.push('e');
        });
        test('Then the return of indexOf of c will be 2', () => {
          const result = myArray.indexOf('c');
          expect(result).toBe(2);
        });
        test('Then the return of indexOf of e will be 4', () => {
          const result = myArray.indexOf('e');
          expect(result).toBe(4);
        });
        test('Then the return of indexOf of f will be -1', () => {
          const result = myArray.indexOf('f');
          expect(result).toBe(-1);
        });
      });
    });
  });

  describe('Given a join method', () => {
    describe('When is invoked', () => {
      describe('And array has 3 elements [a,b,c]', () => {
        beforeEach(() => {
          myArray.push('a');
          myArray.push('b');
          myArray.push('c');
        });
        test('Then the return of join() will be a,b,c', () => {
          const result = myArray.join();
          expect(result).toBe('a,b,c');
        });
        test('Then the return of join("-") will be a,b,c', () => {
          const result = myArray.join('-');
          expect(result).toBe('a-b-c');
        });
        test('Then the return of join("") will be a,b,c', () => {
          const result = myArray.join('');
          expect(result).toBe('abc');
        });
        test('Then the return of join(null) will be a,b,c', () => {
          const result = myArray.join(null);
          expect(result).toBe('anullbnullc');
        });
      });
    });
  });
});
