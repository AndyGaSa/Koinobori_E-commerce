const Cart = require('../models/cartModel');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query);
    res.json(foundCarts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneCart(req, res, next) {
  const { cartId } = req.params;
  try {
    const cart = await Cart.findById(cartId);

    if (cart) {
      req.cart = cart;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no Cart with id ${cartId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getOneCart({ cart }, res) {
  return res.send(cart);
}

module.exports = {
  getCarts,
  findOneCart,
  getOneCart,
};
