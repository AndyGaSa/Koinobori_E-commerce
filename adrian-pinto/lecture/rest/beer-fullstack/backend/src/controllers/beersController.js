const debug = require('debug')('beers:controllers');
const beersMock = require('../beers.json');
const Beer = require('../models/beerModels');

const getBeers = async ({ query }, res) => {
  const foundBeers = await Beer.find(query);

  res.send(foundBeers);
};

const postBeer = async (req, res) => {
  const newBirra = await Beer.create(req.body);

  return res.send(newBirra);
};

const getOneBeer = (req, res) => res.send(beersMock.find((beer) => beer.id === +req.params.beerId));

const putOneBeer = async (req, res) => {
  const dataToUpdate = req.body;
  const { beerId } = req.params;

  const updateBeer = await Beer.findByIdAndUpdate(
    beerId,
    dataToUpdate,
    { new: true },
  );

  res.send(updateBeer);
};

const delOneBeer = async (req, res) => {
  Beer.findByIdAndDelete(req.params.beerId);

  res.status(204);
  res.send();
};

const findABeer = async (req, res, next) => {
  const { beerId } = req.params;
  const foundBeer = await Beer.findById(beerId);
  if (foundBeer) {
    req.beer = foundBeer;
    next();
  }
  return res.send('Not found');
};

module.exports = {
  findABeer,
  getBeers,
  postBeer,
  getOneBeer,
  putOneBeer,
  delOneBeer,
};
