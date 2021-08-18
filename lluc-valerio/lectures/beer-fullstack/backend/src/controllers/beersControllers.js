const beers = require('../mocks/beersMock');

function getBeers(req, res) {
  if (!req.query.beerName) {
    res.send(beers);
  } else {
    const param = req.query.beerName;
    res.send(beers.filter((beer) => beer.name.toUpperCase().includes(param.toUpperCase())));
  }
}

function getOneBeer(req, res) {
  res.send(beers.find((beer) => +beer.id === +req.params.beerId));
}

function getNextId() {
  const biggestId = beers.reduce((acc, cv) => (acc > cv.id ? acc : cv.id));
  return +biggestId + 1;
}

function setBeer(req, res) {
  const newBeer = {
    name: req.body.name,
    id: getNextId()
  };
  beers.push(newBeer);
  res.send(newBeer);
}

function updateBeer(req, res) {
  const beerToUpdate = beers?.find((beer) => +beer.id === +req.params.beerId);
  beerToUpdate.name = req.body.name;
  res.send(beerToUpdate);
}

function deleteBeer(req, res) {
  const indexToDelete = beers?.findIndex((beer) => +beer.id === +req.params.beerId);
  beers?.splice(indexToDelete, 1);
  res.send({});
}

module.exports = {
  getBeers,
  getOneBeer,
  setBeer,
  updateBeer,
  deleteBeer
};
