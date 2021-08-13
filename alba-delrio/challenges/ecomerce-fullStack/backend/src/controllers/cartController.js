const Cart = require('../models/cartModel');

async function createCart(req, res) {
  try {
    const newCart = await Cart.create(req.body);
    return res.send(newCart);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no cart'));
  }
}

module.exports = {
  createCart
};
