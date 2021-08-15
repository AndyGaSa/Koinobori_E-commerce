const { connect } = require('mongoose');
const debug = require('debug')('beersApi:dbConfig');

connect(
  process.env.DB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
)
  .then(
    () => debug('Database connection stablished'),
    (error) => debug(error),
  );
