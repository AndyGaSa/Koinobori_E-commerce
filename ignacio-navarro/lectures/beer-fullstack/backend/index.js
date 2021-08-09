const express = require('express');

const server = express();
const port = 5000;

const beersRouter = require('./routes/beerRouter');

server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => console.log(`server is running on http://localhost${port}`),
);
