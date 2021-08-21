const Item = require('../models/itemsModel');

async function getItems({ query }, res) {
  try {
    const items = await Item.find(query);
    res.json(items);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function createItem(req, res) {
  try {
    const newItem = await Item.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateItem({ params }, res) {
  const item = await Item.findById(params);

  try {
    res.json(item);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function getById({ params }, res) {
  const items = await Item.findById(params);

  try {
    res.json(items);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function deleteItem({ params: itemId }, res) {
  const item = await Item.findByIdAndDelete(itemId);

  try {
    res.status(201);
    res.json(item);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
module.exports = {
  getItems,
  createItem,
  getById,
  updateItem,
  deleteItem
};
