const User = require('../models/userModel');

async function createOne({ body }, res) {
    try{
        const newUser = await User.create(body);
        res.json(newUser);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function getAll({ query }, res) {
    try{
        const users = await User.find(query);
        res.json(users);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function getOneById ({params: { userId }}, res) {
    try{
        const user = await User.findById(userId)
            .populate({
                path: 'friends',
                select: ['name'],
            })
            .populate ({
                path: 'adversaries',
                select: ['name'],
            });
        res.json(user);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function deleteOneById({params: { userId }}, res) {
    try {
      await User.findByIdAndDelete(userId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }


  async function updateUser({ params: { userId }, body }, res) {
    try {
      const userUpdated = await User.findByIdAndUpdate(
        userId,
        body,
        {
          new: true,
        },
      );
      res.json(userUpdated);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }



module.exports = {
    createOne,
    getAll,
    getOneById,
    deleteOneById,
    updateUser,
};