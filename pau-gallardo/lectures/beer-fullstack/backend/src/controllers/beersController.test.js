const controller = require('./beersController');

test('getBeers > Should call res.send', () => {
  const res = { send: jest.fn() };
  controller.getBeers(null, res);
  expect(res.send).toHaveBeenCalled();
});

test('postBeer > Should call res.send', () => {
  const req = { body: { name: 11 } };
  const res = { send: jest.fn() };

  controller.postBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('getOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.getOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('deleteOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.deleteOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('updateOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 }, body: { id: 1 } };
  const res = { send: jest.fn() };

  controller.updateOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});
