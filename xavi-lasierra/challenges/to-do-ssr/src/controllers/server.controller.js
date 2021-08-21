function getUserData(auth0User) {
  return {
    name: auth0User.name,
    picture: auth0User.picture,
    email: auth0User.email
  };
}

function mainPage(req, res) {
  const isAuthenticated = req.oidc.isAuthenticated();
  if (!isAuthenticated) {
    res.redirect('/restricted');
  }

  const user = getUserData(req.oidc.user);

  res.render('index', { isAuthenticated, user });
}

function restricted(req, res) {
  const isAuthenticated = req.oidc.isAuthenticated();
  if (isAuthenticated) {
    res.redirect('/');
  }
  res.render('restricted', { isAuthenticated });
}

module.exports = {
  mainPage,
  restricted
};
