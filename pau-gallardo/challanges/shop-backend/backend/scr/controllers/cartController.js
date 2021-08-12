const debug = require('debug')('shopApi');
const Cart = require('../models/cartModel');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query).populate('user');

    res.send(foundCarts);
  } catch (error) {
    res.status(500);
  }
}

async function postCarts(req, res) {
  try {
    const findUsers = await Cart.find({ user: req.body.user });
    res.send(findUsers);
    res.status(200);
  } catch (error) {
    res.send(500);
  }
}

async function deleteOneCart(req, res) {
  const { cardId } = req.params;

  getCarts.findByIdAndDelete(cardId);
  try {
    await Cart.findByIdAndDelete(cardId);

    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getCarts,
  postCarts,
  deleteOneCart,
};
