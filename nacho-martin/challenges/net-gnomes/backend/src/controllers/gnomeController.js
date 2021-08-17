const Gnome = require('../models/gnomeModels');

async function createOne({ body }, res) {
  try {
    const gnome = await Gnome.create(body);
    res.json(gnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const gnomes = await Gnome.find(query);
    res.json(gnomes);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll
};
