const Cart = require('../models/cartModel');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query);

    res.send(foundCarts);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function postCarts(req, res) {
  try {
    const newCart = await Cart.create(req.body);

    res.status(200);
    res.send(newCart);
  } catch (error) {
    res.send(500);
  }
}

module.exports = {
  getCarts,
  postCarts,
};
