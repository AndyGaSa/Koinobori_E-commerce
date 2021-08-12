const Product = require('../models/product.model');

async function getProducts({ query }, res) {
  try {
    const foundProducts = await Product.find(query);

    return res.json(foundProducts);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function postProduct({ body }, res) {
  try {
    const newProduct = await Product.create(body);

    res.status(201);
    return res.json(newProduct);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function findOneProductById(req, res, next) {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (product) {
      req.product = product;
      return next();
    }
    res.status(404);
    return res.send(new Error(`There is no beer with id ${productId}`));
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function getOneProductById({ product }, res) {
  res.json(product);
}

function updateOneProductById(req, res) {
  res.send('a');
}

function deleteOneProductById(req, res) {
  res.send('a');
}

module.exports = {
  getProducts,
  postProduct,
  findOneProductById,
  getOneProductById,
  updateOneProductById,
  deleteOneProductById
};
