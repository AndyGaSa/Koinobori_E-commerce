const { connect } = require('mongoose');

const debug = require('debug')('toDo:ddbbConfig');

connect(process.env.DDBB_URL, {
  useUnifiedTopology: true,
  useNewUrlParse: true,
}).then(
  () => debug('Database connection stablished'),
  (error) => debug(error),
);
