/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
const debug = require('debug')('fav:cont');
const FavSites = require('../models/favSitesModel');

const checkFavSites = async (req, res, next) => {
  const { params: { userid } } = req;
  req.userFav = await FavSites.find({ user: userid });
  next();
};

// ? Try change addToSet to set for each value
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

const updateFavSite = async (req, res) => {

};

const deleteFavSite = async (req, res) => {
  const { _id } = req.body;
  const { nModified } = await FavSites.updateOne(
    { },
    { $pull: { userSites: { _id } } },
  );

  res.send(!nModified ? `No se pudo eliminar ${_id}` : `${_id} Eliminado correctamente`);
};

module.exports = {
  checkFavSites,
  addFavSite,
  updateFavSite,
  deleteFavSite,
};
