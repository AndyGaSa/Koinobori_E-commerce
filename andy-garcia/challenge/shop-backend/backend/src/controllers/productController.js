const Product = require('../models/productModel');

async function createProduct(req, res) {
  const newBeer = await Product.create(req.body);

  return res.send(newBeer);
}

function getProduct(req, res) {
  res.send(Product);
}

function deleteProduct({ beer }, res) {
  const { _id } = beer;
  Product.findByIdAndDelete(_id).exec();
  res.send(`La cerveza ${beer.name} ha sido eliminada`);
}
async function findProduct(req, res, next) {
  const { beerId } = req.params;
  const beer = await Product.findOne({ id: +beerId }).exec();
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

module.exports = {
  createProduct, getProduct, deleteProduct, findProduct,
};
