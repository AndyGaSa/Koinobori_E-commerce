const controller = require('./beersController');
const Beer = require('../models/beerModel');

jest.mock('../models/beerModel');

describe('Given getBeers', () => {
  describe('When is triggered', () => {
    test('Then getBeers should call res.send', async () => {
      const req = { query: {} };
      const res = { send: jest.fn() };

      Beer.find.mockResolvedValue({});
      await controller.getBeers(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given postBeer', () => {
  describe('When is triggered', () => {
    describe('And create resolved', () => {
      test('Then call status 201', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Beer.create.mockResolvedValue({});
        await controller.postBeer(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given findOneBeer', () => {
  describe('When is triggered', () => {
    describe('And findbyId resolves', () => {
      test('Then call next', async () => {
        const req = {
          params: { beerId: null },
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };

        const next = jest.fn();
        Beer.findById.mockResolvedValue({});

        await controller.findOneBeer(req, res, next);

        expect(next).toHaveBeenCalled();
      });
    });
  });
});

describe('Given getOneBeer', () => {
  describe('When is triggered', () => {
    test('Then getGetOneBeer should call res.send', () => {
      const req = { query: {} };
      const res = { send: jest.fn() };

      controller.getOneBeer(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given putOneBeer', () => {
  describe('When is triggered', () => {
    describe('And findbyIdAndUpdate resolves', () => {
      test('Then call res.send', async () => {
        const req = {
          params: { beerId: null },
          body: {},
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };

        Beer.findByIdAndUpdate.mockResolvedValue({});

        await controller.putOneBeer(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given deleteOneBeer', () => {
  describe('When is triggered', () => {
    describe('And findbyIdAndDelete resolves', () => {
      test('Then call res.send', async () => {
        const req = {
          params: { beerId: null },
          body: {},
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };

        Beer.findByIdAndDelete.mockResolvedValue({});

        await controller.deleteOneBeer(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
