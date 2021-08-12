const Cart = require('../models/cartModel');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query).populate('user');

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

async function deleteOneCart(req, res) {
  const { cardId } = req.params;

  getCarts.findByIdAndDelete(cardId);
  try {
    await Cart.findByIdAndDelete(cardId);

    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getCarts,
  postCarts,
  deleteOneCart,
};
