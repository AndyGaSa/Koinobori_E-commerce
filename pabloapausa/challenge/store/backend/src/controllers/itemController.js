const Item = require('../models/itemModel');

async function postItem({ body }, res) {
  const newItem = await Item.create(body);

  res.status(201);
  return res.send(newItem);
}

async function getItems({ query }, res) {
  const foundItem = await Item.filter(query);

  return res.send(foundItem);
}

module.exports = {
  postItem,
  getItems,
};
