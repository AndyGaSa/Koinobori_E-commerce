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

  describe('When is invoked with id=dc-batman', () => {
    beforeEach(() => {
      query = '?id=dc-batman';
      response = transformUrlQueryToObject(query);
    });

    test('Then id should be a key in the returned object', () => {
      const keys = Object.keys(response);
      expect(keys.some((key) => key === 'id')).toBe(true);
    });

    test('Then id should point to dc-batman', () => {
      expect(response.id).toBe('dc-batman');
    });
  });

  describe('When is invoked with id=dc-batman and superhero=Batman', () => {
    beforeEach(() => {
      query = '?id=dc-batman&superhero=Batman';
      response = transformUrlQueryToObject(query);
    });
    test('Then id should be a key in the returned object', () => {
      const keys = Object.keys(response);
      expect(keys.some((key) => key === 'id')).toBe(true);
    });

    test('Then superhero should be a key in the returned object', () => {
      const keys = Object.keys(response);
      expect(keys.some((key) => key === 'superhero')).toBe(true);
    });

    test('Then superhero should point to Batman', () => {
      expect(response.superhero).toBe('Batman');
    });
  });
});
