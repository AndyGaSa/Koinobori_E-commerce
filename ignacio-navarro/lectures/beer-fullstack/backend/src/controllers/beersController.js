const beersMock = require('../mocks/beersMock');

let maxId = Math.max(...beersMock.map((beer) => beer.id));

function getBeers(req, res) {
  res.send(beersMock);
}

function postBeer(req, res) {
  const { name } = req.body;
  maxId += 1;
  const newBeer = {
    id: maxId,
    name,
    tagline: 'A Real Bitter Experience.',
  };

  beersMock.push(newBeer);
  res.send(newBeer);
}
function deleteBeer(req, res) {
  const { beerId } = req.params;
  const beerToDelete = beersMock.findIndex(({ id }) => id === +beerId);
  beersMock.splice(beerToDelete, 1);
  res.send(beersMock);
}

function getOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

function filterBeer(req, res) {
  const { beerName } = req.query;
  res.send(beersMock.filter(({ name }) => name === beerName));
}

module.exports = {
  getBeers,
  postBeer,
  deleteBeer,
  getOneBeer,
  filterBeer,
};
