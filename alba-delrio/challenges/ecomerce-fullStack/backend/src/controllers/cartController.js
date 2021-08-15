/* eslint-disable no-param-reassign */
const Cart = require('../models/cartModel');
const Article = require('../models/articleModel');

async function updateCart({ params: { _id, quantity } }, res, findCart) {
  const article = _id;
  findCart.products.forEach((item) => {
    if (item.article.equals(article)) {
      item.amount = quantity;
    }
  });
  await Article.findByIdAndUpdate(
    _id,
    { $inc: { stock: -quantity } }

  );
  findCart.save();
}

async function createCart(req, res) {
  try {
    const [findCart] = await Cart.find({ user: req.body.user })
      .populate('user')
      .populate('articles,article');

    if (findCart) {
      return updateCart(req, res, findCart);
    }
    const newCart = await Cart.create(req.body);
    return res.send(newCart);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no cart'));
  }
}

async function deleteCart({ params: { _id } }, res) {
  try {
    await Cart.findByIdAndDelete(_id);
    res.send('The cart has been deleted');
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no cart'));
  }
}

module.exports = {
  createCart, updateCart, deleteCart
};
