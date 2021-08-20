const controller = require('./beersController');
const Beer = require('../models/beerModel');

jest.mock('../models/beerModel');

describe('Given getOneBeer', () => {
  describe('When is triggered', () => {
    test('Then call send', () => {
      const req = {
        beer: {},
      };
      const res = {
        send: jest.fn(),
      };

      controller.getOneBeer(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given getBeers', () => {
  describe('When is triggered', () => {
    describe('And find resolved', () => {
      test('Then call json', async () => {
        const req = {
          query: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
          json: jest.fn(),
        };

        Beer.find.mockResolvedValue({});

        await controller.getBeers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And find rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          beer: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
          json: jest.fn(),
        };

        Beer.find.mockRejectedValue();

        await controller.getBeers(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
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
          status: jest.fn(),
          send: jest.fn(),
        };
        Beer.create.mockResolvedValue({});

        await controller.postBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
      });
    });
    describe('And create rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          body: {},
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };
        Beer.create.mockRejectedValue({});

        await controller.postBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given findOneBeer', () => {
  describe('When is triggered', () => {
    describe('And findById resolves', () => {
      test('Then call next', async () => {
        // arrange
        const req = {
          params: { beerId: null },
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };
        const next = jest.fn();
        Beer.findById.mockResolvedValue({});

        // act
        await controller.findOneBeer(req, res, next);

        // assert
        expect(next).toHaveBeenCalled();
      });
    });
    describe('And findById returns null', () => {
      test('Then call status 404', async () => {
        const req = {
          params: { beerId: null },
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };
        const next = jest.fn();
        Beer.findById.mockResolvedValue(null);

        await controller.findOneBeer(req, res, next);

        expect(res.status).toHaveBeenCalledWith(404);
      });
    });
    describe('And findById returns null', () => {
      test('Then call status 500', async () => {
        const req = {
          params: { beerId: null },
        };
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };
        const next = jest.fn();
        Beer.findById.mockRejectedValue();

        await controller.findOneBeer(req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given putOneBeer', () => {
  describe('When is triggered', () => {
    describe('And findByIdAndUpdate resolved', () => {
      test('Then call json', async () => {
        const req = {
          body: {},
          params: { beerId: 1 },
        };
        const res = {
          send: jest.fn(),
          json: jest.fn(),
        };

        Beer.findByIdAndUpdate.mockResolvedValue({});

        await controller.putOneBeer(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And findByIdAndUpdate rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          body: {},
          params: { beerId: 1 },
        };
        const res = {
          send: jest.fn(),
          json: jest.fn(),
          status: jest.fn(),
        };

        Beer.findByIdAndUpdate.mockRejectedValue({});

        await controller.putOneBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given deleteOneBeer', () => {
  describe('When is triggered', () => {
    describe('And findByIdAndDelete resolved', () => {
      test('Then call status 204', async () => {
        const req = {
          params: { beerId: 1 },
        };
        const res = {
          status: jest.fn(),
          json: jest.fn(),
          send: jest.fn(),
        };

        Beer.findByIdAndDelete.mockResolvedValue({});

        await controller.deleteOneBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
      });
    });

    describe('And findByIdAndDelete rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          body: {},
          params: { beerId: 1 },
        };
        const res = {
          send: jest.fn(),
          json: jest.fn(),
          status: jest.fn(),
        };

        Beer.findByIdAndDelete.mockRejectedValue({});

        await controller.deleteOneBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
