/* eslint-disable no-underscore-dangle */
const debug = require('debug')('user:controller');
const User = require('../models/userModel');
const Sites = require('../models/sitesModel');
const FavList = require('../models/favSitesModel');

const removeConcidences = (sites, { userSites }) => (
  sites.filter((site) => userSites.filter((userSite) => userSite.site === site._id).length === 0)
);

const findOrSetUser = async (req, res) => {
  const { name } = req.body;
  let user = await User.find({ name });
  let sites = await Sites.find();
  const favList = !user.length
    ? (
      user = await User.create(req.body),
      await FavList.create({ user: user._id, favsites: [] })
    ) : await FavList.find({ name });

  sites = favList.length ? removeConcidences(sites, favList) : sites;

  return res.send({ user, favList, sites });
};

const getUserById = async ({ params: { userid } }, res) => {
  const user = await User.findById(userid);
  const result = user.length
    ? {
      status: 200,
      message: user,
    } : {
      status: 500,
      message: 'Usuario no encontrado',
    };

  res.status(result.status);
  res.send(result.message);
};

// todo - When remove user we need remove he favList as well
const removeUserById = async ({ params: { userid } }, res) => {
  debug(userid);
  const findD = await FavList.findOneAndDelete({ user: userid });
  const find = await FavList.find({ user: userid });
  debug(`FindD: ${findD}`);
  debug(`Find: ${find}`);
  const delUser = await User.findByIdAndDelete(userid);
  debug(delUser);
  res.send('Usuario eliminado');
};

module.exports = {
  findOrSetUser,
  getUserById,
  removeUserById,
  removeConcidences,
};
