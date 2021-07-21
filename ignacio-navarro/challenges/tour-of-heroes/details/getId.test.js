const getIdFromUrl = require('./getId');

describe('given the function getIdFromUrl', () => {
  let url;
  let result;
  describe('when the parameter is empty', () => {
    result = getIdFromUrl();
    test('it should return an object', () => {
      expect(typeof result).toBe('object');
    });
  });
  describe('when the url has an id', () => {
    beforeEach(() => {
      url = '?heroId=5';
      result = getIdFromUrl(url);
    });

    test('it should return an object with one property', () => {
      expect(Object.keys(result).length).toBe(1);
    });
    test('the property is heroId', () => {
      expect(Object.keys(result)[0]).toBe('heroId');
    });
    test('property shoud point to 5', () => {
      expect(Object.values(result)[0]).toBe('5');
    });
  });
  describe('when the url has several ids', () => {
    beforeEach(() => {
      url = '?heroId=5&heroName=dr-stone';
      result = getIdFromUrl(url);
    });

    test('it should return an object with several properties', () => {
      expect(Object.keys(result).length >= 1).toBe(true);
    });
    test('property two should be "heroName"', () => {
      expect(Object.keys(result)[1]).toBe('heroName');
    });
    test('property one should point to 5', () => {
      expect(Object.values(result)[0]).toBe('5');
    });
    test('property two should point to drstone', () => {
      expect(Object.values(result)[1]).toBe('dr-stone');
    });
  });
});
