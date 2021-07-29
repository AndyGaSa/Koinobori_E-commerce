const transformUrlQueryToObject = require('./transformUrlQueryToObject');

describe('Given a transformUrlQueryToObject function', () => {
  let query;
  let response;
  describe('When is invoked', () => {
    test('Then return an object', () => {
      response = transformUrlQueryToObject();
      expect(typeof response).toBe('object');
    });
  });

  describe('When is invoked with id=1', () => {
    beforeEach(() => {
      query = '?id=1';
      response = transformUrlQueryToObject(query);
    });

    test('Then id should be a key in the returned object', () => {
      const keys = Object.keys(response);
      expect(keys.some((key) => key === 'id')).toBe(true);
    });

    test('Then id should point to 1', () => {
      expect(response.id).toBe('1');
    });
  });

  describe('When is invoked with id=1 and slug=1-batman', () => {
    beforeEach(() => {
      query = '?id=1&slug=1-batman';
      response = transformUrlQueryToObject(query);
    });
    test('Then id should be a key in the returned object', () => {
      const keys = Object.keys(response);
      expect(keys.some((key) => key === 'id')).toBe(true);
    });

    test('Then slug should be a key in the returned object', () => {
      const keys = Object.keys(response);
      expect(keys.some((key) => key === 'slug')).toBe(true);
    });

    test('Then slug should point to 1-batman', () => {
      expect(response.slug).toBe('1-batman');
    });
  });
});
