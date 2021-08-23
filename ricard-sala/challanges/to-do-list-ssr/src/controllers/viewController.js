/* eslint-disable no-console */
const axios = require('axios');

const dashboard = async (req, res) => {
  const user = '612126264a277d8ecaefc40f';
  try {
    const { data } = await axios.get(`http://localhost:5013/api/todo/${user}`);
    const { tasks } = data;

    res.render('dashboard', { todos: tasks });
  } catch (error) {
    res.status(500);
    res.render('notFound');
  }
};

module.exports = {
  dashboard,
};
