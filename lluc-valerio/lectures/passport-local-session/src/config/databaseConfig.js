const { connect } = require('mongoose');
const debug = require('debug')('passportServer:DDBB');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(
  () => debug('Database connection established'),
  (error) => debug(error)
);
