/* eslint-disable no-underscore-dangle */
const debug = require('debug')('toDoServer:mainController');
const User = require('../models/user');
// a variable to save a session
let session;

async function getMain(req, res) {
  try {
    // eslint-disable-next-line no-debugger
    debugger;
    debug('getMain');
    session = req.session;
    if (session.userid) {
      const user = await User.findById(session.bbddId)
        .populate('tasks');
      res.render('index', {
        user: {
          ...user._doc,
          userId: session.userid,
          bbddId: session.bbddId
        }
      });
    } else {
      res.render('login');
    }
  } catch (error) {
    res.status(500);
    res.render('login');
  }
}

function profile(req, res) {
  res.render('profile');
}

module.exports = {
  getMain,
  profile
};
