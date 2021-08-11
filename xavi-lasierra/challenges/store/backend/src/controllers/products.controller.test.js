const productsController = require('./products.controller');
const Product = require('../models/product.model');

jest.mock('../models/product.model');
let req;
let res;

describe('Given a getProducts function', () => {
  describe('When is invoked', () => {
    describe('And find is resolved', () => {
      test('Then res.json should have been called', async () => {
        req = { query: {} };
        res = { json: jest.fn() };
        Product.find.mockResolvedValue({});

        await productsController.getProducts(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And find is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Product.find.mockRejectedValue({});

        await productsController.getProducts(req, res);
      });

      test('Then res.status should have been called with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send should have been called', async () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a postProduct function', () => {
  describe('When is invoked', () => {
    describe('And create is resolved', () => {
      beforeEach(async () => {
        req = { body: {} };
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        Product.create.mockResolvedValue({});

        await productsController.postProduct(req, res);
      });

      test('Then res.json should have been called', async () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json should have been called', async () => {
        expect(res.status).toHaveBeenCalledWith(201);
      });
    });

    describe('And create is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Product.find.mockRejectedValue({});

        await productsController.postProduct(req, res);
      });

      test('Then res.status should have been called with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send should have been called', async () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
