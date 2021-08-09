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
    const res = { send: jest.fn() };
    const req = { body: { name: 'Leffe' } };
    controller.postBeer(req, res);

    test('Then should call res.send with an object with property id = 25 as an argument', () => {
      expect(res.send.mock.calls[0][0].id).toBe(26);
    });
    test('Then should call res.send with an object with property name = Leffe as an argument', () => {
      expect(res.send.mock.calls[0][0].name).toBe('Leffe');
    });
  });
});

describe('Given getOneBeer function', () => {
  describe('When it is invoked with parameter 1', () => {
    test('Then should call res.send with an object with property name = Leffe as an argument', () => {
      const res = { send: jest.fn() };
      const req = { params: { beerId: '1' } };
      controller.getOneBeer(req, res);
      expect(res.send.mock.calls[0][0].name).toBe('Buzz');
    });
  });
  describe('When it is invoked with parameter 26', () => {
    test('Then should call res.send with an object with property name = Leffe as an argument', () => {
      const res = { send: jest.fn() };
      const req = { params: { beerId: '26' } };
      controller.getOneBeer(req, res);
      expect(res.send.mock.calls[0][0].name).toBe('Leffe');
    });
  });
});
