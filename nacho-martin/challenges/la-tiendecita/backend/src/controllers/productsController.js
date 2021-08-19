const Product = require('../models/productsModel');

async function getAll({ query }, res) {
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newProduct = await Product.create(body);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne
};
