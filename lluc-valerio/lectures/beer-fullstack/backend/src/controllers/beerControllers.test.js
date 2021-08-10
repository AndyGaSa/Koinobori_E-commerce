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

describe('Given a getOneBeer function', () => {
  describe('When is invoked with a beerId=11', () => {
    test('Then getOneBeer should call res.send', () => {
      const req = { params: { beerId: 11 } };
      const res = { send: jest.fn() };
      controller.getOneBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a setBeer function', () => {
  describe('When is invoked with a name', () => {
    test('setBeer should call res.send', () => {
      const req = { body: { name: 'desperado' } };
      const res = { send: jest.fn() };
      controller.setBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a updateBeer function', () => {
  describe('When is invoked with a name an a beerId', () => {
    test('setBeer should call res.send', () => {
      const req = { params: { beerId: '11' }, body: { name: 'desperado' } };
      const res = { send: jest.fn() };
      controller.updateBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteBeer function', () => {
  describe('When is invoked with a beerId', () => {
    test('deleteBeer should call res.send', () => {
      const req = { params: { beerId: '11' } };
      const res = { send: jest.fn() };
      controller.deleteBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
