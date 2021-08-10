// Segundo, el controller.

const beersMock = require('../mocks/beersMock');

// Lee cada cerveza, (READ).
function getBeers(req, res) {
  res.send(beersMock);
}

// Añade una cerveza, (GET).
function postBeer(req, res) {
  // Req.body: obtiene el JSON.
  const { name } = req.body;
  const beer = {
    id: Math.random(),
    name,
  };

  beersMock.push(beer);
  res.send(beer);
}

// Lee una cerveza, (READ).
function getBeer(req, res) {
  // Req.params: obtiene la URL.
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

module.exports = {
  getBeers,
  getBeer,
  postBeer,
};
