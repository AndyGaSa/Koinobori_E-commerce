/* eslint-disable no-underscore-dangle */
const debug = require('debug')('toDoServer:loginController');
const User = require('../models/user');

// a variable to save a session
let session;

async function login(req, res) {
  try {
    debug('*********************');
    debug('login');
    // eslint-disable-next-line no-debugger
    debugger;
    const currentUser = await User.find({ email: req.body.email })
      .populate('tasks');
    if (currentUser.length <= 0) {
      res.render('login', { alert: { error: true, message: 'This user does not exist.' } });
    } else if (
      req.body.email === currentUser[0].email && req.body.password === currentUser[0].password
    ) {
      session = req.session;
      session.userid = req.body.email;
      session.username = currentUser[0].name;
      session.bbddId = currentUser[0]._id;

      res.render('index', {
        user: {
          ...currentUser[0]._doc,
          userId: session.userid,
          bbddId: session.bbddId
        }
      });
    } else {
      res.render('login', { alert: { error: true, message: 'User or password incorrect.' } });
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  login
};
