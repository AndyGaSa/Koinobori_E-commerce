const Product = require('../models/productModel');

async function postProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getAll({ query }, res) {
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getOneById(req, res) {
  try {
    res.send('getOneById works');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneById(req, res) {
  try {
    res.send('updateOneById works');
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
  postProduct,
  getAll,
  getOneById,
  deleteOneById,
  updateOneById,
};
