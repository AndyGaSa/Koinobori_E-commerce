const Gnome = require('../models/gnome.model');

async function getGnomes({ query }, res) {
  try {
    const foundGnomes = await Gnome.find(query)
      .populate({ path: 'friends', select: 'name' })
      .populate({ path: 'adversaries', select: 'name' });

    res.json(foundGnomes);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createGnome({ body }, res) {
  try {
    const newGnome = await Gnome.create(body);
    res.json(newGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getGnomeById({ params: { gnomeId } }, res) {
  try {
    const foundGnome = await Gnome.findById(gnomeId);
    res.json(foundGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteGnomeById({ params: { gnomeId } }, res) {
  try {
    await Gnome.findByIdAndDelete(gnomeId);
    res.status(201);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateGnomeById({ params: { gnomeId }, body }, res) {
  try {
    const updatedGnome = await Gnome.findByIdAndUpdate(
      gnomeId,
      body,
      { new: true }
    );
    res.json(updatedGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getGnomes,
  createGnome,
  getGnomeById,
  deleteGnomeById,
  updateGnomeById
};
