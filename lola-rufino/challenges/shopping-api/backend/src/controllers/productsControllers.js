const debug = require('debug')('tasks:controller');
const Products = require('../models/productsModel');

const getProducts = async ({ query }, res) => {
  const allProducts = await Products.find(query);
  res.send(allProducts);
};

const postProducts = async (req, res) => {
  debug(req.body);
  const newProduct = await Products.create(req.body);
  res.send(newProduct);
};

const deleteProduct = async ({ params: { productId } }, res) => {
  const deletedProduct = await Products.findByIdAndDelete(productId);
  res.send(deletedProduct);
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { body } = req;
  const updatedProduct = await Products.findByIdAndUpdate(productId, body, { new: true });
  res.send(updatedProduct);
};

module.exports = {
  getProducts,
  postProducts,
  deleteProduct,
  updateProduct
};
