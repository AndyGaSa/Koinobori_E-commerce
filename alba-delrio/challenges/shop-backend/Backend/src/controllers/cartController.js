/* eslint-disable no-shadow */
const Cart = require('../models/cartModel');

async function createCart(req, res) {
  const newCart = await Cart.create(req.body);
  return res.send(newCart);
}

async function getCart({ query }, res) {
  try {
    const foundCarts = await Cart.find(query)
      .populate('user')
      .populate('products.product');
    res.json(foundCarts);
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no cart'));
  }
}

async function deleteCart({ query }, res) {
  const { _id } = query;
  await Cart.findByIdAndDelete(_id);
  res.send('The cart has been deleted');
}

async function findCart(req, res, next) {
  const { _id } = req.params;
  const cart = await Cart.findById(_id);
  try {
    req.cart = cart;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no cart'));
  }
}
async function getOneCart({ cart }, res) {
  return res.send(cart);
}
module.exports = {
  createCart, getCart, deleteCart, findCart, getOneCart
};
