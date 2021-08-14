const debug = require('debug')('store:controller');
const Product = require('../models/productModel');

const getStore = async ({ query }, res) => {
  const allStore = await Product.find(query);
  res.send(allStore);
};

const postStore = async (req, res) => {
  debug(req.body);
  const newStore = await Product.create(req.body);
  res.send(newStore);
};

const deleteById = async ({ params: { storeId } }, res) => {
  const deletedStore = await Product.findByIdAndDelete(storeId);
  res.send(deletedStore);
};

const putById = async (req, res) => {
  const { storeId } = req.params;
  const { body } = req;
  debug(typeof storeId);
  debug(body);
  const updatedStore = await Product.findByIdAndUpdate(storeId, body, { new: true });
  debug(updatedStore);
  res.send(updatedStore);
};

module.exports = {
  getStore,
  postStore,
  deleteById,
  putById
};
