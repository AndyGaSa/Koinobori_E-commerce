const Gnome = require('../models/gnome.model');

async function loginGnome({ query }, res) {
  try {
    const foundGnome = await Gnome.findOne(query)
      .populate({ path: 'friends', select: 'name' })
      .populate({ path: 'adversaries', select: 'name' });
    if (foundGnome) {
      res.json(foundGnome);
    } else {
      res.status(401);
      res.send(new Error('User not found'));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  loginGnome
};
