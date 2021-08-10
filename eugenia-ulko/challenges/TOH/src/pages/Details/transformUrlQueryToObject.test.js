const transformUrlQueryToObject = require('./transformUrlQueryToObject');

describe('Given a transformUrlQueryToObject function', () => {
  describe('When is invoked ', () => {
    test('Then return an object', () => {
      // act
      const response = transformUrlQueryToObject();

      // assert
      expect(typeof response).toBe('object');
    });
  });

  describe('When is invoked with ?heroId=14', () => {
    let query;
    let response;

    beforeEach(() => {
      // arrange
      query = '?heroId=14';

      // act
      response = transformUrlQueryToObject(query);
    });

    test('Then heroId should be a key in the returned object', () => {
      const keys = Object.keys(response);

      // assert
      expect(keys.some((key) => key === 'heroId')).toBe(true);
    });

    test('Then heroId key should point to 14', () => {
      // assert
      expect(response.heroId).toBe('14');
    });
  });

  describe('When isInvoked with ?heroId=14&heroName=Celeritas', () => {
    let query;
    let response;

    beforeEach(() => {
      // arrange
      query = '?heroId=14&heroName=Celeritas';

      // act
      response = transformUrlQueryToObject(query);
    });

    test('Then heroId should be a key in the returned object', () => {
      const keys = Object.keys(response);

      // assert
      expect(keys.some((key) => key === 'heroId')).toBe(true);
    });

    test('Then heroId key should point to 14', () => {
      // assert
      expect(response.heroId).toBe('14');
    });

    test('Then heroName should be a key in the returned object', () => {
      const keys = Object.keys(response);

      // assert
      expect(keys.some((key) => key === 'heroName')).toBe(true);
    });

    test('Then heroName key should point to Celeritas', () => {
      // assert
      expect(response.heroName).toBe('Celeritas');
    });
  });
});
