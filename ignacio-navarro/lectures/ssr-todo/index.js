require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug');
const path = require('path');
require('./configs/dbConfig');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(
  express.static(path.join(__dirname, '/public')),
);
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')),
);

const mainRouter = require('./routers');

app.use('/', mainRouter);

app.listen(port, () => debug('app is running'));
