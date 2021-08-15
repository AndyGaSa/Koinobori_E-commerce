const { Router } = require('express'); // Import Router object.
const userController = require('../controllers/userController');

const userRouter = new Router(); // Create Router object.

userRouter.route('/:id')
  .all(userController.search)
  .get(userController.readOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

module.exports = userRouter;
