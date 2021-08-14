const User = require('../models/userModel');
const Sites = require('../models/sitesModel');
const FavList = require('../models/favSitesModel');

const findOrSetUser = async (req, res) =>{
  const { user_id } = req.body
  const response = {}
  const user = await User.find({ user_id })
  let sites = await Sites.find()
  let favList = {}

  if(!user){
    user = await User.create(req.body)
    favList = await FavList.create( { 
      user: user._id,
      favsites: [],
    })

    response.user = user
    response.favList = favList

    var array_intersection = array_first.filter(function(x) {
      // checking second array contains the element "x"
      if(array_second.indexOf(x) != -1)
        return true;
      else
        return false;
    });

    response.sites = sites

    res.send(response);
  }

  favlist = await FavList.find({user_id});
  sites = removeConcidences(sites, favSites);

  response.favlist = favList;
  response.sites = sites;

  res.send(response)
}

const removeConcidences = (sites, {userSites}) => sites.filter((site) => userSites.filter((userSite) => userSite.site === site._id).length === 0);


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
