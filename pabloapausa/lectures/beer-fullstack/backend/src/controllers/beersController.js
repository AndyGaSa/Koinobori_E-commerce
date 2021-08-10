// Segundo, el controller.

const beersMock = require('../mocks/beersMock');

// Lee cada cerveza, (READ).
function getBeers(req, res) {
  res.send(beersMock);
}

// Añade una cerveza, (GET).
function postBeer(req, res) {
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
  const { beerId } = req.params;
  res.send(beersMock.find(({ id }) => id === +beerId));
}

module.exports = {
  getBeers,
  getBeer,
  postBeer,
};

/* Dudas
  1. ¿Cuándo usar 'req' o 'res'?
  2. ¿Qué es 'req.params'?
  3. ¿Qué es 'req.body'?
*/
