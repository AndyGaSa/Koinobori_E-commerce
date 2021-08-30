const { Router } = require('express');
const passport = require('passport');
const gnomoControllers = require('../controllers/gnomoController');

const gnomoRouter = Router();

gnomoRouter.route('/')
  .post(gnomoControllers.createOne)
  .get(gnomoControllers.getAll);

gnomoRouter
  .route('/:gnomoId')
  .get(gnomoControllers.getOneById)
  .put(gnomoControllers.updateOneById)
  .patch(gnomoControllers.addOneElementbyId)
  .delete(gnomoControllers.deleteById);

gnomoRouter.post(
  '/register',
  passport.authenticate('signup', { session: false }),
  (req, res) => {
    res.send({
      user: req.user,
      message: 'Register works'
    });
  }
);

module.exports = gnomoRouter;
