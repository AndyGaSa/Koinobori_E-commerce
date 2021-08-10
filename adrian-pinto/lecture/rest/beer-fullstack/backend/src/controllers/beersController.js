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

const getByName = async (req, res) => {
  debug('get By Name');
  res.send();
};

const postBeer = async (req, res) => {
  const newBirra = await Beer.create(req.body);

  return res.send(newBirra);
};

// todo put beer

// todo delete beer

module.exports = {
  getBeers,
  getByName,
  getRandom,
  getRandomSenAlcohol,
  postBeer,
};
