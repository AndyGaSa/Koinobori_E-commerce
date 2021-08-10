const BeersCollection = require('../../models/beerModel');

async function postBeer(req, res) {
  const newBeer = await BeersCollection.create(req.body);

  return res.send(newBeer);
}

function filterBeers(req, res) {
  const { beerName } = req.query;
  res.send(BeersCollection.filter(({ name }) => name.toLowerCase() === beerName.toLowerCase()));
}

function getBeers(req, res) {
  const { beerName } = req.query;
  return beerName === undefined ? res.send(BeersCollection) : filterBeers(req, res);
}

function deleteOneBeer({ beer }, res) {
  const { _id } = beer;
  BeersCollection.findByIdAndDelete(_id).exec();
  res.send(`La cerveza ${beer.name} ha sido eliminada`);
}
function updateOneBeer(req, res) {
  const { beer } = req;
  const nameToChange = req.body.name;
  BeersCollection.updateOne({ name: beer.name }, { name: nameToChange }).exec();
  res.send('Se ha actualizado');
}
async function findOneBeer(req, res, next) {
  const { beerId } = req.params;
  const beer = await BeersCollection.findOne({ id: +beerId }).exec();
  try {
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
async function findRandomNonAlcoholBeer(req, res) {
  try {
    const nonAlcholic = await BeersCollection.find({ abv: { $lte: 10 } }).exec();
    const count = await nonAlcholic.count();
    const rand = Math.floor(Math.random() * count);
    const randomDoc = await nonAlcholic.findOne(rand);
    return res.send(randomDoc);
  } catch (error) {
    res.status(404);
    return res.send(new Error('Errrrroooooor'));
  }
}
async function findRandomBeer(req, res) {
  const count = await BeersCollection.count();
  const rand = Math.floor(Math.random() * count);
  const randomDoc = await BeersCollection.findOne().skip(rand);
  return res.send(randomDoc);
}
module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateOneBeer,
  findOneBeer,
  findRandomNonAlcoholBeer,
  findRandomBeer,
};
