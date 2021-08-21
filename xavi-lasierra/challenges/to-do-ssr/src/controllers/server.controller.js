/* eslint-disable no-underscore-dangle */
const { userCheck } = require('./users.controller');
const { getToDos } = require('./toDos.controller');

async function mainPage(req, res) {
  try {
    const isAuthenticated = req.oidc.isAuthenticated();
    if (!isAuthenticated) {
      res.redirect('/restricted');
    }

    const user = await userCheck(req.oidc.user);
    const toDos = await getToDos(user._id);

    res.render('index', { isAuthenticated, user, toDos });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
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
