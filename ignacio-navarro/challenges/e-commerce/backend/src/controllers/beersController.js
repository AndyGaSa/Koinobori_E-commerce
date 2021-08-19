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

module.exports = {
  getBeers,
  findOneBeer,
  getOneBeer,
};
