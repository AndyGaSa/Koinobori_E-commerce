const beersMock = require('../beer.json');
const controllers = require('./beersController');

test('getBeers should call res.send', () => {
  const res = { send: jest.fn() };
  controllers.getBeers(null, res);
  expect(res.send).toHaveBeenCalled();
});

test('getOneBeer should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controllers.getOneBeer(req, res);

  expect(res.send.beersMock.call[0][0].id).toBe(11);
});
