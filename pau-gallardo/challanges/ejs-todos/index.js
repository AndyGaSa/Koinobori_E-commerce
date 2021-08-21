require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./scr/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.set('view engine', 'ejs');
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const todosRouter = require('./scr/routers/todosRouter');

server.use('/api/todos', todosRouter);

server.listen(port, () => debug(`Server is running on http://localhost:${port}`));
