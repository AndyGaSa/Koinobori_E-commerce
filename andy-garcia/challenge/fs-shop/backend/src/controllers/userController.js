/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
const User = require('../models/userModel');
const Sites = require('../models/sitesModel');
const FavList = require('../models/favSitesModel');

const removeConcidences = (sites, { userSites }) => (
  sites.filter((site) => userSites.filter((userSite) => userSite.site === site._id).length === 0)
);

const findOrSetUser = async (req, res) => {
  const { user_id } = req.body;
  const response = {};
  let user = await User.find({ user_id });
  let sites = await Sites.find();
  let favList = {};

  if (!user) {
    user = await User.create(req.body);
    favList = await FavList.create({
      user: user._id,
      favsites: [],
    });

    response.user = user;
    response.favList = favList;
    response.sites = sites;

    res.send(response);
  }

  favList = await FavList.find({ user_id });
  sites = removeConcidences(sites, favList);

  response.favlist = favList;
  response.sites = sites;

  res.send(response);
};

async function getUserById({ params: { userid } }, res) {
  try {
    const users = await User.findById(userid);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

const removeUserById = async ({ params: { userid } }, res) => {
  const delUser = await User.findByIdAndDelete(userid);
  res.send(delUser);
};
module.exports = {
  findOrSetUser,
  getUserById,
  removeUserById,
};
