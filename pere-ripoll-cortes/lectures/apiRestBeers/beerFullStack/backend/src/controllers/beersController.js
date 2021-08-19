let beersMock = require('../mocks/beersMock');

const getBeers = (req, res) => {
  res.send(beersMock);
};

const postBeer = (req, res) => {
  const { name } = req.body;

  if (beersMock.some((beer) => beer.name.toLowerCase() === name.toLowerCase())) {
    res.status(403);
    return res.send(new Error('There is a beer with the same name'));
  }

  const newBeer = {
    id: beersMock.length + 1,
    name,
  };

  beersMock.push(newBeer);
  res.status(201);
  return res.send(newBeer);
};

const deleteBeer = (req, res) => {
  const { name } = req.body;
  const newBeer = beersMock.filter((e) => e.name !== name);
  beersMock = newBeer;
  res.send(beersMock);
};

const putBeer = (req, res) => {
  const { name, newName } = req.body;
  const newBeer = beersMock.map((e) => {
    if (e.name === name) {
      e.name = newName;
    }
    return beersMock;
  });
  beersMock = newBeer;
  res.send(beersMock);
};

const getOneBeer = (req, res) => {
  const { beerId } = req.params;
  const beer = (beersMock.find(({ id }) => id === +beerId));

  if (beer) {
    return res.send(beer);
  }
  res.status(404);
  return res.send(new Error('There is no beer'));
};

const filterBeer = (req, res) => {
  const { beerName } = req.query;
  const newBeer = beersMock.find(({ name }) => name === beerName);
  res.send(newBeer);
};

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteBeer,
  putBeer,
  filterBeer,
};
