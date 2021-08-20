require('dotenv').config();
const debug = require('debug')('server');

const express = require('express');

const server = express();
const port = process.env.PORT || 5014;

server.use('/', (req, res) => {
  res.send('hello kitty');
});

server.listen(
  port,
  () => debug(`server is runing at http://localhost${port}`),
);
