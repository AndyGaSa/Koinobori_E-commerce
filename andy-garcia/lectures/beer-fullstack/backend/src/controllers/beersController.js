const beersMock = require('../mocks/beersMock');

function postBeer(req, res) {
  const { name } = req.body;
  const newBeer = {
    id: beersMock.length + 1,
    name,
  };
  beersMock.push(newBeer);
  res.send(newBeer);
}

function getOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

function filterBeers(req, res) {
  const { beerName } = req.query;
  res.send(beersMock.filter(({ name }) => name === beerName));
}

function getBeers(req, res) {
  const { beerName } = req.query;
  return beerName === undefined ? res.send(beersMock) : filterBeers(req, res);
}

function deleteOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.filter(({ id }) => id !== +beerId));
}
function updateOneBeer(req, res) {
  const { beerId } = req.params;
  const { name } = req.body;
  res.send(beersMock.map((item) => (item.id === +beerId ? { ...item, name } : { ...item })));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateOneBeer,
};
