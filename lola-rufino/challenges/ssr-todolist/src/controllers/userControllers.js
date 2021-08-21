const getUserById = (req, res) => {
  const userData = {
    email: 'lola.ruf.ar@gmail.com',
    name: 'Lola',
    tasks: 'Finnish to do challenge'
  };
  res.render('index', { user: userData });
};

module.exports = {
  getUserById
};
