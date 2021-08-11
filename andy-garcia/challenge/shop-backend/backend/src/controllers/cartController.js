const cart = require('../models/cartModel');

async function updateCart(req, res) {
  const newBeer = await cart.create(req.body);

  return res.send(newBeer);
}

function getCart(req, res) {
  res.send(cart);
}

function deleteCart({ beer }, res) {
  const { _id } = beer;
  cart.findByIdAndDelete(_id).exec();
  res.send(`La cerveza ${beer.name} ha sido eliminada`);
}
async function findCart(req, res, next) {
  const { beerId } = req.params;
  const beer = await cart.findOne({ id: +beerId }).exec();
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

module.exports = {
  updateCart, getCart, deleteCart, findCart,
};
