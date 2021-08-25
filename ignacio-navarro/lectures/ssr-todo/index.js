/** ***************************
         REQUIREMENTS
**************************** */

require('dotenv').config();
require('./configs/dbConfig');
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server:');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

/** ***************************
            VIEWS
**************************** */

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

/** ***************************
        CSS JS PUBLIC
**************************** */

app.use(
  express.static(
    path.join(__dirname, '/public'),
  ),
);
app.use(
  '/css',
  express.static(
    path.join(__dirname,
      '/node_modules/bootstrap/dist/css'),
  ),
);
app.use(
  '/js',
  express.static(
    path.join(__dirname,
      'node_modules/bootstrap/dist/js'),
  ),
);

/** ***************************
            ROUTES
**************************** */

const mainRouter = require('./routers');

app.use('/', mainRouter);

app.listen(port, () => debug('app is running'));
