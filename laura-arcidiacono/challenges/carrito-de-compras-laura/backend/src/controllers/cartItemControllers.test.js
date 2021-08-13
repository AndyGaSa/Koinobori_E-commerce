const Cart = require('../models/cartItemModel');
const controllers = require('./cartItemControllers');

jest.mock('../models/cartItemModel');

describe('Given a getAll function', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        query: jest.fn()
      };
      const res = {
        send: jest.fn(),
        status: jest.fn(),
        json: jest.fn()
      };

      Cart.find.mockResolvedValue({}).populate.mockResolvedValue(req)
        .populate.mockResolvedValue(req);

      await controllers.getAll(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a createOne function', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        body: {}
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      Cart.find.mockResolvedValue({});

      await controllers.createOne(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getOneById function', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        query: { cartId: {} }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      Cart.findById.mockResolvedValue({});

      await controllers.getOneById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteOneById function', () => {
  describe('When is triggered', () => {
    test('Then call send without argument', async () => {
      const req = {
        params: { cartId: null }
      };
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };
      Cart.findByIdAndDelete.mockResolvedValue();

      await controllers.deleteOneById(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
