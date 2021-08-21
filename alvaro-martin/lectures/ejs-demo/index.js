const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('server');

require('./src/config/databaseConfig');

const port = process.env.PORT || 5000;
const server = express();

server.use(express.static(path.join(__dirname, '/public')));
server.use(express.json());
server.use(morgan('dev'));
server.set('view engine', 'ejs');
server.get('/home', (req, res) => {
  res.render('index');
});
server.get('/profile', (req, res) => {
  res.render('profile');
});
const userRouter = require('./src/routes/userRoutes');

server.use('/api/user', userRouter);
server.use('/api/task', userRouter);

server.listen(
  port,
  () => debug(`Server is running in http://localhost:${port}`),
);
