const controller = require('./beersController');
const beer = require('../models/beerModel');

jest.mock('../models/beerModel');

describe('Given getBeers', () => {
  describe('When is trigered', () => {
    test('Then call send', async () => {
      const res = {
        send: jest.fn()
      };

      const req = {
        query: {}
      };

      beer.find.mockResolvedValue({});
      await controller.getBeers(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given postBeer', () => {
  describe('When is trigered', () => {
    test('Then call send', async () => {
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };

      const req = {
        body: {}
      };

      beer.create.mockResolvedValue({});

      await controller.postBeer(req, res);

      expect(res.send).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
    });
  });
});

describe('Given one getOneBeer', () => {
  describe('When is trigered', () => {
    test('Then call send', () => {
      const res = {
        send: jest.fn()
      };

      const req = {
        beer: {}
      };

      controller.getOneBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given putOneBear', () => {
  describe('When is trigered', () => {
    test('Then call send', async () => {
      const res = {
        send: jest.fn()
      };

      const req = {
        body: {},
        params: { beerId: null }
      };

      beer.findByIdAndUpdate.mockResolvedValue({});

      await controller.putOneBear(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given deleteBeer', () => {
  describe('When is trigered', () => {
    test('Then call send', async () => {
      const res = {
        status: jest.fn(),
        send: jest.fn()
      };

      const req = {
        params: { beerId: null }
      };

      beer.findByIdAndDelete.mockResolvedValue({});

      await controller.deleteBeer(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
