require('dotenv').config();
const debug = require('debug')('store');
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/ddbbConfig');

// Variable que apunta a 'express' invocado.
const server = express();
// Variable que apunta al puerto de entorno.
const port = process.env.PORT || 5000;

// Loguea información en la consola.
server.use(morgan('dev'));
// Procesa una request, (content type JSON).
server.use(express.json());

const itemRouter = require('./src/routes/itemRouter');
const userRouter = require('./src/routes/userRouter');
const cartRouter = require('./src/routes/cartRouter');

server.use('/api/items', itemRouter);
server.use('/api/user', userRouter);
server.use('/api/cart', cartRouter);

server.listen(port, () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`));
