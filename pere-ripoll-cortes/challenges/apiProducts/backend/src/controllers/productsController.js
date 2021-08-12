const Products = require('../models/productsModel');

const postProduct = async ({ body }, res) => {
  try {
    const newProduct = await products.create(body);
    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

async function getAll({ query }, res) {
  try {
    const products = await Products.find(query)
      .populate();
    res.send(products);
  } catch (error) {
    res.status(500);
    res.send(new Error('Can not get data'));
  }
}

module.exports = {
  postProduct,
  getAll,
};
