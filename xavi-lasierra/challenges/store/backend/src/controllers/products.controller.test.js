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

describe('Given a createProduct function', () => {
  describe('When is invoked', () => {
    describe('And create is resolved', () => {
      beforeEach(async () => {
        req = { params: {} };
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        Product.create.mockResolvedValue({});

        await productsController.createProduct(req, res);
      });

      test('Then res.json should have been called', async () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.status should have been called with 201', async () => {
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
        Product.create.mockRejectedValue({});

        await productsController.createProduct(req, res);
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

describe('Given a findOneProductById function', () => {
  describe('When is invoked', () => {
    describe('And findById is resolved', () => {
      describe('And a product with productId exists', () => {
        test('Then next should have been called', async () => {
          req = { params: {} };
          const next = jest.fn();
          Product.findById.mockResolvedValue({});

          await productsController.findOneProductById(req, null, next);

          expect(next).toHaveBeenCalled();
        });
      });

      describe('And a product with productId does not exist', () => {
        test('Then next should have been called', async () => {
          req = { params: {} };
          res = {
            status: jest.fn(),
            send: jest.fn()
          };
          Product.findById.mockResolvedValue(undefined);

          await productsController.findOneProductById(req, res, null);

          expect(res.status).toHaveBeenCalledWith(404);
        });
      });
    });

    describe('And findById is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Product.create.mockRejectedValue({});

        await productsController.findOneProductById(req, res);
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
