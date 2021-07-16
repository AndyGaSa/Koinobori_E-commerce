const SkylabArray = require('./array-methods');

describe('SkylabArray class', () => {
  describe('Given a length propety', () => {
    describe('When its created', () => {
      test('Then return 0', () => {
        const myArray = new SkylabArray();
        expect(myArray.length).toBe(0);
      });
    });
  });
});
