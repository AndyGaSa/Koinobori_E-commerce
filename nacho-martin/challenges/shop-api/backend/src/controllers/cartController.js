/* eslint-disable no-unused-vars */
const Cart = require('../models/cartModel');
const Item = require('../models/itemsModel');

async function createOne({ body }, res) {
  try {
    const newCart = await Cart.create(body);
    res.json(newCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { cartId } }, res) {
  try {
    const cartItems = await Cart.findById(cartId)
      .populate('userId')
      .populate('products.item');
    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteById({ params: cartId }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateById(req, res) {
  try {
    const { cartId } = req.params;
    const cartToUpdate = await Cart.findById(cartId);
    const { itemId } = req.body;
    const productToUpdate = await Item.findByIdAndUpdate(itemId);
    res.json(cartToUpdate);
  } catch (error) {
    res.send(error);
  }
  res.json();
}

module.exports = {
  createOne,
  getOneById,
  deleteById,
  updateById
};
