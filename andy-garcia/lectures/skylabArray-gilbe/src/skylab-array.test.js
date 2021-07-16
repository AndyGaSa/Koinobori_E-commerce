const SkylabArray = require('./skylab-array');

describe('SkylabArray class', () => {
  describe('Given a length porpierty', () => {
    describe('When the object is first created', () => {
      test('should be equal to zero', () => {
        const myArray = new SkylabArray();
        expect(myArray.length).toBe(0);
      });
    });
  });
});
