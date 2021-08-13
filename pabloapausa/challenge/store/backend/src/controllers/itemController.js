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

// POST, (body): 'createdItem'.
async function postOne({ body }, res) {
  try {
    const createdItem = await Item.create(body);
    return res.json(createdItem);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// GET, ('itemId'): 'item'.
async function getOne(req, res, next) {
  const { params: { itemId } } = req;
  try {
    const item = await Item.findById(itemId);
    if (item) {
      req.item = item;
      return next();
    }
    res.status(500);
    return res.send(`Couldn't find any item by Id ${itemId}`);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// PUT, ('body', 'itemId'): 'updatedItem'.
async function putOne(req, res) {
  const [{ params: { itemId } }, { body }] = req;
  try {
    const updatedItem = await Item
      .findByIdAndUpdate(itemId, body, { new: true });
    return res.json(updatedItem);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// DELETE, (itemId).
async function deleteOne({ params: { itemId } }, res) {
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
  postOne,
  getOne,
  putOne,
  deleteOne,
};
