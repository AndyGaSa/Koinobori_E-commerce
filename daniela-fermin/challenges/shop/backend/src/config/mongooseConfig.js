const debug = require('debug')('shopApi:ddbbConfig');
const { connect } = require('mongoose');

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
