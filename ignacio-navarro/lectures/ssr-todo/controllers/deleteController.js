const Task = require('../models/taskModel');

async function deleteTask({ params: { taskId } }, res) {
  console.log('taskId', taskId);
  try {
    await Task.findByIdAndDelete(taskId);
    res.redirect('/');
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}

module.exports = {
  deleteTask,
};
