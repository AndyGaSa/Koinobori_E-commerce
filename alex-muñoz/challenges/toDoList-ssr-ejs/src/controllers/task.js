const Task = require('../models/task');

async function createOne({ body }, res) {
  try {
    const newTask = await Task.create(body);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne

};
