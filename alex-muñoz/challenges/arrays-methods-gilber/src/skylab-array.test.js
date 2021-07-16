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
          myArray.push(2);
          expect(myArray.length).toBe(1);
        });
        test('Then myArray [0] = Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
      });
    });
  });
  describe('Given a pop property', () => {
    describe('When myArray length === 0', () => {
      test('Then return Error', () => {
        myArray.pop();
        expect(myArray.pop()).toBe(undefined);
      });
    });
    describe('When myArray length is 1', () => {
      test('Then return 0', () => {
        myArray.pop();
        expect(myArray.length).toBe(0);
      });
    });
    describe('When myArray length is 3', () => {
      test('Then return 2', () => {
        myArray = [0, 2, 4];
        myArray.pop();
        expect(myArray.length).toBe(2);
      });
    });
  });
  describe('Given a some property', () => {
    describe('When match 3', () => {
      test('Then return true', () => {
        myArray.push(3);
        myArray.some(3);
        expect(myArray.some()).toBe(3);
      });
    });
  });
});
