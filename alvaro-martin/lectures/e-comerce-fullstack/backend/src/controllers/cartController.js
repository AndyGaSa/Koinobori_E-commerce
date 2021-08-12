const Cart = require('../models/cartModel');

async function getCarts({ query }, res) {
  const foundCart = await Cart.find(query).populate('users.user').populate('products.product');

  return res.json(foundCart);
}

async function postCart(req, res) {
  try {
    const newCart = await Cart.create(req.body);

    res.status(201);
    return res.json(newCart);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}
module.exports = {
  getCarts,
  postCart,
};
