const Product = require('../models/productModel');

const readAllProducts = async ({ query }, res) => { // GET.
  try {
    const products = await Product.find(query);
    res.json(products); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const createOneProduct = async ({ body }, res) => { // POST.
  try {
    const createdProduct = await Product.create(body);
    res.json(createdProduct);
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const searchOneProduct = async (req, res, next) => {
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
    res.send(error); // Send error response.
  }
};

const readOneProduct = ({ product }, res) => res.send(product); // GET.

const updateOneProduct = async (req, res) => { // PUT.
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
    res.send(error); // Send error response.
  }
};

const deleteOneProduct = async ({ params: { productId } }, res) => { // DELETE.
  try {
    await Product.findByIdAndDelete(productId);
    res.status(204); // No Content.
    res.json(); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

module.exports = {
  readAllProducts,
  createOneProduct,
  searchOneProduct,
  readOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
