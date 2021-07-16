const SkylabArray = require('./skylab-array');

/**
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */
describe('SkylabArray class', () => {
  const myArray = new SkylabArray();

  describe('Given a length property', () => {
    describe('When is first creates', () => {
      test('should have a length equals to 0', () => {
      /* expect(myArray.length).toBe(0); */
      });
    });
  });

  describe('Given a push property', () => {
    describe('When is invoke with one value', () => {
      test('Then return 0', () => {
        // expect(myArray.push()).toBe(1);
      });
    });
  });

  describe('Given a pop property', () => {
    myArray.push(2, 3, 4, 5, 'tomate');
    describe('When is invoke with one value', () => {
      test('Then return the value and delete', () => {
        expect(myArray.pop()).toBe('tomate');
      });
    });
  });
  describe('Given a map method', () => {
    let myArray;
    beforeEach(() => {
      myArray = new SkylabArray();
      myArray.push('mola');
    });
    describe('When is invoked', () => {
      test('Then return new array', () => {
        const mapCallback = (value) => `Skylab: ${value}`;
        const newArray = myArray.map(mapCallback);
        expect(myArray).not.toEqual(newArray);
      });
    });
  });
});
