/* eslint-disable no-underscore-dangle */
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

async function getUserById({ params: { userid } }, res) {
  try {
    const users = await User.findById(userid);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

// todo - When remove user we need remove he favList as well
const removeUserById = async ({ params: { userid } }, res) => {
  const delUser = await User.findByIdAndDelete(userid);
  res.send(delUser);
};

module.exports = {
  findOrSetUser,
  getUserById,
  removeUserById,
};
