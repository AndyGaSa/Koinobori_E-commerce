const Products = require('../models/product');

async function getProducts({ query }, res) {
  const foundProducts = await Products.find(query);

  return res.send(foundProducts);
}

async function createProducts({ body }, res) {
  try {
    const newProducts = await Products.create(body);
    res.send(newProducts);
  } catch (error) {
    res.status(501);
  }
}

async function putProduct(req, res) {
  const dataToUpdate = req.body;
  const { productId } = req.params;
  const updatedProduct = await Products.findByIdAndUpdate(
    productId,
    dataToUpdate,
    { new: true }
  );
  return res.send(updatedProduct);
}

async function deleteProduct(req, res) {
  const { productId } = req.params;
  const borrar = await Products.findByIdAndDelete(productId);
  res.status(204);
  return res.send(borrar);
}

module.exports = {
  getProducts,
  createProducts,
  putProduct,
  deleteProduct
};
