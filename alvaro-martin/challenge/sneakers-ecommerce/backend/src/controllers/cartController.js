const Cart = require('../models/cartModel');
// const Sneakers = require('../models/sneakerModel');

async function createOne({ body }, res) {
  try {
    const createsCart = await Cart.create(body);
    res.json(createsCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getAll({ query }, res) {
  try {
    const products = await Cart.find(query).populate('sneakers.sneaker');
    res.json(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  createOne,
  getAll,
};
