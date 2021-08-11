const debug = require('debug')('beersApi:controllers');
const Beer = require('../models/beerModel');

async function getBeers(req, res) {
  try {
    debug(`param: ${req.query.beerName}`);
    // debug(req.query.beerName);
    let bbDdResponse = null;
    if (!req.query.beerName) {
      debug('inside general find');
      bbDdResponse = await Beer.find();
    } else {
      bbDdResponse = await Beer.findOne({ name: req.query.beerName });
    }
    res.status(200);
    return res.json(bbDdResponse);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function setBeers(req, res) {
  try {
    const newBeer = await Beer.create(req.body);
    res.status(201);
    return res.json(newBeer);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function getOneBeerById(req, res) {
  try {
    debug(`param: ${req.params.beerId}`);
    const newBeer = await Beer.findById(req.params.beerId);
    res.status(201);
    return res.json(newBeer);
  } catch (error) {
    res.status(500);
    return res.json(error);
  }
}

module.exports = {
  getBeers,
  setBeers,
  getOneBeerById
};
