let beersMock = require('../mocks/beersMock');

const getBeers = (req, res) => {
  res.send(beersMock);
};

const postBeer = (req, res) => {
  const { name } = req.body;
  const newBeer = {
    id: beersMock.length + 1,
    name,
  };

  beersMock.push(newBeer);

  res.send(newBeer);
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
  res.send(beersMock.find(({ id }) => id === +beerId));
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
