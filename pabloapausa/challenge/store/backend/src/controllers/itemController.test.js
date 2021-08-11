const itemController = require('./itemController');

test('postItems > Should call res.send', () => {
  const res = { send: jest.fn() };
  itemController.postItem(null, res);
  expect(res.send).toHaveBeenCalled();
});

test('getItems > Should call res.send', () => {
  const res = { send: jest.fn() };
  const req = { params: { name: 'A' } };
  itemController.getItems(req, res);
  expect(res.send).toHaveBeenCalled();
});
