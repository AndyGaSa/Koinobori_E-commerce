const debug = require('debug')('storeApi:cartController');
const Cart = require('../models/cartModel');

async function getCarts(req, res) {
  try {
    let allCarts = 0;
    debug(req.query);
    if (Object.keys(req.query).length <= 0) {
      debug('getCarts');
      allCarts = await Cart.find()
        .populate('name')
        .populate('products.product');
    } else {
      debug('getCartByName');
      allCarts = await Cart.find(req.query);
    }
    res.status(200);
    return res.json(allCarts);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting data: ${error}`);
  }
}

async function setCart(req, res) {
  try {
    debug('setCart');
    const newCart = await Cart.create(req.body);
    res.status(201);
    return res.json(newCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while creating an element: ${error}`);
  }
}

async function addProductToCart(req, res) {
  try {
    debug('updateCart');
    const { cartId } = req.params;
    const updatedCart = await Cart.findByIdAndUpdate(cartId, { $push: req.body }, { new: true });
    res.status(200);
    return res.json(updatedCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while updating an element: ${error}`);
  }
}

async function deleteProductFromCart(req, res) {
  try {
    debug('updateCart');
    debug(req.body);
    const { cartId } = req.params;
    const updateObject = { $pull: { products: { _id: req.body } } };
    const updatedCart = await Cart.findByIdAndUpdate(cartId, updateObject, { new: true });
    res.status(200);
    return res.json(updatedCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while updating an element: ${error}`);
  }
}

async function deleteCart(req, res) {
  try {
    debug('deleteCart');
    const deletedCart = await Cart.findByIdAndRemove(req.params.cartId);
    res.status(200);
    return res.json(deletedCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while deleting an element: ${error}`);
  }
}

async function getCartById(req, res) {
  try {
    debug('getCartById');
    const cartById = await Cart.findById(req.params.cartId);
    res.status(200);
    return res.json(cartById);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting an element: ${error}`);
  }
}

module.exports = {
  getCarts,
  setCart,
  addProductToCart,
  deleteProductFromCart,
  deleteCart,
  getCartById
};
