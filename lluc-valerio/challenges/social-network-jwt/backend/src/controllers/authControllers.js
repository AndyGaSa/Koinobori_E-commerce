const jwt = require('jsonwebtoken');

let refreshTokens = [];

function registerFn(req, res) {
  res.send({
    user: req.user,
    message: 'Register works'
  });
}

// REFRESH TOKEN
function refreshTokenFn(req, res) {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    // eslint-disable-next-line no-underscore-dangle
    const data = { _id: user._id, email: user.email };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '1m' }
    );

    return res.json({
      token
    });
  });
}

function logoutFn(req, res) {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

  res.send('Logout successful');
}

module.exports = {
  registerFn,
  refreshTokenFn,
  logoutFn
};
