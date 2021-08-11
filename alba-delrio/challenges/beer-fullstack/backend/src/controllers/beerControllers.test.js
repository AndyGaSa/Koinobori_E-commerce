const Beer = require('../models/beerModel');
const controller = require('./beersControllers');

jest.mock('../models/beerModel');

describe('Given a getBeer controller', () => {
  describe('When is trigered', () => {
    test('then call  send', async () => {
      const res = {
        send: jest.fn()
      };
      const req = { query: { beerName: ' ' } };
      Beer.find.mockResolvedValue({ });
      await controller.getBeers(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };
      const req = { query: { beerName: ' ' } };

      Beer.find.mockRejectedValue();
      await controller.getBeers(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a postBeer controller', () => {
  describe('when is trigered', () => {
    test('then call  send', async () => {
      const res = { send: jest.fn() };
      const req = { body: { } };
      Beer.create.mockResolvedValue();
      await controller.postBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };
      const req = { body: { } };

      Beer.create.mockRejectedValue();
      await controller.postBeer(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a getOneBeer controller', () => {
  test(' then getOneBeer Should call res.send', () => {
    const res = { send: jest.fn() };
    const req = { params: { beerId: 11 } };

    controller.getOneBeer(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a updateOneBeer controller', () => {
  describe('when is trigered', () => {
    test('then call  send', async () => {
      const req = { params: { }, body: { } };
      const res = { json: jest.fn() };
      Beer.findByIdAndUpdate.mockResolvedValue();
      await controller.updateOneBeer(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test('then call  rejected', async () => {
      const req = { params: { }, body: { } };
      const res = { send: jest.fn() };
      Beer.findByIdAndUpdate.mockRejectedValue();
      await controller.updateOneBeer(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteOneBeer controller', () => {
  describe('when is trigered', () => {
    test('then call send', async () => {
      const res = { send: jest.fn() };
      const req = { beer: { } };
      Beer.aggregate.mockResolvedValue();
      await controller.deleteOneBeer(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a findOneBeer controller', () => {
  describe('when is trigered', () => {
    test('then call send', async () => {
      const res = { send: jest.fn() };
      const req = { params: { beer: { } } };
      const next = jest.fn();

      Beer.findById.mockResolvedValue();
      await controller.findOneBeer(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      const res = { send: jest.fn(), status: jest.fn() };
      const req = { params: { beer: { } } };
      const next = jest.fn();
      Beer.findById.mockRejectedValue();
      await controller.findOneBeer(req, res, next);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
describe('Given a findRandomBeer controller', () => {
  describe('when is trigered', () => {
    test('then call send', async () => {
      const res = { send: jest.fn() };
      
    });
  });
});
