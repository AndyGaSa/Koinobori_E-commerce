require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

require('./src/configs/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

require('./src/configs/passport.config')(server);

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

const userRouter = require('./src/routers/users.routes');

server.use('/api/users', userRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
