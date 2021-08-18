const Beer = require('../models/beerModels');

const getRandom = async (req, res) => {
  const randomBeer = await Beer.aggregate().sample(1);
  res.send(randomBeer);
};

const getRandomSenAlcohol = async (req, res) => {
  const randomBeer = await Beer.aggregate([
    { $match: { abv: { $lte: 1 } } },
  ]).sample(1);
  res.send(randomBeer);
};

module.exports = {
  getRandom,
  getRandomSenAlcohol,
};
