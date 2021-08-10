const debug = require('debug')('beers:controllers');
let beersMock = require('../beers.json');

let nextId = beersMock.length;

const getBeers = (req, res) => res.send(beersMock);

const postBeer = (req, res) => {
  if (beersMock.some((beer) => beer.name.toLowerCase() === req.body.name.toLowerCase())) {
    res.status(403);
    return res.send('These beer already exist');
  }

  const newBirra = {
    id: ++nextId,
    ...req.body,
  };
  beersMock.push(newBirra);

  return res.send(newBirra);
};

const getOneBeer = (req, res) => res.send(beersMock.find((beer) => beer.id === +req.params.beerId));

const putOneBeer = (req, res) => {
  beersMock = beersMock.map((beer) => (
    beer.id === +req.params.beerId ? { ...beer, ...req.body } : { ...beer }));
  res.send(beersMock[req.params.beerId - 1]);
};

const delOneBeer = (req, res) => {
  const index = beersMock.findIndex((beer) => beer.id === +req.params.beerId);

  res.send(index === -1 ? 'No se pudo eliminar el Id' : beersMock.splice(index, 1));
};

const findABeer = (req, res, next) => {
  const { beerId } = req.params;
  const beer = beersMock.find(({ id }) => id === +beerId);
  if (beer) {
    req.beer = beer;
    next();
  }
  return res.send('Not found');
};

module.exports = {
  findABeer,
  getBeers,
  postBeer,
  getOneBeer,
  putOneBeer,
  delOneBeer,
};
