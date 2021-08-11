const debug = require('debug')('beers:beerC');
const Beer = require('../models/beerModels');

const getBeers = async ({ query }, res) => {
  const foundBeers = await Beer.find(query);
  res.send(foundBeers);
};

const getRandom = async (req, res) => {
  const randomBeer = await Beer.aggregate().sample(1);
  res.send(randomBeer);
};

const getRandomSenAlcohol = async (req, res) => {
  const randomBeer = await Beer.aggregate([
    { $match: { abv: { $lte: 5 } } },
  ]).sample(1);
  res.send(randomBeer);
};

const getByName = async ({ params: { beerName } }, res) => {
  const foundBeer = await Beer.findOne({ name: beerName });
  debug(foundBeer);
  res.send(foundBeer);
};

const postBeer = async (req, res) => {
  const newBeer = await Beer.create(req.body);
  return res.send(newBeer);
};

const putBeer = async (req, res) => {
  const updateBeer = await Beer.findOneAndUpdate(req.params.beerName, req.body, {
    new: true,
  });
  res.send(updateBeer);
};

const deleteBeer = async ({ params: { beerName } }, res) => {
  const delBeer = await Beer.findOneAndDelete({ name: beerName });
  res.send(delBeer);
};

module.exports = {
  getBeers,
  getByName,
  getRandom,
  getRandomSenAlcohol,
  postBeer,
  putBeer,
  deleteBeer,
};
