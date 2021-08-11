const debug = require('debug')('beerApi');
const Beer = require('../models/beerModel');

const getBeers = async ({ query }, res) => {
  const foundBeers = await Beer.find(query);
  debug(Beer);
  return res.send(foundBeers);
};

const postBeer = async ({ body }, res) => {
  const newBeer = await Beer.create(body);

  res.status(201);
  return res.send(newBeer);
};

const findOneBeer = async (req, res, next) => {
  const { beerId } = req.params;
  const beer = await Beer.findById(beerId);
  if (beer) {
    res.send(beer);
    next();
  } else {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
};

const putOneBeer = async (req, res) => {
  const dataToUpdate = req.body;
  const { beerId } = req.params;

  const updateBeer = await Beer.findByIdAndUpdate(
    beerId,
    debug(beerId),
    dataToUpdate,
    debug(dataToUpdate),
    { new: true },
  );
  debug(updateBeer);
  return res.send(updateBeer);
};

const deleteOneBeer = async (req, res) => {
  const { beerId } = req.params;
  const del = await Beer.findByIdAndDelete(beerId);
  res.status(204);
  res.send(del);
};

module.exports = {
  getBeers,
  postBeer,
  findOneBeer,
  putOneBeer,
  deleteOneBeer,
};
