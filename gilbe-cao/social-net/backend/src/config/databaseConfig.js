const { connect } = require('mongoose');
const debug = require('debug')('server:ddbb');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
  .then(() => debug('Connected to database'))
  .catch((error) => debug(error));
