const ProductList = require('../modules/productListModel');

const createOne = async (req, res) => {
  try {
    const createProduct = await ProductList.create(req.body);
    res.json(createProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const productsList = await ProductList.find({});
    res.json(productsList);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createOne,
  getAllProducts,
};
