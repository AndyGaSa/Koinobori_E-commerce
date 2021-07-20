const tranformQueryToObject = require('./transform-query-to-object');

describe('Given the function tranformQueryToObject', () => {
  let query;
  let response;
  let keys;
  describe('When invoked', () => {
    response = tranformQueryToObject();
    test('Then it should return an object', () => {
      expect(typeof response).toBe('object');
    });
  });
  describe('When invoked with ?id=15', () => {
    beforeEach(() => {
      query = '?id=15';
      response = tranformQueryToObject(query);
    });

    test('Then id should be a key in the returned element', () => {
      keys = Object.keys(response);
      expect(keys.some((key) => key === 'id')).toBe(true);
    });
    test('Then the value of id should be 15', () => {
      expect(response.id).toBe('15');
    });
  });
  describe('When invoked with ?slug=1-a-bomb', () => {
    beforeEach(() => {
      query = '?slug=1-a-bomb';
      response = tranformQueryToObject(query);
    });

    test('Then slug should be a key in the returned element', () => {
      keys = Object.keys(response);
      expect(keys.some((key) => key === 'slug')).toBe(true);
    });
    test('Then the value of id should be 15', () => {
      expect(response.slug).toBe('1-a-bomb');
    });
  });
});
