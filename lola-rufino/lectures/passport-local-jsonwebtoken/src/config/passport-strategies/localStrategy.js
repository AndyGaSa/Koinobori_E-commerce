const passport = require('passport');
const localStrategy = require('passport-local');
// const { Strategy } = require('passport-local');
const User = require('../../models/userModel');

// SIGN UP O REGISTER
// invoco use con dos argumentos, un string y un objeto
passport.use(
  'signup',
  // variable que apunta a un objeto que apunta al valor al que apunta Strategy,
  // a una función (método en este caso)
  new localStrategy.Strategy(
    {
      // campo de la request que trae ese valor de usuario
      usernameField: 'name',
      // campo de la request que trae ese valor de password
      passwordField: 'password'
    },
    // en un middleware tengo que invocar a next para que siga
    async (name, password, next) => {
      try {
        const user = await User.create({ name, password });
        // no hay error, hay usuario
        next(null, user);
      } catch (error) {
        next(error);
      }
    }
  )
  // new Strategy(),
);

// LOGIN
passport.use(
  'login',
  new localStrategy.Strategy({
    usernameField: 'name',
    passwordField: 'password'
  },
  async (name, password, next) => {
    try {
      const user = await User.findOne({ name });
      if (!user) {
        return next(null, false, { message: 'User not found' });
      }
      if (!user.isValidPassword(password)) {
        return next(null, false, { message: 'Wrong password' });
      }
      return next(null, user, { message: 'Logged in successfully' });
    } catch (error) {
      return next(null, false);
    }
  })
);
