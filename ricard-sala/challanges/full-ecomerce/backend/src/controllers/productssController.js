const Product = require('../models/productModel');

async function postProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getAll({ query }, res) {
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getOneById({ params: { productId } }, res) {
  try {
    const foundProduct = await Product.findById(productId);
    res.json(foundProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneById(req, res) {
  const dataToUpdate = req.body;
  const { productId } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      dataToUpdate,
      { new: true },
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  postProduct,
  getAll,
  getOneById,
  updateOneById,
};
