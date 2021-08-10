/* eslint-disable no-undef */
const controller = require('./beersControllers');

describe('Given a getBeers function', () => {
  describe('When is invoked with no name', () => {
    test('Then getBeers should call res.send', () => {
      const req = { query: { beerName: null } };
      const res = { send: jest.fn() };
      controller.getBeers(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When is invoked with a name', () => {
    test('Then getBeers should call res.send', () => {
      const req = { query: { beerName: 'desperado' } };
      const res = { send: jest.fn() };
      controller.getBeers(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

test('getOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.getOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});
