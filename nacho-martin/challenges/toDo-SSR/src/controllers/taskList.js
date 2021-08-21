const TaskList = require('../models/taskList');
const Task = require('../models/task');

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

async function updateListbyId({ params: { taskListId }, body }, res) {
  try {
    const { newTaskName } = body;
    const newTask = await Task.create({ name: newTaskName });
    const taskListToUpdate = await TaskList.findById(taskListId);
    taskListToUpdate.tasks.push(newTask);
    taskListToUpdate.save();
    const updatedTaskList = await TaskList.findById(taskListId)
      .populate({
        path: 'tasks',
        select: 'name'
      });
    res.render('taskList', { taskList: updatedTaskList });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getOne,
  updateListbyId
};
