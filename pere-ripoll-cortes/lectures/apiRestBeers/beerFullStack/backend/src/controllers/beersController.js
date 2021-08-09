const beersMock = require('../mocks/beersMock');

const getBeers = (req, res) => res.send(beersMock);

const postBeer = (req, res) => {
  const { name } = req.body;
  const newBeer = {
    id: Math.random() * 10,
    name,
  };

  beersMock.push(newBeer);

  res.send(newBeer);
};

const getOneBeer = (req, res) => {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
};

module.export = {
  getBeers,
  postBeer,
  getOneBeer,
};
