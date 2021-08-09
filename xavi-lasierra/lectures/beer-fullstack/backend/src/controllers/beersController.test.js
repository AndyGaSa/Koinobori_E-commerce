const controller = require('./beersController');
const beersMock = require('../mocks/beersMock');

describe('Given getBeers function', () => {
  describe('When it is invoked', () => {
    test('Then should call res.send with beersMock as an argument', () => {
      const res = { send: jest.fn() };
      controller.getBeers(null, res);

      expect(res.send).toHaveBeenCalledWith(beersMock);
    });
  });
});

describe('Given postBeer function', () => {
  describe('When it is invoked', () => {
    test('Then should call res.send with beersMock[beersMock.length-1].id = 25 as an argument', () => {
      const res = { send: jest.fn() };
      const req = { body: { name: 'Leffe' } };
      controller.postBeer(req, res);
      expect(res.send.mock.calls[0][0][25].id).toBe(26);
    });
  });
});
