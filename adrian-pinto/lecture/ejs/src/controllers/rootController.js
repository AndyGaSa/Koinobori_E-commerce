const getRootTemplate = (req, res) => {
  res.render('index', {
    user: {
      name: 'Adrian',
    },
  });
};

module.exports = {
  getRootTemplate,
};
