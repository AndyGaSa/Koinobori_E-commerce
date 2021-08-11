const Beer = require('../models/beerModels');

const getBeers = async ({ query }, res) => {
  const foundBeers = await Beer.find(query);
  res.send(foundBeers);
};

const getByName = async ({ params: { beerName } }, res) => {
  const foundBeer = await Beer.findOne({ name: beerName });
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
  postBeer,
  putBeer,
  deleteBeer,
};
