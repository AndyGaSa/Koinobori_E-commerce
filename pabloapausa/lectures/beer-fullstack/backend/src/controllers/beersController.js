const beersMock = require('../mocks/beersMock');
const Beer = require('../models/beerModel');

function getBeers(req, res) {
  res.send(beersMock);
}

/*
function postBeer(req, res) {
  const { name } = req.body;
  const newBeer = {
    id: Math.random(),
    name,
  };

  beersMock.push(newBeer);

  res.send(newBeer);
}
*/

const getBeer = ({ beer }, res) => res.send(beer);

async function postBeer(req, res) {
  const toUpdate = req.body;
  const { beerId } = req.params;

  const updatedBeer = await Beer
}




module.exports = {
  getBeers,
  postBeer,
  getBeer,
};
