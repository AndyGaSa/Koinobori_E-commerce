const Beer = require('../models/beerModel');

async function getBeers({ query }, res) {
  const foundBeers = await Beer.find(query);
  res.send(foundBeers);
}

async function postBeer(req, res) {
  const newBeer = await Beer.create(req.body);

  res.status(201);
  return res.send(newBeer);
}

function getOneBeer({ beer }, res) {
  return res.send(beer);
}

async function deleteOneBeer({ params: { beerId } }, res) {
  Beer.findByIdAndDelete(beerId);

  res.status(204);
  return res.send();
}

async function updateBeer(req, res) {
  const newData = req.body;
  const { beerId } = req.params;

  const updatedBeer = await Beer.findByIdAndUpdate(beerId, newData, { new: true });

  return res.send(updatedBeer);
}

async function findOneBeer(req, res, next) {
  const { beerId } = req.params;
  const beer = await Beer.findById(beerId);

  if (beer) {
    req.beer = beer;
    return next();
  }
  res.status(404);
  return res.send(new Error(`There is no beer with id: ${beerId}`));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateBeer,
  findOneBeer
};
