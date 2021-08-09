const beersMock = require('../mocks/beersMock');

function postBeer(req, res) {
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
}

function filterBeer(req, res) {
  const { beerName } = req.query;

  const beerFound = beersMock.filter(({ name }) => name === beerName);
  res.send(beerFound);
}

function getBeers(req, res) {
  const { beerName } = req.query;
  return beerName === undefined ? res.send(beersMock) : filterBeer(req, res);
}

function getOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

function updateOneBeer(req, res) {
  const { beerId } = req.params;
  const { name } = req.body;
  const updatedBeer = beersMock.map((item) => (item.id === +beerId
    ? { ...item, name } : { ...item }));
  res.send(updatedBeer);
}
function deleteOneBeer(req, res) {
  const { beerId } = req.params;
  const filteredMock = beersMock.filter((item) => (item.id !== +beerId));
  console.log(filteredMock);
  res.send(filteredMock);
}
module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  filterBeer,
  updateOneBeer,
  deleteOneBeer
};
