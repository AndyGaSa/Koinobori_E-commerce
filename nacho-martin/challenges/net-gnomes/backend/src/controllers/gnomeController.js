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

async function getOne({ params: { gnomeId }, res }) {
  try {
    const gnomeFound = await Gnome.findByIdAndDelete(gnomeId);
    res.json(gnomeFound);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function updateOne({ params: { gnomeId }, body }, res) {
  try {
    const gnomeToUpdate = await Gnome.findByIdAndUpdate(gnomeId, body, { new: true });
    res.json(gnomeToUpdate);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function deleteOne({ params: { gnomeId }, res }) {
  try {
    const gnomeToDelete = await Gnome.findByIdAndDelete(gnomeId);
    res.json(gnomeToDelete);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne
};
