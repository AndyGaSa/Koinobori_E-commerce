const { createOne, getAll } = require('./cartController');

const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

jest.mock('../models/cartModel');
jest.mock('../models/productModel');

test('createOne should call res.json', async () => {
  const req = {
    body: {
      user: {},
      products: [{
        product: '123123',
        amount: 12,
      }],
    },
  };

  const res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
  };

  Cart.findOne.mockResolvedValue({
    products: [
      {
        product: '123123',
        amount: 12,
      },
    ],
    save: jest.fn(),
  });
  Cart.create.mockRejectedValue({});
  Product.findOneAndUpdate.mockResolvedValue(true);

  await createOne(req, res);

  expect(res.json).toHaveBeenCalled();
});

test('getAll should call res.json', async () => {
  const req = {
    query: null,
  };

  const res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
  };

  Cart.find.mockReturnValue({
    populate: jest.fn().mockReturnValue({
      populate: jest.fn().mockResolvedValue([]),
    }),
  });

  await getAll(req, res);

  expect(res.json).toHaveBeenCalled();
});
