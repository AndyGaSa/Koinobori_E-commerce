const { connect } = require('mongoose');
const debug = require('debug')('passport:ddbb');

connect(process.env.DDBB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => debug('Connected to database!'),
  (error) => debug(error));
