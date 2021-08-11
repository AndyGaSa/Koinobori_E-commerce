const User = require('../models/userModel');

async function getBeers({ query }, res) {
  const foundUsers = await User.find(query);

  return res.send(foundUsers);
}

module.exports = {
  getBeers,
};
