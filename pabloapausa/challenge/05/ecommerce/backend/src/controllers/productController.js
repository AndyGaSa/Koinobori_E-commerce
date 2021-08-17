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

module.exports = {
  readAllProducts,
  createOneProduct,
};
