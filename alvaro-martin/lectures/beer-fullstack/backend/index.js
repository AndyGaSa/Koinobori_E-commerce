const express = require('express');

const server = express();
const port = 5000;

const beersRouter = express.Router();
beersRouter
  .route('/api/beers')
  .get((req, res) => {
    res.send('beers get underconstruction');
  })
  .post('/api/beers')
  .get((req, res) => {
    res.send('beers post underconstruction');
  });

server.use('/', beersRouter);
server.listen(
  port,
  () => console.log(`Server is running on http//localhost:${port}`),
);
