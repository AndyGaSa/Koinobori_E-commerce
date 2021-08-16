/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
const debug = require('debug')('fav:cont');
const FavSites = require('../models/favSitesModel');

const checkFavSites = async (req, res, next) => {
  const { params: { favid } } = req;
  req.userFav = await FavSites.find({ user: favid });
  next();
};

const addFavSite = async (req, res) => {
  const [userFav] = [...req.userFav];
  const result = await FavSites.findByIdAndUpdate(
    userFav._id,
    {
      $addToSet: {
        userSites: req.body,
      },
    }, { useFindAndModify: false, new: true },
  );

  res.send(result);
};

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
