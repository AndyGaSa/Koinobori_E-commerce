const Beer = require('../models/beerModel');

async function getBeers({ query }, res) {
  try {
    const foundBeers = await Beer.find(query);
    return res.send(foundBeers);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There are no beers'));
  }
}

async function postBeer(req, res) {
  try {
    const newBeer = await Beer.create(req.body);

    return res.send(newBeer);
  } catch (error) {
    res.status(404);
    return res.send(new Error('The beer has not been created'));
  }
}
async function findOneBeer(req, res, next) {
  const { beerId } = req.params;

  try {
    const beer = await Beer.findById({ id: +beerId });
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

function getOneBeer({ beer }, res) {
  return res.send(beer);
}

async function updateOneBeer(req, res) {
  const dataToUpdate = req.body;
  const { beerId } = req.params;
  try {
    const updatedBeer = await Beer.findByIdAndUpdate(
      beerId,
      dataToUpdate,
      { new: true }
    );
    return res.json(updatedBeer);
  } catch (error) {
    return res.send(error);
  }
}
async function deleteOneBeer({ beer }, res) {
  const { _id } = beer;

  await Beer.findByIdAndDelete({ _id });
  return res.send(`The beer ${beer.name} has been deleted`);
}

async function findRandomBeer(req, res) {
  const foundBeer = await Beer.aggregate().sample(1);
  return res.send(foundBeer);
}

async function findRandomNonAlcoholicBeer(req, res) {
  const foundBeer = await Beer.aggregate([{ $match: { abv: { $lte: 8 } } }]);
  return res.send(foundBeer);
}

module.exports = {
  getBeers,
  postBeer,
  findOneBeer,
  getOneBeer,
  updateOneBeer,
  deleteOneBeer,
  findRandomBeer,
  findRandomNonAlcoholicBeer
};
