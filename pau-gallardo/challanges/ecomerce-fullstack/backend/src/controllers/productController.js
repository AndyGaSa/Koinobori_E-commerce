const Product = require('../models/productModel');

async function createOneProduct({ body }, res) {
  try {
    const createdProduct = await Product.create(body);
    res.send(createdProduct);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function getAllProducts(req, res) {
  try {
    const foundProducts = await Product.find();
    res.json(foundProducts);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

module.exports = {
  createOneProduct,
  getAllProducts,
};
