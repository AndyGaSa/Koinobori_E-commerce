const Item = require('../models/itemModel');

async function getAll({ query }, res) {
  try {
    const items = await Item.find(query);
    return res.json(items);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newItem = await Item.create(body);
    return res.json(newItem);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// Pendant.
async function getOneById(req, res) {
  try {
    return res.send('getOneById is working');
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// Pendant.
async function updateOneById(req, res) {
  try {
    return res.send('updateOneById is working');
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOneById({ params: { itemId } }, res) {
  try {
    await Item.findByIdAndDelete(itemId);
    res.status(404);
    return res.send();
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
};
