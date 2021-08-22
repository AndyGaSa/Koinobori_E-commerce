require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const log = require('debug')('main');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(
  express.static(
    path.join(__dirname, '/public'),
  ),
);

app.set('view engine', 'ejs');

const rootRouter = require('./src/routes/rootRouter');
const profileRouter = require('./src/routes/profileRouter');

app.use('/', rootRouter);
app.use('/profile', profileRouter);

app.listen(port, () => log(`Server runing on localhost:${port}`));
