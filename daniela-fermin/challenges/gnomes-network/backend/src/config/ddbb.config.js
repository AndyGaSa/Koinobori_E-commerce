const { connect } = require('mongoose');
const debug = require('debug')('gnomesApi:ddbbConfig');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => debug('Database connection established'))
  .catch(({ message }) => debug(message));
