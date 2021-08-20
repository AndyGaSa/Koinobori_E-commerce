const Product = require('../models/productsModel');

const getAllProducts = async ({ query }, res) => {
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(418);
    res.send("Couldn't find any product");
  }
};

const createOneProduct = async ({ body }, res) => {
  try {
    const newProduct = await Product.create(body);
    res.json(newProduct);
  } catch (error) {
    res.status(418);
    res.send("Couldn't create a product");
  }
};

const getOneProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const foundedProduct = await Product.findById(productId);
    res.json(foundedProduct);
  } catch (error) {
    res.status(418);
    res.send("Couldn't create a product");
  }
};

const updateOneProductById = async (req, res) => {
  const { productId } = req.params;
  const newData = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      newData,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(418);
    res.send("Couldn't update a product");
  }
};

const deleteOneProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.json(deletedProduct);
  } catch (error) {
    res.status(418);
    res.send("Couldn't update a product");
  }
};

module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProductById,
  updateOneProductById,
  deleteOneProductById
};
