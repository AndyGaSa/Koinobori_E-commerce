const Beer = require('../models/beerModel');

async function getBeers({ query }, res) {
  try {
    const foundBeers = await Beer.find(query);
    res.json(foundBeers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function postBeer(req, res) {
  try {
    const newBeer = await Beer.create(req.body);

    res.status(201);
    res.json(newBeer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneBeer(req, res, next) {
  const { beerId } = req.params;
  try {
    const beer = await Beer.findById(beerId);

    if (beer) {
      req.beer = beer;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no beer with id ${beerId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getOneBeer({ beer }, res) {
  return res.send(beer);
}

async function putOneBeer(req, res) {
  const dataToUpdate = req.body;
  const { beerId } = req.params;

  try {
    const updatedBeer = await Beer.findByIdAndUpdate(
      beerId,
      dataToUpdate,
      { new: true },
    );

    res.json(updatedBeer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneBeer(req, res) {
  const { beerId } = req.params;

  try {
    await Beer.findByIdAndDelete(beerId);

    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  putOneBeer,
  deleteOneBeer,
  findOneBeer,
};
