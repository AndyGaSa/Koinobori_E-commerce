const controller = require('./beersController');
const Beer = require('../models/beerModels');

jest.mock('../models/beerModels');

describe('Given one beer', () => {
  describe('When is triggered', () => {
    test('Then call send', async () => {
      const req = {
        query: {},
      };
      const res = {
        send: jest.fn(),
      };
      Beer.find.mockResolvedValue({});

      await controller.getBeers(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given postBeer', () => {
  describe('When is triggered', () => {
    test('Then call send', async () => {
      const req = {
        query: {},
      };
      const res = {
        status: jest.fn(),
        send: jest.fn(),
      };
      Beer.create.mockResolvedValue({});
      await controller.postBeer(req, res);

      expect(res.send).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
    });
  });
});
