function mainPage(req, res) {
  if (!req.oidc.isAuthenticated()) {
    res.redirect('/login');
  }
  res.render('index');
}

function login(req, res) {
  res.render('login');
}

module.exports = {
  mainPage,
  login
};
