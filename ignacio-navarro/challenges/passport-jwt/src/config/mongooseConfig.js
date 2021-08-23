const { connect } = require('mongoose');
const debug = require('debug')('server:mongoose');

connect(
  process.env.DB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug('database connection stablished'),
  (error) => debug('database connection error', error),
);
