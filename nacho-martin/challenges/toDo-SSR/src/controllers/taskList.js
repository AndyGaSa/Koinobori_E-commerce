/* eslint-disable no-underscore-dangle */
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
      res.render('taskList', { taskList: taskListToUpdate });
    } else if (Object.keys(body).some((key) => key === 'delete')) {
      const taskToDelete = body.delete;
      const taskRemoved = await Task.findByIdAndDelete(taskToDelete);
      const taskListToUpdate = await TaskList.findById(taskListId);
      const { tasks } = taskListToUpdate;
      tasks.filter((currentTask) => currentTask._id !== taskRemoved);
      taskListToUpdate.save();
      const updatedTaskList = await TaskList.findById(taskListId)
        .populate({
          path: 'tasks',
          select: 'name'
        });
      res.render('taskList', { taskList: updatedTaskList });
    } else if (Object.keys(body).some((key) => key === 'done')) {
      const taskToUpdate = body.done;
      await Task.findByIdAndUpdate(taskToUpdate, { status: 'done' }, { new: true });
      const taskListToRender = await TaskList.findById(taskListId)
        .populate({
          path: 'tasks',
          select: 'name'
        });
      res.render('taskList', { taskList: taskListToRender });
    } else if (Object.keys(body).some((key) => key === 'save')) {
      const taskId = body.save;
      const newTaskName = body.taskToUpdateName;
      await Task.findByIdAndUpdate(taskId, { name: newTaskName });
      const taskListToRender = await TaskList.findById(taskListId)
        .populate({
          path: 'tasks',
          select: 'name'
        });
      res.render('taskList', { taskList: taskListToRender });
      console.log(body);
    }
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
