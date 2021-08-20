const Item = require('../models/itemModel');

async function getItem({ query }, res) {
  const newItem = await Item.find(query);
  return res.send(newItem);
}
async function postItem(req, res) {
  const newItem = await Item.create(req.body);
  return res.send(newItem);
}
async function deleteItem({ params: { itemId } }, res) {
  const newItem = await Item.findByIdAndDelete(itemId);
  return res.send(newItem);
}
async function getItemById({ params: { itemId } }, res) {
  const foundItem = await Item.findById(itemId);
  return res.send(foundItem);
}
async function updateItem(req, res) {
  const updatedItem = await Item.findByIdAndUpdate(req.params.itemId, req.body, { new: true });
  return res.json(updatedItem);
}

module.exports = {
  getItem,
  postItem,
  getItemById,
  deleteItem,
  updateItem,
};
