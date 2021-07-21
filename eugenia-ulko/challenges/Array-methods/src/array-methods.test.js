const SkylabArray = require('./Array-methods');
// require the module from another file,
// invoking the function require that returns an object

/**
 * GIVEN - skylabarray/length property
 * WHEN  - is first created
 * THEN  - return 0
 * AND
 * OR
 */

// GHERKIN: funcion "describe" recibe los mismos arg q test:
describe('SkylabArray class', () => {
  const myArray = new SkylabArray();
  // testing POP:

  describe('GIVEN a pop method', () => {
    describe('WHEN is invoked', () => {
    });
    describe('and the array has 6 elements', () => {
      test('THEN remove the 6th element and return it', () => {
        myArray.push(10, 20, 30, 40, 50, 60);
        expect(myArray.pop()).toBe(10);
      });
    });
  });
});

describe("Given a map method", () => {
  describe("when is invoked", () => {
    test("Then return anew array", () => {
      myArray = new SkylabArray();
      const mapCallback = (value) => `Skylab ${value}`;
      myArray.map(mapCallback);
      expect(myArray).not.toEqual(newArray);
 
    });
  });
});
});
