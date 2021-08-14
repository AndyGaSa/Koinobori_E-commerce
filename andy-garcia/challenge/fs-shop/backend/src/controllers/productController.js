const Product = require('../models/sitesModel');

async function createProduct(req, res) {
  const newBeer = await Product.create(req.body);

  return res.send(newBeer);
}

async function getProduct(req, res) {
  try {
    const productItems = await Product.find();
    res.json(productItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
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
