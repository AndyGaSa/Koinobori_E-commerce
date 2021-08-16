const Product = require('../models/product.model');

async function getAllProducts({ query }, res) {
  try {
    const foundProducts = await Product.find(query);
    res.json(foundProducts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
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

async function getRandomProduct({ query }, res) {
  try {
    const randomProduct = await Product.aggregate().match(query).sample(1);
    return res.json(randomProduct);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  getRandomProduct
};
