const SkylabArray = require('./skylab-array');

/**
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */

describe('SkylabArray class', () => {
  describe('Given a length property', () => {
    describe('When the object is first created', () => {
      test('Then return 0', () => {
        const myArray = new SkylabArray();
        expect(myArray.length).toBe(0);
      });
    });
  });
});
