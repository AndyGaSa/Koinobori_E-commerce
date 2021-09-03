const User = require('../models/userModel');

const createOne = async ({ body }, res) => {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getAll = async ({ query }, res) => {
  try {
    const users = await User.find(query)
      .populate(
        {
          path: 'friends',
          select: ['name'],
        },
      )
      .populate(
        {
          path: 'adversaries',
          select: ['name'],
        },
      );
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getOneById = async ({ params: { id } }, res) => {
  try {
    const user = await User.findById(id)
      .populate(
        {
          path: 'friends',
          select: ['name'],
        },
      )
      .populate(
        {
          path: 'adversaries',
          select: ['name'],
        },
      );
    res.status(200);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateOneById = async (
  {
    params: { id },
    body,
  },
  res,

) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $addToSet: body },
      {
        new: true,
        useFindAndModify: false,
      },
    );
    res.status(200);
    res.json(updateUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteOneById = async ({ params: { id } }, res) => {
  try {
    await User.findByIdAndDelete(id);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createOne,
  getAll,
  updateOneById,
  deleteOneById,
  getOneById,
};
