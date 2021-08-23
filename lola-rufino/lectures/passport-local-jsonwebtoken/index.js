require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const User = require('./src/models/userModel');

require('./src/config/databaseConfig');
require('./src/passport/localStrategy');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

require('./src/config/passport-strategies/passportConfig')(server);

const authRouter = require('./src/routes/authRouter');

server.use('/', authRouter);
server.get('/api/users/:userId',
// si queremos proteger o no estas rutas, ver si en la request
// estan los datos de usuario
  (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(401);
      res.send();
    }
  },
  async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      res.json({ user, message: 'Profile works' });
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  });

server.listen(
  port,
  () => debug(`≧◠‿●‿◠≦ ♥ Server is running on http://localhost:${port}`)
);
