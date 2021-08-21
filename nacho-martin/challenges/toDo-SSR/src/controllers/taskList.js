const TaskList = require('../models/taskList');

async function createOne({ body }, res) {
  try {
    const newTaskList = await TaskList.create(body);

    res.json(newTaskList);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getOne({ params: { taskListId } }, res) {
  try {
    const currentTaskList = await TaskList.findById(taskListId)
      .populate({
        path: 'tasks',
        select: 'name'
      });
    res.render('taskList', { taskList: currentTaskList });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne, getOne
};
