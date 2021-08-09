const beersMock = require('../mocks/beersMock');

function getBeers(req, res) {
  res.send(beersMock);
}

const postBeer = function postBeer(req, res) {
  const beerMockOredered = beersMock.map(({ id }) => id).sort((a, b) => a - b);
  const lastId = beerMockOredered[beerMockOredered.length - 1];
  const maxId = lastId + 1;
  const { name } = req.body;
  const newBeer = {
    id: maxId,
    name
  };

  beersMock.push(newBeer);
  res.send(newBeer);
};

function getOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer
};
