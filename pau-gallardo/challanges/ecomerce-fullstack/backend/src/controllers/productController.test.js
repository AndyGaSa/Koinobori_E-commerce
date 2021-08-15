const controller = require('./productController');
const Product = require('../models/productModel');

jest.mock('../models/productModel');

describe('Given createOneProduct', () => {
  describe('When is triggered', () => {
    describe('And createOneProduct resolved', () => {
      test('Then send should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Product.create.mockResolvedValue({});
        await controller.createOneProduct(req, res);

        expect(res.send).toHaveBeenCalled();
      });

      test('Then status should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Product.create.mockResolvedValue({});
        await controller.createOneProduct(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
    describe('And createOneProduct rejects', () => {
      test('Then status should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Product.create.mockRejectedValue({});
        await controller.createOneProduct(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given getAllProducts', () => {
  describe('When is triggered', () => {
    describe('And getAllproducts resolved', () => {
      test('Then json should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
          json: jest.fn(),
        };

        Product.find.mockResolvedValue({});
        await controller.getAllProducts(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then status should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Product.find.mockResolvedValue({});
        await controller.getAllProducts(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
    describe('And getAllProducts rejects', () => {
      test('Then status should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Product.find.mockRejectedValue({});
        await controller.getAllProducts(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});
