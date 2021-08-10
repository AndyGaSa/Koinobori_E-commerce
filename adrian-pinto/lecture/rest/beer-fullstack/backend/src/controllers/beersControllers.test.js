const beersMock = require('../beers.json');
const controller = require('./beersController');

describe('');

test('GetBeers > Should call res.send', () => {
  const res = { send: jest.fn() };
  controller.getBeers(null, res);
  expect(res.send).toHaveBeenCalled();
});

test('getOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.getOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('postOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.postBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('putOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.putOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('delOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.delOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('delOneBeer > But id not found Should call res.send', () => {
  const req = { params: { beerId: 30 } };
  const res = { send: jest.fn() };

  controller.delOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});
