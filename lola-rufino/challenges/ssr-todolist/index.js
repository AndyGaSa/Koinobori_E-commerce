require('dotenv').config();

const express = require('express');
const { auth } = require('express-openid-connect');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');

const server = express();
const port = process.env.PORT || 5001;

require('./src/config/ddbbConfig');

server.use(morgan('dev'));
server.use(express.json());

server.set('view engine', 'ejs');

const indexRouter = require('./src/routes/indexRouter');
const userRouter = require('./src/routes/userRouter');
const taskRouter = require('./src/routes/taskRouter');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'P097n-saONSD_ce2YZjLa_ORyl6M0MndvTDMapQwcTr-hSEYx7Ni2Ibm8opZwIps',
  baseURL: 'http://localhost:5000',
  clientID: 'TbASZ7ZzMe2p49z05khRpmYtSDK3vUfG',
  issuerBaseURL: 'https://dev-95s0ox-2.us.auth0.com'
};

server.use(auth(config));
server.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
server.use('/index', indexRouter);
server.use('/user', userRouter);
server.use('/task', taskRouter);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
