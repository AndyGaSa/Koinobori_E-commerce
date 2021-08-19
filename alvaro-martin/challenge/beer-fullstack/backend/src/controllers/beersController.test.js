const controller = require('./beersController');
const Beer = require('../models/beerModel');

jest.mock('../models/beerModel');

test('GetBeers > Should call res.send', async () => {
  const res = { send: jest.fn() };
  const req = {
    query: {},
  };
  Beer.find.mockResolvedValue({});

  await controller.getBeers(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('getOneBeer > Should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.getOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

describe('Given postBeer', () => {
  describe('When is triggered', () => {
    describe('And create', () => {
      test('Then call send', async () => {
        const req = {
          body: {},
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };
        Beer.create.mockResolvedValue({});

        await controller.postBeer(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And create is rejected', () => {
      test('Then call send', async () => {
        const req = {
          body: {},
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };
        Beer.create.mockRejectedValue({});

        await controller.postBeer(req, res);
        expect(res.send).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
describe('Given getOneBeer', () => {
  describe('When is triggered', () => {
    test('Then call send', () => {
      const req = {
        beer: null,
      };
      const res = {
        send: jest.fn(),
      };

      controller.getOneBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
