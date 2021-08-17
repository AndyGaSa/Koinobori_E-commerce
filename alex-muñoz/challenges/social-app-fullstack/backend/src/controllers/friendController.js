const Friend = require('../models/friendModel');

async function createOne({ body }, res) {
  try {
    const newFriend = await Friend.create(body);
    res.json(newFriend);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const friend = await Friend.find(query);
    res.json(friend);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { FriendId } }, res) {
  try {
    await Friend.findByIdAndDelete(FriendId);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  deleteOneById
};
