require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/databaseConfig');
require('./src/config/passport-strategies/localStrategy');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

require('./src/config/passportConfig')(server);

const authRouter = require('./src/routes/authRouter');

server.use('/', authRouter);
server.get(
  '/api/unprotected',
  async (req, res) => {
    res.json({
      message: 'Unprotected route works'
    });
  }
);
server.get(
  '/api/protected',
  (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(401);
      res.send();
    }
  },
  async (req, res) => {
    res.json({
      message: 'Protected route works'
    });
  }
);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
