/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

async function updateCart({ params: { _id, quantity } }, res, findCart) {
  const productId = _id;
  findCart.products.forEach((item) => {
    if (item.product.equals(productId)) {
      item.amount = quantity;
    }
  });
  await Product.findByIdAndUpdate(
    _id,
    { $inc: { stock: -quantity } }

  );
  findCart.save();
}

async function createCart(req, res) {
  try {
    const [findCart] = await Cart.find({ user: req.body.user });

    if (findCart) {
      updateCart(req, res, findCart);
      return res.send('estoy en el if');
    }
    const newCart = await Cart.create(req.body);
    return res.send(newCart);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no cart'));
  }
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

async function deleteCart({ cart }, res) {
  try {
    const { _id } = cart;
    await Cart.findByIdAndDelete(_id);
    res.send('The cart has been deleted');
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no cart'));
  }
}

async function findCart(req, res, next) {
  try {
    const { _id } = req.params;
    const cart = await Cart.findById(_id);
    req.cart = cart;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no cart'));
  }
}
function getOneCart({ cart }, res) {
  return res.send(cart);
}

module.exports = {
  createCart, getCart, deleteCart, findCart, getOneCart
};
