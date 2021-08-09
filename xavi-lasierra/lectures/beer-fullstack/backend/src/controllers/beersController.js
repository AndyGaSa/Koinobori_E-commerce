const beersMock = require('../mocks/beersMock');

let maxId = Math.max.apply(this, beersMock.map(({ id }) => +id)) + 1;

function getBeers(req, res) {
  res.send(beersMock);
}

function postBeer(req, res) {
  const newBeer = {
    id: maxId,
    name: req.body.name,
    tagline: 'La mejor'
  };

  beersMock.push(newBeer);
  maxId += 1;
  res.send(beersMock);
}

function getOneBeer(req, res) {
  res.send(beersMock.find(({ id }) => id === +req.params.beerId));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer
};
