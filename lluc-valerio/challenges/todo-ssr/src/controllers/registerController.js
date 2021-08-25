const debug = require('debug')('toDoServer:registerController');
const User = require('../models/user');

function register(req, res) {
  res.render('register');
}

async function registerValidation({ body }, res) {
  debug('registerValidation');
  try {
    /* eslint-disable no-debugger */
    debugger;
    let newUser = 'noUser';
    newUser = await User.find({ email: body.email });
    if (newUser.length <= 0) {
      newUser = await User.create(body);
      res.render('login', { alert: { error: false, message: 'User created correctly' } });
    } else {
      res.render('register', { alert: { error: true, message: 'Already a user with this email. If you do not remember your password contact with Administrator.' } });
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  register,
  registerValidation
};
