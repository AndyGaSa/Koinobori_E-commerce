const SkylabArray = require('../index');// invocando la funcion
// require que devuelve la ruta del fichero que quermos importar.

/**
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */

describe('SkylabArray class', () => {
  let myArray = new SkylabArray();

  describe('Given a length property', () => {
    describe('When is first created', () => {
      test('Then return 0', () => {
        myArray = new SkylabArray();
        expect(myArray.length).toBe(0);
      });
    });
  });

  describe('Given a push property', () => {
    describe('When is invoked with Skylab string', () => {
      describe('And the array is empty', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });

        test('Then return 1', () => {
          expect(myArray.push('Skylab')).toBe(1);
        });
        test('Then myArray [0] = Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
        test('Then return X', () => {
          expect(myArray.push(newValue[i])).toBe(newValue[i]);
        });
      });
    });
  });
  describe('Given a map method', () => {
    describe('When is invoked', () => {
      test('Then return a new array', () => {
        myArray = new SkylabArray();
        const mapCallback = (value) => {
          return `Skylab:${value}`;
          const newArray = myArray.map(mapCallback)};
          expect(myArray).not.toEqual(newArray);
        };
      });
    });
  });
});
