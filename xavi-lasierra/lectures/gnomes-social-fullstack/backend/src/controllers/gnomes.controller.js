const Gnome = require('../models/gnome.model');

async function createGnome({ body }, res) {
  try {
    const newGnome = await Gnome.create(body);

    res.json(newGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createGnome
};
