const { connect } = require('mongoose');
const debug = require('debug')('server:mongoose');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(
  () => debug('Database connection stablished'),
  (error) => debug('Database connection error', error)
);
