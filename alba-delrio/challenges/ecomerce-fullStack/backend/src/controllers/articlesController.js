const Article = require('../models/cartModel');

async function createCart(req, res) {
  try {
    const newArticle = await Article.create(req.body);
    return res.send(newArticle);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no cart'));
  }
}

module.exports = {
  createCart
};
