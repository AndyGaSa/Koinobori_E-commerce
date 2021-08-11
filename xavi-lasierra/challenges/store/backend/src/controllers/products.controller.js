const Product = require('../models/product.model');

async function getProducts({ query }, res) {
  try {
    const foundProducts = await Product.find(query);

    return res.json(foundProducts);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function postProduct({ body }, res) {
  try {
    const newProduct = await Product.create(body);

    res.status(201);
    return res.json(newProduct);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getProducts,
  postProduct
};
