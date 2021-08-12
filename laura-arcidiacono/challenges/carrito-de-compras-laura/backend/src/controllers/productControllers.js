const Product = require('../models/productModel');

async function getAll({ query }, res) {
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const createdProduct = await Product.create(body);
    res.json(createdProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById(req, res, next) {
  const { productId } = req.params;
  try {
    const product = await Product.findById({ id: +productId });
    req.product = product;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no product with id ${productId}`));
  }
}

async function updateOneById(req, res) {
  try {
    res.send();
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
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById
};
