const axios = require('axios');

async function loadIndex(req, res) {
  try {
    const { data } = await axios.get('http://localhost:5000/user/6120f39b024cfa5d4c36004f');
    res.render('index', { user: data });
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not load index');
  }
}

async function changeStatus(req, res, id) {
  const newData = {
    status: true
  };
  try {
    const { data } = await axios.put(`http://localhost:5000/task/${id}`, newData);
    res.render('index', { task: data });
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not change status of task');
  }
}

module.exports = { loadIndex, changeStatus };
