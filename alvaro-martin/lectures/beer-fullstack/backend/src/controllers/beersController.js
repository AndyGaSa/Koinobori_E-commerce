const beersMock = require('../mocks/beersMock');

function getBeers(req, res) {
  res.send(beersMock);
}

function postBeer(req, res) {
  const beerMockIds = beersMock.map(({ id }) => id);
  const beerMockOrdered = beerMockIds.sort((a, b) => a - b);
  const lastId = beerMockOrdered[beerMockOrdered.length - 1];
  const maxId = lastId + 1;
  const { name } = req.body;
  const newBeer = {
    id: maxId,
    name,
  };

  beersMock.push(newBeer);

  res.send(newBeer);
}

function getOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}
function filter(req, res) {
  const { beerName } = req.params;
  res.send(beersMock.find(({ name }) => name === beerName));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  filter,
};
