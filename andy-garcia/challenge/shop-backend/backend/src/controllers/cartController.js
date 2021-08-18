/* eslint-disable no-shadow */
const Cart = require('../models/cartModel');

async function createCart(req, res) {
  try {
    const findCart = await Cart.find({ user: req.body.user });
    // const productId = findCart[0].products;
    if (findCart) {
      const newCart = await Cart.create(req.body);
      return res.send(newCart);
    }
    findCart[0].products[0].amount = req.body.products[0].amount;
    return res.send(findCart);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function getCart({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate({
        path: 'products.product',
        select: ['name', 'price', 'stock'],
      });

    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function deleteCart({ beer }, res) {
  const { _id } = beer;
  Cart.findByIdAndDelete(_id).exec();
  res.send(`La cerveza ${beer.name} ha sido eliminada`);
}
async function findCart(req, res, next) {
  const { beerId } = req.params;
  const beer = await Cart.findOne({ id: +beerId }).exec();
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

module.exports = {
  createCart, getCart, deleteCart, findCart,
};
