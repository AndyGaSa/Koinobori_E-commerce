/* eslint-disable no-shadow */
const favSites = require('../models/favSitesModel');

async function addFavSite(req, res) {
  try {
    const findfavSites = await favSites.find({ user: req.body.user });
    // const productId = findfavSites[0].products;
    if (findfavSites) {
      const newfavSites = await favSites.create(req.body);
      return res.send(newfavSites);
    }
    findfavSites[0].products[0].amount = req.body.products[0].amount;
    return res.send(findfavSites);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function getUserFavs({ query }, res) {
  try {
    const favSitesItems = await favSites.find(query)
      .populate('user')
      .populate({
        path: 'products.product',
        select: ['name', 'price', 'stock'],
      });

    res.json(favSitesItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function deleteFavSite({ beer }, res) {
  const { _id } = beer;
  favSites.findByIdAndDelete(_id).exec();
  res.send(`La cerveza ${beer.name} ha sido eliminada`);
}
async function updateFavSite(req, res, next) {
  const { beerId } = req.params;
  const beer = await favSites.findOne({ id: +beerId }).exec();
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

module.exports = {
  addFavSite, getUserFavs, deleteFavSite, updateFavSite,
};
