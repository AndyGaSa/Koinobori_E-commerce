const Cart = require('../models/cartModel');

async function createOne({ body }, res) {
  try {
    const createdCartItem = await Cart.create(body);
    res.json(createdCartItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate({
        path: 'products.product',
        select: ['name', 'price', 'stock'],
      });

    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params }, res) {
  try {
    const { cartId } = params;
    const findCart = await Cart.findById(cartId)
      .populate('user')
      .populate('products.product');
    res.json(findCart);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { cartId } }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  deleteOneById,
};
