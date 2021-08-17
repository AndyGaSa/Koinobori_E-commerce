const { connect } = require('mongoose');
const debug = require('debug')('beerApi:ddbbConfig');

connect(process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => debug('Database connection stablish'),
    () => debug('Database connection error'),
  );
