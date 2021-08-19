let beersMock = require('../mocks/beersMock');

let lastId = beersMock.length;

function getBeers(req, res) {
  res.send(beersMock);
}

function postBeer(req, res) {
  const { name } = req.body;
  const newBeer = {
    id: lastId,
    name,
  };

  lastId += 1;
  beersMock.push(newBeer);

  res.send(newBeer);
}

function getOneBeer(req, res) {
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

function deleteOneBeer(req, res) {
  const { beerId } = req.params;
  beersMock = beersMock.filter(({ id }) => id !== +beerId);
  res.send(beersMock);
}

function updateOneBeer(req, res) {
  const { beerId } = req.params;
  const updatedBeer = beersMock.find(({ id }) => id === +beerId);
  Object.keys(req.body).forEach((key) => {
    updatedBeer[key] = req.body[key];
  });
  res.send(updatedBeer);
}

// function filterBeer(req, res) {
//   const { beerName } = req.params;
//   res.send(updatedBeer);
// }

module.exports = {
  getBeers,
  postBeer,
  getOneBeer,
  deleteOneBeer,
  updateOneBeer,
};
