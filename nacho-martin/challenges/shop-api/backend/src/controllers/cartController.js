/* eslint-disable no-underscore-dangle */
const Cart = require('../models/cartModel');

async function createOne({ body }, res) {
  try {
    const { user } = body;
    const cart = Cart.findOne({ userId: user });
    if (cart) {
      const updatedCart = await Cart.findByIdAndUpdate(cart._id,
        { $inc: { amount: body.products[0].amount } },
        { new: true });
    }
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
    const cartToUpdate = await Cart.findById(cartId)
      .populate('products.item');

    const { itemId } = req.body;
    const itemToUpdate = cartToUpdate.products.filter(({ _id }) => _id.toString() === itemId);
    res.json(itemToUpdate);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  createOne,
  getOneById,
  deleteById,
  updateById
};
