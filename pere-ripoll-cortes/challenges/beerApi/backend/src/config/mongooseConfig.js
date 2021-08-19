const mongoose = require('mongoose');
const debug = require('debug')('beerApi:ddbbConfig');

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
)
  .then(
    () => debug('Database connection stablished'),
    (error) => debug(error),
  );
