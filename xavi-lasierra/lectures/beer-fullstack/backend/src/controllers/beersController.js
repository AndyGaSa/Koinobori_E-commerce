let beersMock = require('../mocks/beersMock');

let maxId = Math.max.apply(this, beersMock.map(({ id }) => +id)) + 1;

function filterBeers(entries) {
  return entries.reduce((acc, [key, value]) => {
    const filteredBeers = beersMock
      .filter((beer) => beer[key]?.toLowerCase() === value.toLowerCase());
    return [...acc, ...filteredBeers];
  }, []);
}

function getBeers({ query }, res) {
  const entries = Object.entries(query);
  return entries.length > 0
    ? res.send(filterBeers(entries))
    : res.send(beersMock);
}

function postBeer(req, res) {
  const { name } = req.body;

  if (beersMock.some((beer) => beer.name.toLowerCase() === name.toLowerCase())) {
    res.status(403);
    return res.send(new Error(`There is a beer with the same name: ${name}`));
  }
  const newBeer = {
    id: maxId,
    name,
    tagline: 'La mejor'
  };

  beersMock.push(newBeer);
  maxId += 1;

  res.status(201);
  return res.send(newBeer);
}

function getOneBeer({ beer }, res) {
  return res.send(beer);
}

function deleteOneBeer(req, res) {
  beersMock = beersMock.filter(({ id }) => id !== +req.params.beerId);
  res.status(204);
  return res.send();
}

function updateBeer(req, res) {
  const newData = req.body;
  let updatedBeer;
  const { beerId } = req.params;

  beersMock = beersMock.map((beer) => {
    if (beer.id === +beerId) {
      updatedBeer = { ...beer, ...newData };
      return updatedBeer;
    }
    return beer;
  });
  return res.send(updatedBeer);
}

function findOneBeer(req, res, next) {
  const { beerId } = req.params;
  const beer = beersMock.find(({ id }) => id === +beerId);

  if (beer) {
    req.beer = beer;
    return next();
  }
  res.status(404);
  return res.send(new Error(`There is no beer with id: ${beerId}`));
}

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateBeer,
  findOneBeer
};
