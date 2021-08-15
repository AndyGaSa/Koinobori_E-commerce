const Product = require('../models/productModel');

async function createOneProduct({ body }, res) {
  try {
    const createdProduct = await Product.create(body);
    res.send(createdProduct);
    res.status(200);
  } catch (error) {
    res.send(500);
  }
}

module.exports = {
  createOneProduct,
};
