const Beer = require('../models/beerModel');

async function getBeers({ query }, res) {
  const foundBeers = await Beer.find(query);

  return res.send(foundBeers);
}

async function postBeer(req, res) {
  const newBeer = await Beer.create(req.body);

  res.status(201);
  return res.send(newBeer);
}

async function findOneBeer(req, res, next) {
  const { beerId } = req.params;
  const beer = await Beer.findById(beerId);

  if (beer) {
    req.beer = beer;
    next();
  } else {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

function getOneBeer({ beer }, res) {
  return res.send(beer);
}

async function putOneBear(req, res) {
  const dataToUpdate = req.body;
  const { beerId } = req.params;

  const updateBeeer = await Beer.findByIdAndUpdate(
    beerId,
    dataToUpdate,
    { new: true }
  );

  return res.send(updateBeeer);
}

async function deleteBeer(req, res) {
  const { beerid } = req.params;
  Beer.findByIdAndDelete(beerid);

  res.status(204);
  res.send();
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteBeer,
  putOneBear,
  findOneBeer
};
