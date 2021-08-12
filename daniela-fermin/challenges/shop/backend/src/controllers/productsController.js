const Product = require('../models/productModel');

const postProduct = async ({ body }, res) => {
  try {
    const newProduct = await Product.create(body);
    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getProducts = async ({ query }, res) => {
  try {
    const foundProducts = await Product.find(query);
    res.status(201);
    res.json(foundProducts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const putOneProduct = async (req, res) => {
  const ProductToUpdate = req.body;
  const { productId } = req.params;

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      ProductToUpdate,
      { new: true }
    );

    res.json(updateProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteOneProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const findOneProduct = async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  try {
    req.product = product;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no todo product with id ${productId}`));
  }
};

const getOneProduct = ({ product }, res) => res.send(product);

module.exports = {
  postProduct,
  getProducts,
  putOneProduct,
  deleteOneProduct,
  findOneProduct,
  getOneProduct
};
