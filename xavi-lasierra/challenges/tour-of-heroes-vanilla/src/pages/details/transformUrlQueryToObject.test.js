const transformUrlQueryToObject = require('./id-getter');

describe('Given a transformUrlQueryToObject function', () => {
  describe('When is invoked with a valid search string', () => {
    test('Then return an object', () => {

    });
  });

  describe('When is invoked with an invalid search string', () => {
    test('Then return an empty object', () => {

    });
  });

  describe('When is invoked with id=dc-batman', () => {
    test('Then id should be a key in the returned object', () => {

    });
    test('Then id should point to dc-batman', () => {

    });
  });

  describe('When is invoked with id=dc-batman and superhero=Batman', () => {
    test('Then id should be a key in the returned object', () => {

    });
    test('Then superhero should be a key in the returned object', () => {

    });
    test('Then superhero should point to Batman', () => {

    });
  });
});
