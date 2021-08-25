/* eslint-disable no-underscore-dangle */
const { userCheck } = require('./users.controller');
const { getToDos } = require('./toDos.controller');

async function mainPage({ oidc }, res) {
  try {
    const isAuthenticated = oidc.isAuthenticated();
    if (isAuthenticated) {
      const user = await userCheck(oidc.user, res);
      const toDos = await getToDos(user._id);
      res.render('index', { isAuthenticated, user, toDos });
    } else {
      res.redirect('/restricted');
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function restricted({ oidc }, res) {
  const isAuthenticated = oidc.isAuthenticated();
  if (isAuthenticated) {
    res.redirect('/');
  } else {
    res.render('restricted', { isAuthenticated });
  }
}

module.exports = {
  mainPage,
  restricted
};
