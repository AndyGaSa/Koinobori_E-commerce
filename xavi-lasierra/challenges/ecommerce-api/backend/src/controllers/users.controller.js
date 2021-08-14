const User = require('../models/user.model');

async function getCreateUser({ body }, res) {
  try {
    let user = await User.findOne({ email: body.email });

    if (!user) {
      user = await User.create(body);
      res.status(201);
    }
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getCreateUser
};
