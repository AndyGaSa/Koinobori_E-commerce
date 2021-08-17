// const products = require('../mocks/products');
const productController = require('./productsController');

describe('Given a product controller that have a getAll method', () => {
  describe('When getAll is called', () => {
    describe('And there are products in the database', () => {
      describe('And there is no query', () => {
        test('Then it should return all the products from the database', () => {
          const Product = {
            find: jest.fn(),
            create: jest.fn()
          };
          productController.getAll();

          expect(Product.find()).toHaveBeenCalled();
        });
      });
    });
  });
});
