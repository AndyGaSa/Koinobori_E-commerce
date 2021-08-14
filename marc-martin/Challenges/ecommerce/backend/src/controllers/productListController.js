const Product = require('../models/productListModel');

async function getAllProducts({ query }, res) {
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(418);
    res.send(error);
  }
}

module.exports = {
  getAllProducts
};
