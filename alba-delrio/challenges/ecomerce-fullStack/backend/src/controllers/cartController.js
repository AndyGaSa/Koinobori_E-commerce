/* eslint-disable no-param-reassign */

const Cart = require('../models/cartModel');
const Article = require('../models/articleModel');

async function createOrUpdateCart({ body }, res) {
  try {
    const findCart = await Cart.findOne({ user: body.user });

    if (findCart) {
      await body.articles.forEach(async (current) => {
        const existingArticle = findCart.articles.find(
          ({ article }) => article.toString() === current.articles
        );
        const isStockAvailable = await Article.findOneAndUpdate(
          {
            _id: current.articles,
            stock: { $gte: current.amount }
          },
          {
            $inc: { stock: -current.amount }
          }
        );
        if (isStockAvailable) {
          if (existingArticle) {
            existingArticle.amount += current.amount;
          } else {
            findCart.articles.push(current);
          }
          await findCart.save();
        }
      });

      res.send(findCart);
    } else {
      const newCart = await Cart.create(body);
      res.json(newCart);
    }
  } catch (error) {
    res.status(500);
    res.send(new Error('Error'));
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
  createOrUpdateCart, deleteCart
};
