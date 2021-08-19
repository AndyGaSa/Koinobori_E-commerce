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
    return res.json(newBeer);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function getOneBeer({ beer }, res) {
  return res.send(beer);
}

async function deleteOneBeer({ params: { beerId } }, res) {
  try {
    await Beer.findByIdAndDelete(beerId);

    res.status(204);
    return res.send();
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function updateBeer(req, res) {
  try {
    const newData = req.body;
    const { beerId } = req.params;

    const updatedBeer = await Beer.findByIdAndUpdate(beerId, newData, { new: true });

    return res.json(updatedBeer);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function findOneBeer(req, res, next) {
  try {
    const { beerId } = req.params;
    const beer = await Beer.findById(beerId);

    if (beer) {
      req.beer = beer;
      return next();
    }
    res.status(404);
    return res.send(new Error(`There is no beer with id: ${beerId}`));
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function getRandomBeer({ query }, res) {
  try {
    const randomBeer = await Beer.aggregate().match(query).sample(1);
    return res.json(randomBeer);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function getRandomNonAlcoholicBeer({ query }, res) {
  try {
    const randomBeer = await Beer.aggregate().match({ ...query, abv: { $lte: 5 } }).sample(1);

    return res.json(randomBeer);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateBeer,
  findOneBeer,
  getRandomBeer,
  getRandomNonAlcoholicBeer
};
