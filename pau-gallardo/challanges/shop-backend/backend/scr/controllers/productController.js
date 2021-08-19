const Product = require('../models/productModel');

async function getProducts({ query }, res) {
  try {
    const foundUsers = await Product.find(query);

    res.send(foundUsers);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function postProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200);
    res.send(newProduct);
  } catch (error) {
    res.send(500);
  }
}

module.exports = {
  getProducts,
  postProduct,
};
