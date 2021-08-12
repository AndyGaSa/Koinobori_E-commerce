const mongoose = require('mongoose');

const { connect } = require('mongoose');

const debug = require('debug')('storeApi:ddbbConfig');

connect(process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(
    () => debug('Data Base connection established'),
    (error) => debug(error)
  );
