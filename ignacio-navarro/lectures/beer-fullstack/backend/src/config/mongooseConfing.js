const debug = require('debug')('beersApi');
const { connect } = require('mongoose');

connect(process.env.DDBB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => debug('database connection stablished'),
    (error) => debug(error));
