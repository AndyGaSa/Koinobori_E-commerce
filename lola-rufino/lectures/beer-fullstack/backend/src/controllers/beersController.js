const Beer = require('../../models/beerModel');

async function getBeers({ query }, res) {
  try {
    const foundBeers = await Beer.find(query);
    res.json(foundBeers);
  } catch (error) {
    res.status(418);
    res.send(new Error('There was an error. Beers not found.'));
  }
}

async function postBeer(req, res) {
  try {
    const newBeer = await Beer.create(req.body);
    res.status(201);
    return res.json(newBeer);
  } catch (error) {
    res.status(418);
    return res.send(new Error('There was an error. Beer not created'));
  }
}

function getOneBeer({ beer }, res) {
  return res.send(beer);
}

async function deleteOneBeer(req, res) {
  const { beerId } = req.params;
  await Beer.findByIdAndDelete(beerId);
  try {
    res.status(204);
    return res.send();
  } catch (error) {
    res.status(418);
    return res.send(new Error('There was an error. Beer not created'));
  }
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
    res.send(updatedBeer);
  } catch (error) {
    res.status(418);
    res.send(new Error('There was an error. Beer not updated'));
  }
}

async function filterOneBeer(req, res, next) {
  const { beerId } = req.params;
  const beer = await Beer.findByIdAndDelete(beerId);
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(418);
    res.send(new Error('There was an error. Beer not filtered'));
  }
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateOneBeer,
  filterOneBeer
};
