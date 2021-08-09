const beersMock = require('../beers.json');

const nextId = beersMock.length;

const getBeers = (req, res) => res.send(beersMock);
// todo - add newBirra logic
const postBeer = (req, res) => {
  const newBirra = {
    id: Math.random(),
    name: req.body.name,
  };

  beersMock.push(newBirra);

  res.send(beersMock);
};

const getOneBeer = (req, res) => res.json(beersMock.find((beer) => beer.id === +req.params.beerId));

const putOneBeer = (req, res) => {
  console.log(req);
};

const delOneBeer = (req, res) => {
  const index = beersMock.findIndex((beer) => +beer.id === +req.params.beerId);

  res.send(index === -1 ? 'No se pudo eliminar el Id' : beersMock.splice(index, 1));
};

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  putOneBeer,
  delOneBeer,
};
