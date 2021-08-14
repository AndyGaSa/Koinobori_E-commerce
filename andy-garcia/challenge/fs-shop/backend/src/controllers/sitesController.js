const Sites = require('../models/sitesModel');

async function createSites(req, res) {
  const newBeer = await Sites.create(req.body);

  return res.send(newBeer);
}

async function getSites(req, res) {
  try {
    const SitesItems = await Sites.find();
    res.json(SitesItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function deleteSites({ beer }, res) {
  const { _id } = beer;
  Sites.findByIdAndDelete(_id).exec();
  res.send(`La cerveza ${beer.name} ha sido eliminada`);
}
async function findSites(req, res, next) {
  const { beerId } = req.params;
  const beer = await Sites.findOne({ id: +beerId }).exec();
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

module.exports = {
  createSites, getSites, deleteSites, findSites,
};
