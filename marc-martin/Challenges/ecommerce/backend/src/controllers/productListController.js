const Product = require('../models/productListModel');

async function getAllProducts({ query }, res) {
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(418);
    res.send(error);
  }
}

async function createOneProduct({ body }, res) {
  try {
    const createdProduct = await Product.create(body);
    res.json(createdProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { productId } }, res) {
  try {
    await Product.findByIdAndDelete(productId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllProducts,
  createOneProduct,
  deleteOneById
};
