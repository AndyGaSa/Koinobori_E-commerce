const Product = require('../models/productModel');

const readAllProducts = async ({ query }, res) => {
  try {
    const products = await Product.find(query);
    res.json(products); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error);
  }
};

const searchProduct = async (req, res, next) => {
  const { params: { productId } } = req;
  try {
    const product = await Product.findById(productId);
    if (product) {
      req.product = product; // Create 'product' property.
      next(); // To GET, PUT or DELETE methods.
    } else {
      res.status(404); // Not Found.
      res.send(new Error('Couldn\'t find product'));
    }
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error);
  }
};

const readOneProduct = ({ product }, res) => res.send(product);

const updateOneProduct = async (req, res) => {
  const [{ product }, { params: { productId } }] = req;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      product,
      { new: true },
    );
    res.json(updatedProduct); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error);
  }
};

const deleteOneProduct = async ({ params: { productId } }, res) => {
  try {
    await Product.findByIdAndDelete(productId);
    res.status(204); // No Content.
    res.json(); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error);
  }
};

module.exports = {
  readAllProducts,
  searchProduct,
  readOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
