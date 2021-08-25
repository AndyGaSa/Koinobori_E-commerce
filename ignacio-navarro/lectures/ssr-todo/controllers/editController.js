const Task = require('../models/taskModel');

async function getEdit(req, res) {
  try {
    res.render('edit');
    res.status(202);
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}
async function editTask({ body, params: { taskId } }, res) {
  console.log('edit', body);
  try {
    await Task.findByIdAndUpdate(taskId, { body });
    res.redirect('/');
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}

module.exports = {
  getEdit,
  editTask,
};
