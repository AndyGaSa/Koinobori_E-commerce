const Cart = require('../models/cartModel');

async function getCarts({ query }, res) {
  const foundCart = await Cart.find(query);

  return res.send(foundCart);
}

async function postCart(req, res) {
  try {
    const newCart = await Cart.create(req.body);

    res.status(201);
    return res.send(newCart);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}
module.exports = {
  getCarts,
  postCart,
};
