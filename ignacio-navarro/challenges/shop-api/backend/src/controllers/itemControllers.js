const Item = require('../models/itemModel');

async function postItem(req, res) {
  const newItem = await Item.create(req.body);
  return res.send(newItem);
}

module.exports = {
  postItem,
};
