const Products = require('../models/productModel');

const getProducts = async ({ query }, res) => {
  try {
    const allProducts = await Products.find(query);
    res.send(allProducts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const postProducts = async ({ body }, res) => {
  try {
    const newProduct = await Products.create(body);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getProduct = async ({ params: { productId } }, res) => {
  try {
    const newProduct = await Products.findById(productId);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteProduct = async ({ params: { productId } }, res) => {
  try {
    const deletedProduct = await Products.findByIdAndDelete(productId);
    res.status(204);
    res.send(deletedProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateProduct = async ({ params: { productId }, body }, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(productId, body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  getProducts,
  postProducts,
  getProduct,
  deleteProduct,
  updateProduct
};
