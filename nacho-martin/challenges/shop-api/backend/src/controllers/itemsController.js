const Item = require('../models/itemsModel');

async function getItems({ query }, res) {
  const items = await Item.find(query);

  try {
    res.json(items);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function createItem(req, res) {
  const newItem = await Item.create(req.body);
  res.send(newItem);
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
module.exports = {
  getItems,
  createItem,
  updateItem
};
