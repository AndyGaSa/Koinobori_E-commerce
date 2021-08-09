let beersMock = require('../mocks/beersMock');

let maxId = Math.max.apply(this, beersMock.map(({ id }) => +id)) + 1;

function getBeers(req, res) {
  return req.query.beerName
    ? res.send(beersMock
      .filter(({ name }) => name?.toLowerCase() === req.query.beerName.toLowerCase()))
    : res.send(beersMock);
}

function postBeer(req, res) {
  const newBeer = {
    id: maxId,
    name: req.body.name,
    tagline: 'La mejor'
  };

  beersMock.push(newBeer);
  maxId += 1;
  res.send(newBeer);
}

function getOneBeer(req, res) {
  res.send(beersMock.find(({ id }) => id === +req.params.beerId));
}

function deleteOneBeer(req, res) {
  beersMock = beersMock.filter(({ id }) => id !== +req.params.beerId);
  res.send(beersMock);
}

function updateBeer(req, res) {
  beersMock = beersMock
    .map((beer) => (beer.id === +req.params.beerId ? { ...beer, name: req.body.name } : beer));
  res.send(beersMock);
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateBeer
};
