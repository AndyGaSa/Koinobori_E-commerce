const Gnome = require('../models/gnomesModel');

async function getAll({ query }, res) {
  try {
    const foundGnomes = await Gnome.find(query);
    res.json(foundGnomes);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newGnome = await Gnome.create(body);
    res.status(200);
    res.json(newGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { gnomeId } }, res) {
  try {
    const theGnome = await Gnome.findById(gnomeId)
      .populate({
        path: 'friends',
        select: ['name']
      })
      .populate({
        path: 'adversaries',
        select: ['name']
      });
    res.status(200);
    res.json(theGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ params: { gnomeId }, body }, res) {
  try {
    const updatedGnome = await Gnome.findByIdAndUpdate(
      gnomeId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.status(200);
    res.json(updatedGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOne({ params: { gnomeId } }, res) {
  try {
    const updatedGnome = await Gnome.findByIdAndDelete(gnomeId);
    res.status(201);
    res.json(updatedGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {

  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne

};
