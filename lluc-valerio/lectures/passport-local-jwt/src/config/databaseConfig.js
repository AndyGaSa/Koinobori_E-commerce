const { connect } = require('mongoose');
const debug = require('debug')('passportServer:DDBB');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(
  () => debug('Database connection established'),
  (error) => debug(error)
);
