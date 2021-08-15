const Cart = require('../models/cart.model');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query);
    res.json(foundCarts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createCart({ body }, res) {
  try {
    const newProduct = await Cart.create(body);
    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneCart({ params: { userId } }, res) {
  try {
    let foundCart = await Cart.findOne({ user: userId })
      .populate('products.productInformation');

    if (!foundCart) {
      foundCart = await Cart.create({ user: userId })
        .populate('products.productInformation');
    }
    res.json(foundCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getCarts,
  createCart,
  getOneCart
};
