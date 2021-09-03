const Cart = require('../modules/cartModel');

const createOneCart = async ({ body }, res) => {
  try {
    const createCart = await Cart.create(body);
    res.json(createCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createOneCart,
};
