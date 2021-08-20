const controller = require('./productsControllers');
const Product = require('../models/productsModel');

jest.mock('../models/productsModel');

describe('Given a getAllProducts function', () => {
  describe('When is triggered', () => {
    const req = { query: {} };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send all products', async () => {
        Product.find.mockResolvedValue({});

        await controller.getAllProducts(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        Product.find.mockRejectedValue({});

        await controller.getAllProducts(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a createOneProduct function', () => {
  describe('When is triggered', () => {
    const req = { query: {} };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send new product', async () => {
        Product.create.mockResolvedValue({});

        await controller.createOneProduct(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        Product.create.mockRejectedValue({});

        await controller.createOneProduct(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getOneProductById function', () => {
  describe('When is triggered', () => {
    const req = { params: { userId: {} } };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send a product by id', async () => {
        Product.findById.mockResolvedValue({});

        await controller.getOneProductById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        Product.findById.mockRejectedValue({});

        await controller.getOneProductById(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateOneProductById function', () => {
  describe('When is triggered', () => {
    const req = { params: { userId: {} }, body: {} };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send an updated product', async () => {
        Product.findByIdAndUpdate.mockResolvedValue({});

        await controller.updateOneProductById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        Product.findByIdAndUpdate.mockRejectedValue({});

        await controller.updateOneProductById(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteOneProductById function', () => {
  describe('When is triggered', () => {
    const req = { params: { userId: {} } };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send an deleted product', async () => {
        Product.findByIdAndDelete.mockResolvedValue({});

        await controller.deleteOneProductById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        Product.findByIdAndDelete.mockRejectedValue({});

        await controller.deleteOneProductById(req, res);

        expect(res.status).toHaveBeenCalledWith(418);
      });
    });
  });
});
