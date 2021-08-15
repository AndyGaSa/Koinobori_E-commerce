const Sneaker = require('../models/sneakerModel');

async function createOne({ body }, res) {
  try {
    const createsSneaker = await Sneaker.create(body);
    res.json(createsSneaker);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getAll({ query }, res) {
  try {
    const products = await Sneaker.find(query);
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
