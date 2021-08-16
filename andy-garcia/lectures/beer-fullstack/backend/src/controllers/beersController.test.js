const controller = require('./beersController');

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

test('postBeer > Should call res.send', () => {
  const res = { send: jest.fn() };
  const req = { body: { name: 'hola' } };
  controller.postBeer(req, res);
  expect(res.send).toHaveBeenCalled();
});
test('postBeer > Should push a new item to beerMocks', () => {
  const res = { send: jest.fn() };
  const req = { body: { name: 'hola' } };
  controller.postBeer(req, res);
  expect(beersMock.length).toBe(27);
});
