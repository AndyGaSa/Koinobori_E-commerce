const Product = require('../models/productModel');

async function getAll({ query }, res) {
  try {
    const getAllProducts = await Product.find(query);
    res.json(getAllProducts);
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

async function getById({ query }, res) {
  const { productId } = query;
  try {
    const foundProduct = await Product.findById(productId);
    res.json(foundProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { productId } = req.query;
  const dataToUpdate = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      dataToUpdate,
      { new: true }
    );
    return res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOneById(req, res) {
  const { productId } = req.query;
  try {
    await Product.findByIdAndDelete(productId);
    res.json('The product has been deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getById,
  updateOneById,
  deleteOneById
};
