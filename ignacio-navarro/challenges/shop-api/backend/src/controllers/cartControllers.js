const Cart = require('../models/cartModel');

async function getCart({ query }, res) {
  try {
    const foundCart = await Cart.find(query);
    return res.send(foundCart);
  } catch (error) {
    return res.send(error);
  }
}

async function postCart(req, res) {
  const newCart = await Cart.create(req.body);
  return res.send(newCart);
}
async function updateCart(req, res) {
  const dataToUpdate = req.body;
  const { CartId } = req.params;
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      CartId,
      dataToUpdate,
      { new: true },
    );
    return res.send(updatedCart);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = {
  postCart,
  getCart,
  updateCart,
};
