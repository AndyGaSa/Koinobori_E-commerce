const Cart = require('../models/cartModel');
const controllers = require('./cartControllers');

jest.mock('../models/cartModel');

describe('Given a getAll function', () => {
  describe('When is triggered', () => {
    describe('And find resolved', () => {
      test('Then call json', async () => {
        const req = {
          query: null
        };

        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };

        Cart.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([])
          })
        });

        await controllers.getAll(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And find rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          query: null
        };

        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };

        Cart.find.mockRejectedValue();

        await controllers.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a getById function', () => {
  describe('When is triggered', () => {
    describe('And findById respons', () => {
      test('Then call json', async () => {
        const req = {
          query: {
            cartId: {}
          }
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Cart.findById.mockResolvedValue({});

        await controllers.getById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And findById reject', () => {
      test('Then call status with 500', async () => {
        const req = {
          query: jest.fn()
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };

        Cart.findById.mockRejectedValue();

        await controllers.getById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a updatedOneById', () => {
  describe('When is triggered', () => {
    describe('And findByIdAndUpdate response', () => {
      test('Then call json', async () => {
        const req = {
          query: {
            cartId: {}
          },
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Cart.findByIdAndUpdate.mockResolvedValue({});

        await controllers.updateOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findByIdAndUpdate reject', () => {
      test('Then call status with 500', async () => {
        const req = {
          query: {
            cartId: {}
          },
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Cart.findByIdAndUpdate.mockRejectedValue();

        await controllers.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a deleteOneById function', () => {
  describe('When is triggered', () => {
    describe('And findByIdAndDelete response', () => {
      test('Then call json', async () => {
        const req = {
          query: {
            cartId: {}
          }
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Cart.findByIdAndDelete.mockResolvedValue({});

        await controllers.deleteOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findByIdAndDelete reject', () => {
      test('Then call json', async () => {
        const req = {
          query: {
            cartId: {}
          }
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Cart.findByIdAndDelete.mockRejectedValue();

        await controllers.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
