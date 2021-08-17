const Cart = require('../models/cartModel');
const User = require('../models/userModel');
const Product = require('../models/productModel');

async function createCart(req, res) {
  const newCart = await Cart.create(req.body);
  return res.send(newCart);
}

function getCart(req, res) {
  Cart.find({}, (err, carts) => {
    User.populate(carts, { path: 'user' }, (err, carts) => {
      Product.populate(carts, { path: 'products.product' }, (err, carts) => {
        res.status(200).send(carts);
      });
    });
  });
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
