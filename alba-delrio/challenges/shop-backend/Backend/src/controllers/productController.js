const Product = require('../models/productModel');

async function createProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);
    return res.json(newProduct);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no product'));
  }
}

async function getProducts({ query }, res) {
  try {
    const newProduct = await Product.find(query.body);
    return res.json(newProduct);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no products'));
  }
}

async function getOneById({ params }, res) {
  try {
    const { product } = params;
    const foundProduct = await Product.findById(product);
    return res.json(foundProduct);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no product with this id'));
  }
}

async function updateOneProduct(req, res) {
  const { product } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      product,
      dataToUpdate,
      { new: true }
    );
    return res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function deleteOneProduct(req, res) {
  return res.send('works');
}
module.exports = {
  createProduct, getProducts, updateOneProduct, deleteOneProduct, getOneById
};
