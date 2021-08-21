/* eslint-disable no-console */
const axios = require('axios');

const dashboard = async (req, res) => {
  const user = '61210cb43375e8872a8a7b23';
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
