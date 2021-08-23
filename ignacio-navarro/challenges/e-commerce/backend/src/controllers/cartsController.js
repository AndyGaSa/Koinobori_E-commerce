const debug = require('debug')('dev');
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
  const { userId } = req.params;
  try {
    const cart = await Cart.find(userId);

    if (cart) {
      req.cart = cart;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no Cart with id ${userId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function createCart(req, res) {
  debug(req.body);
  const { userId } = req.params;
  const thereIsCart = await Cart.find({ user: userId });
  const body = {
    user: userId,
    products: [],
  };
  try {
    if (!thereIsCart.length) {
      const newCart = await Cart.create(body);
      debug(newCart);
      res.json(newCart);
    } else {
      res.json(thereIsCart[0]);
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
  createCart,
};
