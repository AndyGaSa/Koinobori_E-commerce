const ToDo = require('../models/toDoModel');

const createTask = async ({ body }, res) => {
  try {
    const newTask = await ToDo.create(body);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createTask,
};
