const User = require('../models/userModel');

const readAllUsers = async ({ query }, res) => { // GET.
  try {
    const users = await User.find(query);
    res.json(users); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const createOneUser = async ({ body }, res) => { // POST.
  try {
    const createduser = await User.create(body);
    res.json(createduser);
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

module.exports = {
  readAllUsers,
  createOneUser,
};
