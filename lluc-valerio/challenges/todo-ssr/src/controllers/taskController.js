/* eslint-disable no-underscore-dangle */
const debug = require('debug')('toDoServer:taskController');
const Task = require('../models/task');
const User = require('../models/user');

function addTask(req, res) {
  debug('addTask');
  const { session } = req;
  try {
    if (session.userid) {
      res.render('taskDetails', {
        user: {
          name: session.username,
          userId: session.userid,
          bbddId: session.bbddId
        }
      });
    } else {
      res.render('login');
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function setTask(req, res) {
  debug('setTask');
  const { session } = req;
  try {
    if (req.body.name.trim().length > 0) {
      const newTask = await Task.create(req.body);
      debug(newTask);
      res.render('taskDetails', {
        user: {
          name: session.username,
          userId: session.userid,
          bbddId: session.bbddId
        },
        alert: { error: false, message: 'Task created correctly' }
      });
      if (newTask) {
        const user = await User.updateOne(
          { _id: session.bbddId },
          { $push: { tasks: newTask._id } },
          { new: true }
        );
        debug(user);
      }
    } else {
      res.render('taskDetails', {
        user: {
          name: session.username,
          userId: session.userid,
          bbddId: session.bbddId
        },
        alert: { error: true, message: 'Name is required' }
      });
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  addTask,
  setTask
};
