const Product = require('../models/productModel');

async function createProduct(req, res) {
  const newBeer = await Product.create(req.body);

  return res.send(newBeer);
}

function getProduct(req, res) {
  res.send(Product);
}

function getOneById(req, res) {
  return res.send('works');
}

function updateOneProduct(req, res) {
  return res.send('works');
}
function deleteOneProduct(req, res) {
  return res.send('works');
}
module.exports = {
  createProduct, getProduct, updateOneProduct, deleteOneProduct, getOneById
};
