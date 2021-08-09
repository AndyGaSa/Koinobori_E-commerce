let beersMock = require('../beers.json');

let nextId = beersMock.length;

const getBeers = (req, res) => res.send(beersMock);

const postBeer = (req, res) => {
  const newBirra = {
    id: ++nextId,
    ...req.body,
  };
  beersMock.push(newBirra);

  res.send(newBirra);
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

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  putOneBeer,
  delOneBeer,
};
