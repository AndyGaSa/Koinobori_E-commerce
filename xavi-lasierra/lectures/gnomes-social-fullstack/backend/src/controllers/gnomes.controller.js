const Gnome = require('../models/gnome.model');

function transformQuery(query) {
  let transformedQuery = {};
  const entries = Object.entries(query);
  if (entries.length > 0) {
    entries.forEach(([property, filter]) => {
      if (property.includes('_inc')) {
        transformedQuery = { ...transformedQuery, [property.split('_')[0]]: { $regex: filter, $options: 'i' } };
      } else {
        transformedQuery = { ...transformedQuery, [property]: filter };
      }
    });
  }
  return transformedQuery;
}

async function getGnomes({ query }, res) {
  try {
    const newQuery = transformQuery(query);

    const foundGnomes = await Gnome.find(newQuery)
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
    const foundGnome = await Gnome.findById(gnomeId)
      .populate({ path: 'friends', select: 'name' })
      .populate({ path: 'adversaries', select: 'name' });
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
