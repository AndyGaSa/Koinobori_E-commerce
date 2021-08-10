const beersMock = require('../mocks/beersMock');

function getBeers(req, res) {
  res.send(beersMock);
}

function postBeer(req, res) {
  const { name } = req.body;

  if (beersMock.some((beer) => beer.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
    res.status(403);
    return res.send(new Error(`There is a beer with the same name ${name}`));
  }
  const newBeer = {
    id: beersMock.length + 1,
    name
  };

  beersMock.push(newBeer);

  res.status(201);
  return res.send(newBeer);
}

function getOneBeer(req, res) {
  const { beerId } = req.params;
  const beer = beersMock.find(({ id }) => id === +beerId);

  if (beer) {
    res.send(beer);
  }

  res.status(404);
  return res.send(new Error(`There is a no beer with the id ${beerId}`));
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

function filterOneBeer(req, res) {
  const { beerName } = req.query;
  res.send(beersMock.filter(({ name }) => name === beerName));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateOneBeer,
  filterOneBeer
};
