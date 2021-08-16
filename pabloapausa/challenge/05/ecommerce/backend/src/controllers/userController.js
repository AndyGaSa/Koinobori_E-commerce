const User = require('../models/userModel');

const readAllUsers = async ({ query }, res) => { // GET.
  try {
    const users = await User.find(query);
    res.json(users); // Send JSON response.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const createOneUser = async ({ body }, res) => { // POST.
  try {
    const createdUser = await User.create(body);
    res.json(createdUser); // Send JSON response.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const searchOneUser = async (req, res, next) => {
  const { params: { userId } } = req;
  try {
    const user = await User.findById(userId);
    if (user) {
      req.user = user; // Create 'user' property.
      next(); // To GET, PUT or DELETE.
    } else {
      res.status(404); // Not Found.
      res.send(new Error('Couldn\'t find user'));
    }
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const readOneUser = ({ user }, res) => res.send(user); // GET.

const updateOneUser = async (req, res) => { // PUT.
  const [{ user }, { params: { userId } }] = req;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      user,
      { new: true },
    );
    res.json(updatedUser); // Send JSON response.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const deleteOneUser = async ({ params: { userId } }, res) => {
  try {
    await User.findByIdAndDelete(userId);
    res.status(204); // No Content.
    res.json(); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

module.exports = {
  readAllUsers,
  createOneUser,
  searchOneUser,
  readOneUser,
  updateOneUser,
  deleteOneUser,
};
