const Cart = require('../models/cartModel');

async function getCart({ query }, res) {
  try {
    const foundCart = await Cart.find(query);
    return res.send(foundCarts);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There are no beers'));
  }
}

async function updateCart(req, res) {
  try {
    const newCart = await Cart.create(req.body);

    return res.send(newCart);
  } catch (error) {
    res.status(404);
    return res.send(new Error('The beer has not been created'));
  }
}
async function findOneCart(req, res, next) {
  const { beerId } = req.params;

  try {
    const beer = await Cart.findById({ id: +beerId });
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

async function deleteCart({ beer }, res) {
  const { _id } = beer;

  await Cart.findByIdAndDelete({ _id });
  return res.send(`The beer ${beer.name} has been deleted`);
}

module.exports = {
  getCart,
  updateCart,
  findOneCart,
  deleteCart

};
