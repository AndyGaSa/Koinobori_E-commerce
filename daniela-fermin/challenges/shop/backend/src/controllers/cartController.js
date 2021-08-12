const Cart = require('../models/cartModel');

async function getAll({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate('products.product');
    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const createdCartItem = await Cart.create(body);
    res.json(createdCartItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneCart(req, res) {
  try {
    const createdCartItem = await Cart.create();
    res.json(createdCartItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneCartById(req, res) {
  try {
    res.json('getOneCartById works');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: cartId }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.json(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  getAll,
  findOneCart,
  createOne,
  getOneCartById,
  deleteOneById

};
