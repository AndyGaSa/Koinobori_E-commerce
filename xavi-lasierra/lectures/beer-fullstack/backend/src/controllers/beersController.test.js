const controller = require('./beersController');
const Beer = require('../models/beerModel');

jest.mock('../models/beerModel');
let res;
let req;
let next;

describe('Given getBeers function', () => {
  describe('When it is invoked', () => {
    describe('And find is resolved', () => {
      test('Then should call res.json', async () => {
        res = { json: jest.fn() };
        req = { query: {} };
        Beer.find.mockResolvedValue({});

        await controller.getBeers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And find is rejected', () => {
      beforeEach(async () => {
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        req = { query: {} };
        Beer.find.mockRejectedValue({});

        await controller.getBeers(req, res);
      });
      test('Then should call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
      test('Then should call res.send', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given postBeer function', () => {
  describe('When it is invoked', () => {
    describe('And create is resolved', () => {
      beforeEach(async () => {
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        req = { body: { } };
        Beer.create.mockResolvedValue({});

        await controller.postBeer(req, res);
      });

      test('Then should call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then should call res.status with an argument 201', () => {
        expect(res.status).toHaveBeenCalledWith(201);
      });
    });
    describe('And create is rejected', () => {
      beforeEach(async () => {
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        req = { body: { } };
        Beer.create.mockRejectedValue({});

        await controller.postBeer(req, res);
      });

      test('Then should call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });

      test('Then should call res.status with an argument 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given getOneBeer function', () => {
  describe('When it is invoked', () => {
    test('Then should call res.send', () => {
      res = {
        send: jest.fn()
      };
      req = { beer: { } };
      controller.getOneBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given deleteOneBeer function', () => {
  describe('When it is invoked', () => {
    describe('And findByIdAndDelete is resolved', () => {
      beforeEach(async () => {
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        req = { params: { beerId: '2' } };
        Beer.findByIdAndDelete.mockResolvedValue({});

        await controller.deleteOneBeer(req, res);
      });

      test('Then should call res.sent with no arguments', () => {
        expect(res.send).toHaveBeenCalledWith();
      });

      test('Then should call res.status with an argument 204', () => {
        expect(res.status).toHaveBeenCalledWith(204);
      });
    });

    describe('And findByIdAndDelete is rejected', () => {
      beforeEach(async () => {
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        req = { params: { beerId: '2' } };
        Beer.findByIdAndDelete.mockRejectedValue({});

        await controller.deleteOneBeer(req, res);
      });

      test('Then should call res.sent', () => {
        expect(res.send).toHaveBeenCalled();
      });

      test('Then should call res.status with an argument 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given updateBeer function', () => {
  describe('When it is invoked', () => {
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then should call res.json', async () => {
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        req = {
          params: { beerId: '6' },
          body: { }
        };
        Beer.findByIdAndUpdate.mockResolvedValue({});

        await controller.updateBeer(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And findByIdAndUpdate is rejected', () => {
      beforeEach(async () => {
        res = {
          status: jest.fn(),
          send: jest.fn()
        };
        req = {
          params: { beerId: '6' },
          body: { }
        };
        Beer.findByIdAndUpdate.mockRejectedValue({});

        await controller.updateBeer(req, res);
      });

      test('Then should call res.send', async () => {
        expect(res.send).toHaveBeenCalled();
      });

      test('Then should call res.status with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a findOneBeer function', () => {
  describe('When it is called', () => {
    describe('And findById is resolved', () => {
      describe('And the beer exists', () => {
        test('Then should call next function', async () => {
          req = {
            params: { beerId: '6' }
          };
          next = jest.fn();
          Beer.findById.mockResolvedValue({});

          await controller.findOneBeer(req, null, next);

          expect(next).toHaveBeenCalled();
        });
      });
      describe('And the beer does not exist', () => {
        beforeEach(async () => {
          req = {
            params: { beerId: '99' }
          };
          res = {
            send: jest.fn(),
            status: jest.fn()
          };
          Beer.findById.mockResolvedValue(null);

          await controller.findOneBeer(req, res, null);
        });
        test('Then should call res.status function with an argument 404', () => {
          expect(res.status).toHaveBeenCalledWith(404);
        });

        test('Then should call res.send function with a new error with a message There is no beer with id: 99 as an argument', () => {
          expect(res.send.mock.calls[0][0].message).toBe('There is no beer with id: 99');
        });
      });
    });
    describe('And findById is rejected', () => {
      test('Then should call next function', async () => {
        req = {
          params: { beerId: '6' }
        };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Beer.findById.mockRejectedValue({});

        await controller.findOneBeer(req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
