const Beer = require('../models/userModel');

async function getBeers({ query }, res) {
  const foundBeers = await Beer.find(query);

  return res.send(foundBeers);
}

async function postBeer(req, res) {
  try {
    const newBeer = await Beer.create(req.body);

    res.status(201);
    return res.send(newBeer);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
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

async function putOneBeer(req, res) {
  const dataToUpdate = req.body;
  const { beerId } = req.params;

  const updatedBeer = await Beer.findByIdAndUpdate(
    beerId,
    dataToUpdate,
    { new: true },
  );

  return res.send(updatedBeer);
}

async function deleteOneBeer(req, res) {
  const { beerId } = req.params;

  const deletedTodo = await Beer.findByIdAndDelete(beerId);

  res.status(204);
  return res.send(deletedTodo);
}
async function getRandomBeer(req, res) {
  const foundBeer = await Beer.aggregate().sample(1);
  return res.send(foundBeer);
}
async function getRandomNonAlcoBeer(req, res) {
  const foundBeer = await Beer.aggregate().match({ abv: { $lte: 5 } }).sample(1);
  return res.send(foundBeer);
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  putOneBeer,
  deleteOneBeer,
  findOneBeer,
  getRandomBeer,
  getRandomNonAlcoBeer,
};
