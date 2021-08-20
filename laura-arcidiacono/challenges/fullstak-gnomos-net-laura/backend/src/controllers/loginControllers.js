const User = require('../models/userModel');

module.exports = {
  login: async ({ body }, res) => {
    try {
      const user = await User.findOne(body)
        .populate({
          path: 'friends',
          select: ['name', 'picture']
        })
        .populate({
          path: 'adversaries',
          select: ['name', 'picture']
        });

      if (user) {
        return res.send(user);
      }

      res.status(401);
      return res.send(new Error('There is no user with those properties'));
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
  }
};
