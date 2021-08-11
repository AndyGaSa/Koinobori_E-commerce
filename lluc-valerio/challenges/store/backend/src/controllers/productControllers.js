const debug = require('debug')('storeApi:productController');
const Product = require('../models/productModel');

async function getProducts(req, res) {
  try {
    let allProducts = 0;
    if (!req.query) {
      debug('getProducts');
      allProducts = await Product.find();
    } else {
      debug('getProductByName');
      allProducts = await Product.find(req.query);
    }
    res.status(200);
    return res.json(allProducts);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting data: ${error}`);
  }
}

async function setProduct(req, res) {
  try {
    debug('setProduct');
    const newProduct = await Product.create(req.body);
    res.status(201);
    return res.json(newProduct);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while creating an element: ${error}`);
  }
}

async function updateProduct(req, res) {
  try {
    debug('updateProduct');
    const { productId } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    res.status(200);
    return res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while updating an element: ${error}`);
  }
}

async function deleteProduct(req, res) {
  try {
    debug('deleteProduct');
    const deletedProduct = await Product.findByIdAndRemove(req.params.productId);
    res.status(200);
    return res.json(deletedProduct);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while deleting an element: ${error}`);
  }
}

async function getProductById(req, res) {
  try {
    debug('getProductById');
    const productById = await Product.findById(req.params.productId);
    res.status(200);
    return res.json(productById);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting an element: ${error}`);
  }
}

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
  getProductById
};
