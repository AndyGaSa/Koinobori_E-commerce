require('dotenv').config();
require('./src/config/ddbbConfig');
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('list');
const cors = require('cors');

const server = express(); // Assign server function.
const port = process.env.PORT || 6000; // Assign port variable.
const tasksRouter = require('./src/routers/tasksRouter');
const usersRouter = require('./src/routers/usersRouter');

server.use(cors());
server.use(express.json()); // Initialize Express dependency.
server.use(morgan('dev')); // Initialize Morgan dependency.
server.use('/api/tasks', tasksRouter);
server.use('/api/users', usersRouter);

server.listen(port, () => debug(`Server is working ${port}`));
