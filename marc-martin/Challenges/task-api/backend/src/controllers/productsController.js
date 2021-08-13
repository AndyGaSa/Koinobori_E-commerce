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

async function getOneById({ query }, res) {
  try {
    const { productId } = query;
    const findProduct = await Product.findById(productId);
    res.json(findProduct);
    res.sendStatus();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { body } = req;
  const { params: { productId } } = req;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      body,
      { new: true }
    );
    res.json(updatedProduct);
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
