const Product = require('../models/productModel');
const controllers = require('./productControllers');

jest.mock('../models/productModel');

describe('Given a getAll function', () => {
  describe('When  is triggered', () => {
    describe('And find resolved', () => {
      test('Then call json', async () => {
        const req = {
          query: jest.fn(),
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        Product.find.mockResolvedValue();

        await controllers.getAll(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And find rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          query: jest.fn(),
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };

        Product.find.mockRejectedValue();

        await controllers.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a createOne function', () => {
  describe('When  is triggered', () => {
    describe('And create resolved', () => {
      test('Then call json', async () => {
        const req = {
          body: jest.fn(),
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        Product.create.mockResolvedValue();

        await controllers.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And createOne rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          body: jest.fn(),
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };

        Product.create.mockRejectedValue();

        await controllers.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
