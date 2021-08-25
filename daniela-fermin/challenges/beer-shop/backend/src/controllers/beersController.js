const Beer = require('../models/beerModel');

async function getAllBeers({ query }, res) {
  try {
    const products = await Beer.find(query);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOneBeer({ body }, res) {
  try {
    const createdProduct = await Beer.create(body);
    res.json(createdProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneBeerById(req, res) {
  try {
    res.send('getOneById works');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneBeerById(req, res) {
  const beerToUpdate = req.body;
  const { beerId } = req.params;

  try {
    const updatedBeer = await Beer.findByIdAndUpdate(
      beerId,
      beerToUpdate,
      { new: true }
    );

    res.json(updatedBeer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneBeerById({ params: { productId } }, res) {
  try {
    await Beer.findByIdAndDelete(productId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllBeers,
  createOneBeer,
  getOneBeerById,
  updateOneBeerById,
  deleteOneBeerById
};
