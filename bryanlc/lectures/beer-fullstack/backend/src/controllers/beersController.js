const beersMock = require('../mocks/beersMock');

function getBeers(req, res) {
  res.send(beersMock);
}

function postBeer(req, res) {
  debugger;
  const { name } = req.body;
  const newBeer = {
    id: Math.random(),
    name
  };

  beersMock.push(newBeer);

  res.send(newBeer);
}

function getOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

function deleteBeer(req, res) {
  const { beerid } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerid));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteBeer
};
