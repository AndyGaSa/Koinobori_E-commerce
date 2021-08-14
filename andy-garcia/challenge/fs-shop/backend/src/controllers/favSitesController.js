/* eslint-disable no-shadow */
const favSites = require('../models/favSitesModel');

const checkFavSites = async (req, res, next) => {
  const { user } = req.body.user;
  const { body } = req.body;

  const favList = favSites.find({ user });

  if (!favList) {
    favSites.create(body);
    next();
  }
  req.favlist = favList;
  next();
};

async function addFavSite(req, res) {
  try {
    const findfavSites = await favSites.find({ user: req.body.user });
    // const productId = findfavSites[0].products;
    if (!findfavSites) {
      const newfavSites = await favSites.create(req.body);
      return res.send(newfavSites);
    }
    return res.send(findfavSites);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function getUserFavs({ query }, res) {
  try {
    const favSitesTotal = await favSites.find(query)
      .populate('user')
      .populate({
        path: 'favSites.site',
        select: ['name', 'price', 'stock', 'distance, pictures'],
      });

    res.json(favSitesTotal);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function deleteFavSite({ params: { favid } }, res) {
  favSites.findByIdAndDelete(favid).exec();
  res.send(`Se ha eliminado ${favid} de tu lista de favoritos`);
}
async function updateFavSite({ params: { favid } }, res) {
  try {
    const foundFav = await favSites.findOne({ _id: favid }).exec();
    console.log(foundFav);
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no fav with id ${favid}`));
  }
}

module.exports = {
  addFavSite,
  getUserFavs,
  deleteFavSite,
  updateFavSite,
  checkFavSites,
};
