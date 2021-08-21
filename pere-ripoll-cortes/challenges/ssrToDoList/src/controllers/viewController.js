const axios = require('axios');

const dashboard = async (req, res) => {
  const user = '6120c2e53460d03b3f9a4bd8';

  try {
    const { data } = await axios.get(`http://localhost:5500/api/todo/${user}`);
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
