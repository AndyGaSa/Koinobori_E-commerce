const { connect } = require('mongoose');
const debug = require('debug')('beers:ddbbConfig');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(
    () => debug('Database connection established'),
    (error) => debug(error)
  );