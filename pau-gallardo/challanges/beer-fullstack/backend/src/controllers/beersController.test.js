const controller = require('./beersController');

describe('Given getBeers', () => {
  describe('When is triggered', () => {
    test('Then getBeers should call res.send', () => {
      const res = { send: jest.fn() };

      controller.getBeers(null, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given getBeers', () => {
  describe('When is triggered', () => {
    test('Then getGetOneBeer should call res.send', () => {
      const req = { params: { beerId: 11 } };
      const res = { send: jest.fn() };

      controller.getOneBeer(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
