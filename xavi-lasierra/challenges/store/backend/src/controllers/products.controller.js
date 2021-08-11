const Product = require('../models/product.model');

async function postProduct(req, res) {
  try {

  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  postProduct
};
