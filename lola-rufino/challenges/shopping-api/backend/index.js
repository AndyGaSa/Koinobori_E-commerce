const express = require('express');
require('dotenv').config();
const debug = require('debug')('products');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/moongooseConfig');

const server = express();
const port = process.env.PORT || 3001;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const productsRouter = require('./src/routes/productsRoute');
const usersRouter = require('./src/routes/usersRoute');

server.use('/api/', productsRouter);
server.use('/api/', usersRouter);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
