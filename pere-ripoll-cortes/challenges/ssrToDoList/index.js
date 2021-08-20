require('dotenv').config();
const debug = require('debug')('server');
const express = require('express');

const server = express();
const port = process.env.PORT || 6000;

server.use('/', (req, res) => {
  res.send('hello world');
});

server.listen(
  port,
  () => debug(`Server is running in port ${port}`),
);
