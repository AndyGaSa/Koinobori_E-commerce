/* eslint-disable no-underscore-dangle */
const debug = require('debug')('shopApi:cartController');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query).populate('user');

    res.send(foundCarts);
  } catch (error) {
    res.status(500);
  }
}

async function updateStock(model, id, req, foundProduct) {
  await Product.findByIdAndUpdate(
    id,
    { stock: foundProduct.stock - req.body.products[0].amount },
    { new: true },
  );
}

function increaseAmount(foundCart, productId, req) {
  foundCart.products.map((product) => {
    if (product.product.equals(productId)) {
      const productObj = product;
      productObj.amount += req.body.products[0].amount;
    }
    return '';
  });
}

async function postCarts(req, res) {
  const productId = req.body.products[0].product;
  try {
    const foundCart = await Cart.findOne({ user: req.body.user });
    const foundProduct = await Product.findById(productId);

    if (foundCart) {
      const inCart = foundCart.products.some((product) => product.product.equals(productId));

      if (inCart) {
        increaseAmount(foundCart, productId, req);
      } else {
        foundCart.products.push(req.body.products[0]);
      }

      await foundCart.save();

      updateStock(Product, productId, req, foundProduct);

      res.send(foundCart);
      res.status(200);
    } else {
      const newCart = await Cart.create(req.body);

      updateStock(Product, productId, req, foundProduct);

      res.send(newCart);
      res.status(200);
    }
  } catch (error) {
    res.send(500);
  }
}

async function deleteOneCart(req, res) {
  const { cartId } = req.params;
  try {
    const deleted = await Cart.findByIdAndDelete(cartId);
    debug(deleted);

    res.status(200);
    res.send(deleted);
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
