const User = require('../models/user');

async function logInOrSignUp({ body }, res) {
  try {
    if (Object.keys(body).some((key) => key === 'login')) {
      const currentUser = await User.findOne({ email: body.userEmail })
        .populate({
          path: 'taskList',
          select: 'name'
        });
      res.render('profile', { user: currentUser });
    } else if (Object.keys(body).some((key) => key === 'signup')) {
      await User.create({ name: body.userName, email: body.userEmail });
      const currentUser = await User.findOne({ email: body.userEmail })
        .populate({
          path: 'taskList',
          select: 'name'
        });
      res.render('profile', { user: currentUser });
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getOneById({ params: { userId } }, res) {
  try {
    const currentUser = await User.findById(userId)
      .populate({
        path: 'taskList',
        select: 'name'
      });
    res.render('profile', { user: currentUser });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  logInOrSignUp,
  getOneById
};
