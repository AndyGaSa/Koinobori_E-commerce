/* eslint-disable no-underscore-dangle */
const User = require('../modules/userModel');

const createOne = async ({ body }, res) => {
  try {
    const exist = await User.find({ name: body.name });
    if (exist.length) {
      res.status(200);
      res.send('exist');
    } else {
      await User.create(body);
      res.status(200);
      res.json('Done');
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getOneUser = async ({ query }, res) => {
  try {
    const objId = await User.find(query);
    res.json(objId);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createOne,
  getOneUser,
};
