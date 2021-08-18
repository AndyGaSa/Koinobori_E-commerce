const Beer = require('../models/beerModel');
const debug = require('debug')('beersApi:ddbbConfig');

async function getBeers({ query }, res) {
  try {
    const foundBeers = await Beer.find(query);
    return res.send(foundBeers);
  } catch (error) {
    return res.send(error);
  }
}

async function postBeer(req, res) {
  try {
    const newBeer = await Beer.create(req.body);
    res.status(201);
    return res.send(newBeer);
  } catch (error) {
    return res.send(error);
  }
}

async function findOneBeer(req, res, next) {
  const { beerId } = req.params;
  const beer = await Beer.findById(beerId);
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
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
    return res.send(updatedBeer);
  } catch (error) {
    return res.send(error);
  }
}

async function deleteOneBeer(req, res) {
  const { beerId } = req.params;
  try {
    await Beer.findByIdAndDelete(beerId);

    res.status(204);
    res.send();
  } catch (error) {
    res.send(error);
  }
}

async function getRandomBeer({ query }, res) {
  const results = Object.keys(query).length > 0
    ? await Beer.find({ abv: { $lte: query.abv } }) : await Beer.find();
  const random = Math.floor(Math.random() * results.length);
  return res.send(results[random]);
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  putOneBeer,
  deleteOneBeer,
  findOneBeer,
  getRandomBeer,
};
