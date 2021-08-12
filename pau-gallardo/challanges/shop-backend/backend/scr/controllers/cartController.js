const debug = require('debug')('shopApi');
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

async function postCarts(req, res) {
  const productId = req.body.products[0].product;
  try {
    const foundUsers = await Cart.findOne({ user: req.body.user });
    const foundProduct = await Product.findById(productId);

    if (foundUsers) {
      foundUsers.products.push(req.body.products[0]);
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { stock: foundProduct.stock - foundUsers.products[0].amount },
        { new: true },
      );
      res.send(updatedProduct);
      res.status(200);
    }
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
