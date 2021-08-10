const controller = require('./beersController');
const Beer = require('../models/beerModel');

jest.mock('../models/beerModel');
let res;
let req;

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
      beforeEach(() => {
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        req = { body: { } };
        Beer.mockResolvedValue({});

        controller.postBeer(req, res);
      });

      test('Then should call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then should call res.status with an argument 201', () => {
        expect(res.status).toHaveBeenCalledWith(201);
      });
    });
    describe('And create is rejected', () => {
      beforeEach(() => {
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        req = { body: { } };
        Beer.mockRejectedValue({});

        controller.postBeer(req, res);
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

/*
describe('Given deleteOneBeer function', () => {
  describe('When it is invoked with parameter 2', () => {
    res = {
      send: jest.fn(),
      status: jest.fn()
    };
    req = { params: { beerId: '2' } };
    controller.deleteOneBeer(req, res);

    test('Then should call res.status with a 204 argument', () => {
      expect(res.status.mock.calls[0][0]).toBe(204);
    });
  });
});

describe('Given updateBeer function', () => {
  describe('When it is invoked with parameter 6', () => {
    res = {
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: { beerId: '6' },
      body: { name: 'Moritz' }
    };
    controller.updateBeer(req, res);

    test('Then should call res.send with an object with the name Moritz', () => {
      expect(res.send.mock.calls[0][0].name).toBe('Moritz');
    });
  });
});

describe('Given a findOneBeer function', () => {
  describe('When it is called', () => {
    describe('And the beer exists', () => {
      req = {
        params: { beerId: '6' }
      };
      next = jest.fn();
      controller.findOneBeer(req, null, next);

      test('Then should call next function', () => {
        expect(next).toHaveBeenCalled();
      });
    });
    describe('And the beer does not exist', () => {
      req = {
        params: { beerId: '99' }
      };
      res = {
        send: jest.fn(),
        status: jest.fn()
      };
      controller.findOneBeer(req, res, null);

      test('Then should call res.status function with an argument 404', () => {
        expect(res.status).toHaveBeenCalledWith(404);
      });

      test('Then should call res.send function
      with a new error with a message There is no beer with id: 99 as an argument', () => {
        expect(res.send.mock.calls[0][0].message).toBe('There is no beer with id: 99');
      });
    });
  });
});

*/
