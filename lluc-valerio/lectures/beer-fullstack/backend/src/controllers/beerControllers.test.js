/* eslint-disable no-undef */
const controller = require('./beersControllers');

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
