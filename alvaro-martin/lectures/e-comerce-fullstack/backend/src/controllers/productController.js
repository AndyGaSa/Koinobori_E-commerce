const Product = require('../models/productModel');

async function getProducts({ query }, res) {
  const foundProduct = await Product.find(query);

  return res.send(foundProduct);
}

async function postProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201);
    return res.send(newProduct);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}
module.exports = {
  getProducts,
  postProduct,
};
