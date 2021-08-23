const passport = require('passport');
const session = require('express-session');
const User = require('../../models/userModel');

function passportConfig(server) {
  // configuración de passport
  server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));

  // guardar ese usuario en la sesión. puedo escribir en la sesión.
  passport.serializeUser((user, next) => {
    next(null, user.name);
  });
  // obtener de la sesión los datos de ese usuario. puedo leer en la sesión
  passport.deserializeUser(async (name, next) => {
    try {
      const user = await User.findOne({ name });
      next(null, user);
    } catch (error) {
      next(error);
    }
  });

  server.use(passport.initialize);
  server.use(passport.session());
}

module.exports = passportConfig;
