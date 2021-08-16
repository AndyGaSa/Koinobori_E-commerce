/* eslint-disable no-underscore-dangle */
const FavSites = require('../models/favSitesModel');

const checkFavSites = async (req, res, next) => {
  const { params: { userid } } = req;
  req.userFav = await FavSites.find({ user: userid });
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

const updateFavSite = async (req, res) => {
  const { _id } = req.userFav[0];
  const { amount, fav } = req.body;
  const { nModified } = await FavSites.updateOne({ _id, 'userSites._id': req.body._id },
    {
      $set: {
        'userSites.$.amount': amount,
        'userSites.$.fav': fav,
      },
    });

  res.send(!nModified ? `No se pudo modificar ${_id}` : `${_id} Modificado correctamente`);
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
