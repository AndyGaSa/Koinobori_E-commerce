const controller = require('./beersController');
const Beer = require('../../models/beerModel');

jest.mock('../../models/beerModel');

describe('Given a getBeers function', () => {
  describe('When triggered', () => {
    describe('And is resolved', () => {
      test('Should call res.json', async () => {
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        const req = { query: {} };

        Beer.find.mockResolvedValue({});

        await controller.getBeers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should call res.status', async () => {
        const res = { status: jest.fn() };
        const req = { query: {} };

        Beer.find.mockRejectedValue(null);

        await controller.getBeers(req, res);

        expect(res.status).toHaveBeenCalledWith(418);
      });
    });
  });
});

describe('Given a postBeer function', () => {
  describe('When triggered', () => {
    describe('And is resolved', () => {
      test('Should call res.json', async () => {
        const res = { status: jest.fn(), json: jest.fn() };
        const req = { body: {} };

        Beer.create.mockResolvedValue({});

        await controller.postBeer(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should call res.status', async () => {
        const res = { status: jest.fn() };
        const req = { query: {} };

        Beer.create.mockRejectedValue(null);

        await controller.postBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(418);
      });
    });
  });
});

describe('Given a getOneBeer function', () => {
  describe('When triggered', () => {
    test('Should call res.send', () => {
      const res = { send: jest.fn() };
      const req = { beer: {} };

      controller.getOneBeer(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteOneBeer function', () => {
  describe('When triggered', () => {
    describe('And is resolved', () => {
      test('Should call res.send', async () => {
        const res = { status: jest.fn(), send: jest.fn() };
        const req = { params: { beerId: {} } };

        Beer.findByIdAndDelete.mockResolvedValue(null);

        await controller.deleteOneBeer(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should call res.status', async () => {
        const res = { status: jest.fn(), send: jest.fn() };
        const req = { params: { beerId: {} } };

        Beer.create.mockRejectedValue(null);

        await controller.deleteOneBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(418);
      });
    });
  });
});

describe('Given a updateOneBeer function', () => {
  describe('When triggered', () => {
    describe('And is resolved', () => {
      test('Should call res.send', async () => {
        const res = { status: jest.fn(), send: jest.fn() };
        const req = { params: { beerId: {} }, body: {} };

        Beer.findByIdAndUpdate.mockResolvedValue({});

        await controller.updateOneBeer(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should call res.status', async () => {
        const res = { status: jest.fn(), send: jest.fn() };
        const req = { params: { beerId: {} } };

        Beer.create.mockRejectedValue(null);

        await controller.updateOneBeer(req, res);

        expect(res.status).toHaveBeenCalledWith(418);
      });
    });
  });
});

describe('Given a filterOneBeer function', () => {
  describe('When triggered', () => {
    describe('And is resolved', () => {
      test('Should call res.send', async () => {
        const res = { status: jest.fn(), send: jest.fn() };
        const req = { params: { beerId: {} }, beer: {} };
        const next = jest.fn();

        Beer.findByIdAndDelete.mockResolvedValue({});

        await controller.filterOneBeer(req, res, next);

        expect(next).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should call res.status', async () => {
        const res = { status: jest.fn(), send: jest.fn() };
        const req = { params: { beerId: {} } };
        const next = jest.fn();

        Beer.findByIdAndDelete.mockRejectedValue(null);

        await controller.filterOneBeer(req, res, next);

        expect(res.status).toHaveBeenCalledWith(418);
      });
    });
  });
});
