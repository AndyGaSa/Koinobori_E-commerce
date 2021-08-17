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

async function getOne({ query }, res) {
  try {
    const theGnome = await Gnome.findOne(query);
    res.status(200);
    res.json(theGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ query }, res) {
  try {
    const updatedGnome = await Gnome.findByIdAndUpdate(query);
    res.status(200);
    res.json(updatedGnome);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOne({ query }, res) {
  try {
    const updatedGnome = await Gnome.findByIdAndDelete(query);
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
