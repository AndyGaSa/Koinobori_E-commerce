const { connect } = require('mongoose');
const debug = require('debug')('socialApp');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => debug('Database connected'))
  .catch((error) => debug(error));
