const Cart = require('../models/cart.model');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query).populate('user').populate({
      path: 'products',
      populate: { path: 'product' }
    });

    return res.json(foundCarts);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function postCart({ body }, res) {
  try {
    const newCart = await Cart.create(body);

    res.status(201);
    return res.json(newCart);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getCarts,
  postCart
};
