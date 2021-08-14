const Product = require('../models/product.model');

async function createProduct({ body }, res) {
  try {
    const newProduct = await Product.create(body);
    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createProduct
};
