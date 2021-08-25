/* eslint-disable no-underscore-dangle */
const TaskList = require('../models/taskList');
const Task = require('../models/task');
const User = require('../models/user');

async function createOne({ body }, res) {
  try {
    const newTaskList = await TaskList.create({ name: body.newListName });
    const currentUser = await User.findById(body.user);
    currentUser.taskList.push(newTaskList);
    await currentUser.save();
    const userToPrint = await User.findById(body.user)
      .populate({
        path: 'taskList',
        select: 'name'
      });
    res.render('profile', { user: userToPrint });
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
    res.render('details', { taskList: currentTaskList });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateTaskList({ params: { taskListId }, body }, res) {
  try {
    const updatedTaskList = await TaskList.findById(taskListId)
      .populate({
        path: 'tasks',
        select: 'name'
      });
    if (Object.keys(body).some((key) => key === 'newTaskName')) {
      const { newTaskName } = body;
      const newTask = await Task.create({ name: newTaskName });
      const taskListToUpdate = await TaskList.findById(taskListId)
        .populate({
          path: 'tasks',
          select: 'name'
        });
      taskListToUpdate.tasks.push(newTask);
      taskListToUpdate.save();
      res.render('details', { taskList: taskListToUpdate });
    } else if (Object.keys(body).some((key) => key === 'delete')) {
      const taskToDelete = body.delete;
      const taskRemoved = await Task.findByIdAndDelete(taskToDelete);
      const taskListToUpdate = await TaskList.findById(taskListId);
      const { tasks } = taskListToUpdate;
      tasks.filter((currentTask) => currentTask._id !== taskRemoved);
      taskListToUpdate.save();

      res.render('details', { taskList: updatedTaskList });
    } else if (Object.keys(body).some((key) => key === 'done')) {
      const taskToUpdate = body.done;
      await Task.findByIdAndUpdate(taskToUpdate, { status: 'done' }, { new: true });
      res.render('details', { taskList: updatedTaskList });
    } else if (Object.keys(body).some((key) => key === 'save')) {
      const taskId = body.save;
      const newTaskName = body.updatedTaskName;
      await Task.findByIdAndUpdate(taskId, { name: newTaskName }, { new: true });
      res.render('details', { taskList: updatedTaskList });
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getOne,
  updateTaskList
};
